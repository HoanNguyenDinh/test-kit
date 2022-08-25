import { FC, useState } from 'react';
import { observer } from 'mobx-react';
import { ECollapseType } from '../../../../base/constants/common';
import { IPriceFilter } from '../../../../base/interfaces/schema';
import { ArrowDown2Icon } from '../../shared/icons';
import Collapse from '../../shared/collapse';
import {
  PriceType,
  PriceAutoComplete,
  AutoCompleteInput,
  PriceFilter,
  PriceInputs,
  PriceInput,
  PriceLabel,
  PriceActions,
  ApplyBtn
} from './Styled';
import _ from 'lodash';

const options = ['SOL', 'United States Dollar (USD)'];

interface PriceOptionProps {
  selectedPrices: IPriceFilter;
  handlePrices: (minPrice: number | string, maxPrice: string | number) => void;
}

const PriceOption: FC<PriceOptionProps> = (props) => {
  const { selectedPrices, handlePrices } = props;
  const selectedMinPrice = selectedPrices.filterMinPrice;
  const selectedMaxPrice = selectedPrices.filterMaxPrice;
  let defaultMinPrice = {};

  if (selectedMinPrice === 0 || selectedMinPrice) {
    defaultMinPrice = { defaultValue: selectedMinPrice };
  }

  let defaultMaxPrice = {};
  if (selectedMaxPrice === 0 || selectedMaxPrice) {
    defaultMaxPrice = { defaultValue: selectedMaxPrice };
  }

  const [minPrice, setMinPrice] = useState<number | string>(selectedMinPrice);
  const [maxPrice, setMaxPrice] = useState<number | string>(selectedMaxPrice);

  const handleChangeMin = (e: any) => {
    const newPrice = e.currentTarget.value;
    setMinPrice(newPrice);
  };

  const handleChangeMax = (e: any) => {
    const newPrice = e.currentTarget.value;
    setMaxPrice(newPrice);
  };

  const handClick = () => {
    handlePrices(minPrice, maxPrice);
  };

  return (
    <Collapse title='Price' isOpen={false} type={ECollapseType.SECONDARY}>
      <PriceType>
        <PriceAutoComplete
          options={options}
          readOnly
          defaultValue={options[0]}
          renderInput={(params: object) => <AutoCompleteInput {...params} label={<></>} variant='standard' />}
          popupIcon={<ArrowDown2Icon />}
        />
      </PriceType>
      <PriceFilter>
        <PriceInputs>
          <PriceInput placeholder='Min' {...defaultMinPrice} type={'number'} onChange={handleChangeMin} />
          <PriceLabel>to</PriceLabel>
          <PriceInput placeholder='Max' {...defaultMaxPrice} type={'number'} onChange={handleChangeMax} />
        </PriceInputs>
        <PriceActions>
          <ApplyBtn onClick={handClick}>Apply</ApplyBtn>
        </PriceActions>
      </PriceFilter>
    </Collapse>
  );
};

export default observer(PriceOption);
