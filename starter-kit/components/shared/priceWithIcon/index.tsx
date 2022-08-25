import { FC } from 'react';
import { Price, PriceIcon } from './Styled';

export type IPriceWithIcon = {
  price: number | string | null | undefined;
  placeholder?: string;
  label?: string;
};

const PriceWithIcon: FC<IPriceWithIcon> = (props) => {
  const { price, placeholder, label } = props;

  if (typeof price === null || typeof price === undefined || !price) {
    return (
      <Price>
        {placeholder && <PriceIcon />}
        {placeholder}
      </Price>
    );
  }

  return (
    <Price>
      <PriceIcon />
      {label}
      {price}
    </Price>
  );
};

export default PriceWithIcon;
