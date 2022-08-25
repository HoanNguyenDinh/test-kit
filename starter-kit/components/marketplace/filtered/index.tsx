import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { IPriceFilter } from '../../../../base/interfaces/schema';
import { CloseIcon } from '../../shared/icons';
import { priceToSOL } from '../../../../base/utils/price.helper';
import { Wrapper, List, Item, ClearAllBtn, ClearBtn, Label, Content } from './Styled';

interface FilteredProps {
  isStatus: boolean;
  priceFilter: IPriceFilter;
  selectedAttrs: any;
}

const Filtered: FC<FilteredProps> = (props) => {
  const { isStatus, priceFilter, selectedAttrs } = props;

  const statusEl = useMemo(() => {
    if (!isStatus) return <></>;
    return (
      <Item>
        <Content>
          <Label>All items</Label>
          <ClearBtn>
            <CloseIcon />
          </ClearBtn>
        </Content>
      </Item>
    );
  }, [isStatus]);

  const pricesEl = useMemo(() => {
    if (!isStatus) return <></>;
    let minPrice = priceFilter.filterMinPrice;
    let maxPrice = priceFilter.filterMaxPrice;
    minPrice = priceToSOL(+minPrice, 2) || '';
    maxPrice = priceToSOL(+maxPrice, 2) || '';
    let text = '';
    text += minPrice ? minPrice : '';

    return (
      <Item>
        <Content>
          <Label>SOL: 10.00 - 300.00</Label>
          <ClearBtn>
            <CloseIcon />
          </ClearBtn>
        </Content>
      </Item>
    );
  }, [priceFilter]);

  if (!isStatus || !priceFilter || !selectedAttrs) {
    return <></>;
  }

  return (
    <Wrapper>
      <List>
        <Item>
          <ClearAllBtn>Clear All</ClearAllBtn>
        </Item>
        {statusEl}
        {pricesEl}

        <Item>
          <Content>
            <Label>Green</Label>
            <ClearBtn>
              <CloseIcon />
            </ClearBtn>
          </Content>
        </Item>
        <Item>
          <Content>
            <Label>Blue</Label>
            <ClearBtn>
              <CloseIcon />
            </ClearBtn>
          </Content>
        </Item>
      </List>
    </Wrapper>
  );
};

export default observer(Filtered);
