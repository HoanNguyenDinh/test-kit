import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { BuyNowWrapper, Label, SwitchWrapper, SwitchBuyNow } from './Styled';

interface BuyNowOptionProps {
  status: string;
  handleStatus: (value: string) => void;
}

const BuyNowOption: FC<BuyNowOptionProps> = (props) => {
  const { status, handleStatus } = props;

  const isBuyNowFilter = useMemo(() => {
    return status === '';
  }, []);

  const handleChange = (e: any) => {
    const newVal = e.target.checked;
    handleStatus(newVal ? '' : '[all]');
  };

  const buyNowEl = useMemo(() => {
    return (
      <BuyNowWrapper>
        <Label>Buy Now</Label>
        <SwitchWrapper>
          <SwitchBuyNow defaultChecked={isBuyNowFilter} onChange={handleChange} />
        </SwitchWrapper>
      </BuyNowWrapper>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleChange]);

  return <>{buyNowEl}</>;
};

export default observer(BuyNowOption);
