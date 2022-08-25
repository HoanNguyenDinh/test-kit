import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import CircularProgress from '@mui/material/CircularProgress';
import { INTF } from '../../../../base/interfaces/collection';
import { EControllers } from '../../../../base/constants/common';
import { formatRoundPrice, formatToCurrency } from '../../../../base/utils/price.helper';
import { getImageUrl } from '../../../../base/utils/image.helper';
import NTFCard from '../../ntf/ntfCard';
import NoData from '../../me/noData';
import _ from 'lodash';
import { Wrapper, Item, BoxLoading, SeeAllBtn } from './Styled';

interface NTFGridProps {
  isLoading: boolean;
  ntfs: INTF[] | null;
  viewMode: string;
  hasMore: boolean;
  fetchItems: () => void;
  handleSeeAll: () => void;
}

const NTFGrid: FC<NTFGridProps> = (props) => {
  const { isLoading, ntfs, viewMode, hasMore, fetchItems, handleSeeAll } = props;

  const loader = useMemo(() => {
    return (
      <BoxLoading>
        <CircularProgress />
      </BoxLoading>
    );
  }, []);

  const renderNTFs = useMemo(() => {
    if (!ntfs || ntfs.length < 1) {
      return;
    }
    const data: unknown[] = [];
    let key = 0;
    ntfs.map((item: INTF) => {
      key++;

      const img = getImageUrl(item?.img, { w: 228, h: 228 });
      const url = EControllers.NTFDETAIL.replace(':mintAddress', item?.mintAddress) || '';
      const title = item?.title;
      const price = formatToCurrency(item?.price) || null;
      const moonrank = formatToCurrency(item?.rarity?.moonrank?.rank);
      const howrare = formatToCurrency(item?.rarity?.howrare?.rank);
      const symbol = item?.collectionName || '';
      const mintAddress = item?.mintAddress || '';
      const titleArr = _.split(item?.title, '#');
      const identify = titleArr.length > 0 ? titleArr[1] : '';
      const moonrankURL = EControllers.MOONRANKURL.replace(':symbol', symbol).replace(':mintAddress', mintAddress);
      const howrareURL = EControllers.HOWAREISURL.replace(':symbol', symbol.replace(/_/g, '')).replace(':identify', identify);

      const dataProps = {
        img,
        url,
        title,
        moonrank,
        howrare,
        moonrankURL,
        howrareURL,
        price
      };

      data.push(
        <Item key={`collection-${key}`} className='ntf-item'>
          <NTFCard {...dataProps} />
        </Item>
      );
    });
    return data;
  }, [ntfs]);

  const renderSkeletonNTFs = useMemo(() => {
    const data: unknown[] = [];
    let key = 0;
    [...Array(20)].map((item) => {
      key++;
      data.push(
        <Item key={`collection-skeleton-${item}-${key}`} className='ntf-item'>
          <NTFCard skeleton={true} />
        </Item>
      );
    });
    return data;
  }, []);

  if (isLoading || !ntfs) {
    return (
      <Wrapper className={`grid grid-${viewMode}`}>
        <div className='grid'>{renderSkeletonNTFs}</div>
      </Wrapper>
    );
  }

  if (ntfs && ntfs.length < 1) {
    return (
      <NoData
        title={'Oops!'}
        text={'It seems there’s no item you’re looking for. Give it another shot!'}
        btn={<SeeAllBtn onClick={handleSeeAll}>See all</SeeAllBtn>}
      />
    );
  }

  return (
    <Wrapper className={`grid grid-${viewMode}`}>
      {ntfs && ntfs.length > 0 && (
        <InfiniteScroll dataLength={ntfs.length} next={fetchItems} hasMore={hasMore} loader={loader} className='grid'>
          {renderNTFs}
        </InfiniteScroll>
      )}
    </Wrapper>
  );
};

export default observer(NTFGrid);
