import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import FilterIcon from '../../shared/icons/filterIcon';
import { CloseIcon } from '../../shared/icons';
import { IPriceFilter } from '../../../../base/interfaces/schema';
import BuyNowOption from './buyNowOption';
import PriceOption from './priceOption';
import AttrOptions from './attrOptions';
import { Wrapper, TitleWrapper, Title, BtnClose, FilteredCount, FilteredValue, FilterContent, FilterScroll } from './Styled';

interface FilterByProps {
  attrs: any[] | null;
  isHideFilter: boolean;
  handleHideFilter: () => void;
  status: string;
  handleStatus: (value: string) => void;
  selectedPrices: IPriceFilter;
  handlePrices: (minPrice: number | string, maxPrice: string | number) => void;
  handleClick: (url: string) => void;
  countFilter: number | string;
}

const FilterBy: FC<FilterByProps> = (props) => {
  const { attrs, isHideFilter, handleHideFilter, status, handleStatus, selectedPrices, handlePrices, handleClick, countFilter } = props;
  const clsFilter = isHideFilter ? '' : 'show';

  const filterTitleEl = useMemo(() => {
    return (
      <>
        <TitleWrapper>
          <Title>
            <FilterIcon /> Filters
          </Title>
          <BtnClose onClick={handleHideFilter}>
            <CloseIcon aria-label='close icon' />
          </BtnClose>
        </TitleWrapper>
      </>
    );
  }, [handleHideFilter]);

  const filteredCount = useMemo(() => {
    if (countFilter < 1) return <></>;
    return (
      <FilteredCount>
        <FilteredValue>{countFilter}</FilteredValue>
      </FilteredCount>
    );
  }, [countFilter]);

  const attrOptionEls = useMemo(() => {
    if (!attrs) {
      return <></>;
    }
    const data: unknown[] = [];
    attrs.map((item: any) => {
      data.push(<AttrOptions key={item.title} {...item} handleClick={handleClick} />);
    });
    return data;
  }, [attrs, handleClick]);

  return (
    <Wrapper className={clsFilter}>
      {filterTitleEl}
      {filteredCount}
      <FilterContent>
        <FilterScroll>
          <BuyNowOption status={status} handleStatus={handleStatus} />
          <PriceOption selectedPrices={selectedPrices} handlePrices={handlePrices} />
          {attrOptionEls}
        </FilterScroll>
      </FilterContent>
    </Wrapper>
  );
};

export default observer(FilterBy);
