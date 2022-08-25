import { FC, useMemo, useState } from 'react';
import { observer } from 'mobx-react';
import { INTFSortBy } from '../../../../base/interfaces/schema';
import { EViewModeType } from '../../../../base/constants/common';
import FilterIcon from '../../shared/icons/filterIcon';
import { SearchIcon, GridFourIcon, GridFiveIcon, SelectedIcon, SelectIcon } from '../../shared/icons';
import { EDropdownType } from '../../../../base/constants/common';
import Dropdown from '../../shared/dropdown';
import {
  CollectionBarWrapper,
  ButtonFilter,
  SearchWrapper,
  InputSearch,
  SortByWrapper,
  SortByList,
  SortByItem,
  SortByBtn,
  ViewByWrapper,
  ViewByBtn
} from './Styled';

interface BarProps {
  handleHideFilter: () => void;
  handleViewMode: (value: string) => void;
  viewMode: string;
  sortByItems: INTFSortBy[];
  selectedSortBy: string;
  handleSelectedSortBy: (value: INTFSortBy) => void;
  search: string;
  handleSearchText: (text: string) => void;
}

const Bar: FC<BarProps> = (props) => {
  const { handleHideFilter, handleViewMode, viewMode, sortByItems, selectedSortBy, handleSelectedSortBy, search, handleSearchText } = props;
  const selectedObj = JSON.parse(selectedSortBy);
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const handleClickSortItem = (item: INTFSortBy) => {
    setIsShow(false);
    handleSelectedSortBy(item);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChangeSearch = (e: any) => {
    const { value } = e.target;
    handleSearchText(value);
  };

  const viewModeEl = useMemo(() => {
    const isFour = viewMode === EViewModeType.FOUR;
    return (
      <ViewByWrapper>
        <ViewByBtn className={`${isFour ? 'selected' : ''}`} onClick={() => handleViewMode(EViewModeType.FOUR)}>
          <GridFourIcon />
        </ViewByBtn>
        <ViewByBtn className={`${!isFour ? 'selected' : ''}`} onClick={() => handleViewMode(EViewModeType.FIVE)}>
          <GridFiveIcon />
        </ViewByBtn>
      </ViewByWrapper>
    );
  }, [viewMode, handleViewMode]);

  const sortByEl = useMemo(() => {
    const type = EDropdownType.SECONDARY;
    if (!sortByItems || sortByItems.length < 1) return <></>;

    const selectedValue = selectedObj.value;
    const data: unknown[] = [];

    sortByItems.map((item) => {
      const isSelected = selectedObj.key === item.key;
      const label = item.value;
      const cls = isSelected ? 'selected' : '';
      if (isSelected) {
        data.push(
          <SortByItem key={`ntf-sortby-${item.key}`}>
            <SortByBtn className={cls}>
              <SelectedIcon /> {label}
            </SortByBtn>
          </SortByItem>
        );
      } else {
        data.push(
          <SortByItem key={`ntf-sortby-${item.key}`}>
            <SortByBtn className={cls} onClick={() => handleClickSortItem(item)}>
              <SelectIcon /> {label}
            </SortByBtn>
          </SortByItem>
        );
      }
    });

    return (
      <SortByWrapper>
        <Dropdown selectedValue={selectedValue} type={type} isSelected={isShow} handleClick={handleClick}>
          <SortByList>{data}</SortByList>
        </Dropdown>
      </SortByWrapper>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortByItems, selectedObj, isShow]);

  const searchEl = useMemo(() => {
    return (
      <SearchWrapper>
        <SearchIcon />
        <InputSearch placeholder='Search token ID' onChange={onChangeSearch} defaultValue={search} />
      </SearchWrapper>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, onChangeSearch]);

  const filterMobileEl = useMemo(() => {
    return (
      <ButtonFilter onClick={handleHideFilter}>
        <FilterIcon />
      </ButtonFilter>
    );
  }, [handleHideFilter]);

  return (
    <CollectionBarWrapper>
      {filterMobileEl}
      {searchEl}
      {sortByEl}
      {viewModeEl}
    </CollectionBarWrapper>
  );
};

export default observer(Bar);
