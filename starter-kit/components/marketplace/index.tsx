import { FC, useEffect, useState, useMemo, useCallback } from 'react';
import { observer } from 'mobx-react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { EControllers, ENTFActivityType, EViewModeType } from '../../../base/constants/common';
import { INTFSortBy, IPriceFilter } from '../../../base/interfaces/schema';
import { priceToSOL } from '../../../base/utils/price.helper';
import ItemsIcon from '../../components/shared/icons/itemsIcon';
import ActivitiesIcon from '../../components/shared/icons/activitiesIcon';
import { useCollectionSymbols } from '../../../base/hooks/useOrganization';
import { useCollectionInfo } from '../../../base/hooks/useCollectionInfo';
import { useEscrowStats } from '../../../base/hooks/useEscrowStats';
import { useHolderStats } from '../../../base/hooks/useHolderStats';
import { useCollectionActivities } from '../../../base/hooks/useActivities';
import { useNTFs } from '../../../base/hooks/useNTFs';
import useLocalStorage from '../../../base/hooks/useLocalStorage';
// import PageLoading from '../shared/pageLoading';
import Tabs, { TabItemType } from '../../components/shared/tabs';
import CollectionInfo from './info';
import FilterBy from './filterBy';
import Bar from './bar';
// import Filtered from './filtered';
import NTFGrid from './ntfGrid';
import CollectionActivities from '../ntf/activities';
import _, { debounce } from 'lodash';
import { ContentWrapper, TabContent, Main } from './Styled';

const tabs: TabItemType[] = [
  {
    key: 'items',
    text: (
      <>
        <ItemsIcon />
        Items
      </>
    )
  },
  {
    key: 'activity',
    text: (
      <>
        <ActivitiesIcon />
        Activity
      </>
    )
  }
];

const sortByItems: INTFSortBy[] = [
  { key: 'recentlyListed', searchKey: 'createdAt', searchValue: '-1', value: 'Recently Listed' },
  { key: 'priceLowToHigh', searchKey: 'takerAmount', searchValue: '1', value: 'Price: Low to high' },
  { key: 'priceHighToLow', searchKey: 'takerAmount', searchValue: '-1', value: 'Price: High to low' },
  { key: 'moonrankCommonToRare', searchKey: 'rarity.moonrank.rank', searchValue: '-1', value: 'Moonrank: Common to Rare' },
  { key: 'moonrankRareToCommon', searchKey: 'rarity.moonrank.rank', searchValue: '1', value: 'Moonrank: Rare to Common' }
];

interface CollectionListingProps {
  handleSetSeo: (value: object) => void;
}

const CollectionListing: FC<CollectionListingProps> = (props) => {
  const { handleSetSeo } = props;
  const { symbol } = useParams();
  const navigate = useNavigate();
  const { symbols } = useCollectionSymbols();

  const [searchParams] = useSearchParams();
  let search = searchParams.get('search')?.toString() || '';
  search = decodeURIComponent(search) || '';
  let status = searchParams.get('status')?.toString() || '';
  status = decodeURIComponent(status) || '';
  const priceParam = searchParams.get('price');
  const attributes = searchParams.get('attributes');
  const selectedAttrs = attributes ? JSON.parse(decodeURIComponent(attributes)) : null;
  const countFilter = useMemo(() => {
    let count = 0;
    // if (status) {
    //   count += 1;
    // }
    // if (priceParam) {
    //   count += 1;
    // }
    _.map(selectedAttrs, (items) => {
      count += items.length;
    });
    return count;
  }, [selectedAttrs]);

  const defaultPriceFilter = {
    filterMaxPrice: '',
    filterMinPrice: ''
  };
  const seletedPricesParam: IPriceFilter = priceParam ? JSON.parse(priceParam) : defaultPriceFilter;
  const selectedPrices: IPriceFilter = {
    filterMaxPrice: priceToSOL(+seletedPricesParam.filterMaxPrice) || '',
    filterMinPrice: priceToSOL(+seletedPricesParam.filterMinPrice) || ''
  };
  const minParam = seletedPricesParam.filterMinPrice;
  const maxParam = seletedPricesParam.filterMaxPrice;

  const { collectionInfo } = useCollectionInfo(symbol);
  const { escrowStats } = useEscrowStats(symbol);
  const { holderStats } = useHolderStats(symbol);
  const { activities } = useCollectionActivities(symbol);

  const [skip, setSkip] = useState<number>(0);
  const limit = 20;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<string | number>(tabs[0].key);
  const [selectedSortBy, setSelectedSortBy] = useLocalStorage('sortBy', JSON.stringify(sortByItems[2]));

  const { isNTFsLoding, ntfs, resetNTFs } = useNTFs(symbol, skip, limit, selectedSortBy, search, status, minParam, maxParam, attributes);

  const [isHideFilter, setIsHideFilter] = useState<boolean>(true);
  const [viewMode, setViewMode] = useLocalStorage('viewMode', EViewModeType.FOUR);

  const hasMore = useMemo(() => {
    const isMore = !ntfs ? true : ntfs.length >= currentPage * limit;
    return isMore;
  }, [ntfs, currentPage, limit]);

  const fetchItems = () => {
    // debouncedMoreItems();
    let timeout: any = null;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setSkip(currentPage * limit);
      setCurrentPage(currentPage + 1);
    }, 1500);
  };

  const handleHideFilter = () => {
    setIsHideFilter(!isHideFilter);
  };

  const handleViewMode = (value: string) => {
    setViewMode(value);
  };

  const handleSelectedTab = (value: string | number) => {
    setSelectedTab(value);
  };

  const handleSelectedSortBy = (item: INTFSortBy) => {
    resetNTFs();
    setSkip(0);
    setCurrentPage(1);
    setSelectedSortBy(JSON.stringify(item));
  };

  const handleSearchText = (value: string) => {
    debounceSearch(value);
  };

  const getParams = (
    searchText: string = '',
    statusText: string = '',
    pricesFilter: IPriceFilter,
    selectedAttrTite: string = '',
    selectedAttrValue: any[] = []
  ) => {
    let params = '';
    const isSearchText = searchText !== '';
    const isStatus = statusText !== '';
    if (isSearchText) {
      const textParse = encodeURIComponent(searchText);
      params += `search=${textParse}`;
    }
    if (isStatus) {
      const statusParse = encodeURIComponent(statusText);
      params += isSearchText ? `&status=${statusParse}` : `status=${statusParse}`;
    }

    let pricesText = '';
    if (pricesFilter.filterMinPrice !== '' && pricesFilter.filterMaxPrice != '') {
      pricesText = JSON.stringify({
        filterMaxPrice: +pricesFilter.filterMaxPrice * LAMPORTS_PER_SOL,
        filterMinPrice: +pricesFilter.filterMinPrice * LAMPORTS_PER_SOL
      });
    } else if (pricesFilter.filterMinPrice !== '') {
      pricesText = JSON.stringify({ filterMinPrice: +pricesFilter.filterMinPrice * LAMPORTS_PER_SOL });
    } else if (pricesFilter.filterMaxPrice !== '') {
      pricesText = JSON.stringify({ filterMaxPrice: +pricesFilter.filterMaxPrice * LAMPORTS_PER_SOL });
    }
    const qsPriceFilter = encodeURIComponent(pricesText);
    if (qsPriceFilter != '') {
      params += isStatus || isSearchText ? `&price=${qsPriceFilter}` : `price=${qsPriceFilter}`;
    }

    const selectedAttrsFilterData = attributes ? JSON.parse(decodeURIComponent(attributes)) : null;
    let attrsData = selectedAttrsFilterData;
    if (selectedAttrTite != '' && selectedAttrValue) {
      if (!attrsData || attrsData.length < 0) {
        attrsData = { [selectedAttrTite]: selectedAttrValue };
      } else {
        attrsData[selectedAttrTite] = selectedAttrValue;
      }

      let selectedAttrsFilter = JSON.stringify(attrsData);
      if (attrsData[selectedAttrTite] && attrsData[selectedAttrTite].length < 1) {
        let newSelectedAttrs: object | null = null;
        _.map(attrsData, (item: any, key: any) => {
          if (key !== selectedAttrTite) {
            newSelectedAttrs = {
              ...newSelectedAttrs,
              ...{ [key]: item }
            };
          }
        });
        selectedAttrsFilter = JSON.stringify(newSelectedAttrs || []);
      }

      if (selectedAttrsFilter) {
        const qsAttrsFilter = encodeURIComponent(selectedAttrsFilter);
        if (qsAttrsFilter !== '' && qsAttrsFilter !== '%5B%5D') {
          params += isStatus || isSearchText || qsPriceFilter ? `&attributes=${qsAttrsFilter}` : `attributes=${qsAttrsFilter}`;
        }
      }
    } else if (attrsData) {
      const selectedAttrsFilter = JSON.stringify(attrsData);
      const qsAttrsFilter = encodeURIComponent(selectedAttrsFilter);
      if (qsAttrsFilter != '') {
        params += isStatus || isSearchText || qsPriceFilter ? `&attributes=${qsAttrsFilter}` : `attributes=${qsAttrsFilter}`;
      }
    }
    return params;
  };

  const getDataBySearch = (text: string, symbol: string | undefined) => {
    if (symbol) {
      const params = getParams(text, status, selectedPrices);
      resetNTFs();
      setSkip(0);
      setCurrentPage(1);
      navigate(EControllers.MARKETPLACE.replace(':symbol', symbol) + '?' + params);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useCallback(
    debounce((text: string) => getDataBySearch(text, symbol), 1000),
    [symbol, getDataBySearch]
  );

  const handleStatus = (value: string) => {
    if (symbol) {
      const params = getParams(search, value, selectedPrices);
      resetNTFs();
      setSkip(0);
      setCurrentPage(1);
      navigate(EControllers.MARKETPLACE.replace(':symbol', symbol) + '?' + params);
    }
  };

  const handlePrices = (minPrice: number | string, maxPrice: string | number) => {
    const isMinPrice = minPrice === 0 || minPrice;
    const isMaxPrice = maxPrice === 0 || maxPrice;
    const isSelectedMinPrice = selectedPrices.filterMinPrice === 0 || selectedPrices.filterMinPrice;
    const isSelectedMaxPrice = selectedPrices.filterMaxPrice === 0 || selectedPrices.filterMaxPrice;
    const isSameMinPrice = minPrice === selectedPrices.filterMinPrice;
    const isSameMaxPrice = maxPrice === selectedPrices.filterMaxPrice;
    const isFilter =
      symbol && (isMinPrice || isMaxPrice || isSelectedMinPrice || isSelectedMaxPrice) && (!isSameMinPrice || !isSameMaxPrice);
    if (isFilter) {
      const priceVals = {
        filterMaxPrice: maxPrice,
        filterMinPrice: minPrice
      };
      const params = getParams(search, status, priceVals);
      resetNTFs();
      setSkip(0);
      setCurrentPage(1);
      navigate(EControllers.MARKETPLACE.replace(':symbol', symbol) + '?' + params);
    }
  };

  const handleClick = (url: string) => {
    resetNTFs();
    setSkip(0);
    setCurrentPage(1);
    navigate(url);
  };

  const handleSeeAll = () => {
    if (symbol) {
      resetNTFs();
      setSkip(0);
      setCurrentPage(1);
      navigate(EControllers.MARKETPLACE.replace(':symbol', symbol));
    }
  };

  useEffect(() => {
    if (collectionInfo) {
      handleSetSeo({
        title: `${collectionInfo.name} Marketplace`,
        description: collectionInfo.description,
        keywords: '',
        og: {
          title: `${collectionInfo.name} Marketplace`,
          description: collectionInfo.description,
          image: collectionInfo.image
        }
      });
    }
  }, [collectionInfo, handleSetSeo]);

  const availableAttrs = useMemo(() => {
    return escrowStats?.availableAttributes || [];
  }, [escrowStats]);

  const groupAttrs = useMemo(() => {
    if (!availableAttrs) return null;
    return _.groupBy(availableAttrs, (item) => item.attribute?.trait_type) || [];
  }, [availableAttrs]);

  const attrs = useMemo(() => {
    if (!groupAttrs) return null;
    const selectedVals = selectedAttrs;
    const data = _.map(groupAttrs, (attr, title: string) => {
      const selectedItem = selectedVals ? selectedVals[title] || [] : [];
      const items = _.map(attr, (item) => {
        const traitType = item.attribute?.trait_type || '';
        let value = item.attribute?.value || '';
        value = typeof value === 'number' ? value.toString() : value;
        const key = traitType.replace(/ /g, '-').toLowerCase() + '_' + value.replace(/ /g, '').toLowerCase();
        const selectedAttr = selectedAttrs ? _.includes(selectedAttrs[title] || [], value) : false;
        let selectedData = [];

        if (selectedAttr && selectedItem) {
          selectedData = _.filter(selectedItem, (val) => val !== value);
        } else if (selectedItem) {
          selectedData = [...selectedItem, value];
        } else {
          selectedData = [value];
        }

        const params = getParams(search, status, selectedPrices, title, selectedData);
        let url = '#';
        if (symbol) {
          url = EControllers.MARKETPLACE.replace(':symbol', symbol) + '?' + params;
        }

        return {
          key: key,
          selected: selectedAttr,
          url: url,
          attr: item
        };
      });
      return { title: title, items: items };
    });

    return data || null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupAttrs, search, status, selectedAttrs, selectedPrices, symbol]);

  useEffect(() => {
    const isOK = _.includes(symbols, symbol);
    if (!isOK && symbols && symbols.length > 0) {
      navigate(EControllers.NOTFOUND);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol, symbols]);

  // if (!CollectionInfo || !symbols || symbols.length < 1) {
  //   return <PageLoading />;
  // }

  const infoProps = {
    collectionInfo,
    escrowStats,
    holderStats
  };

  const ntfBarProps = {
    handleHideFilter,
    handleViewMode,
    viewMode,
    sortByItems,
    selectedSortBy,
    handleSelectedSortBy,
    search,
    handleSearchText
  };

  const ntfGridProps = {
    isLoading: isNTFsLoding && currentPage === 1,
    ntfs,
    viewMode,
    hasMore,
    fetchItems,
    handleSeeAll
  };

  // const filteredProps = {
  //   isStatus: status ? true : false,
  //   priceFilter: priceParam ? JSON.parse(priceParam) : null,
  //   selectedAttrs
  // };

  return (
    <>
      <CollectionInfo {...infoProps} />
      <ContentWrapper>
        <FilterBy
          attrs={attrs}
          isHideFilter={isHideFilter}
          handleHideFilter={handleHideFilter}
          status={status}
          handleStatus={handleStatus}
          selectedPrices={selectedPrices}
          handlePrices={handlePrices}
          handleClick={handleClick}
          countFilter={countFilter}
        />
        <Main>
          <Tabs items={tabs} selectedTab={selectedTab} handleSelectedTab={handleSelectedTab} />
          <TabContent className={`${selectedTab === tabs[0].key ? 'selected' : ''}`}>
            <Bar {...ntfBarProps} />
            {/* <Filtered /> */}
            <NTFGrid {...ntfGridProps} />
          </TabContent>
          <TabContent className={`${selectedTab === tabs[1].key ? 'selected' : ''}`}>
            <CollectionActivities activities={activities} type={ENTFActivityType.DEFAULT} showName={true} />
          </TabContent>
        </Main>
      </ContentWrapper>
    </>
  );
};

export default observer(CollectionListing);
