import { FC, useMemo } from 'react';
import { CustomDialog, CustomDialogContent, Content, Title, Description, Note, ActionsWrapper, ActionBtn } from './Styled';

interface ILowListingDialogProps {
  price: number | null;
  floorPrice: string | number;
  open: boolean;
  handleContinue: () => void;
  handleCancel: () => void;
}

export const LowListingDialog: FC<ILowListingDialogProps> = (props) => {
  const { price, floorPrice, open, handleContinue, handleCancel } = props;

  const modalContentEl = useMemo(() => {
    return (
      <CustomDialogContent id='buy-now-dialog-description'>
        <Content>
          <Title>Low listing price</Title>
          <Description>
            Your listing price {price} SOL is below floor price {floorPrice} SOL
          </Description>
          <Note>Do you still want to continue?</Note>
          <ActionsWrapper>
            <ActionBtn onClick={() => handleContinue()}>Continue listing</ActionBtn>
            <ActionBtn onClick={() => handleCancel()}>{`It's a mistake`}</ActionBtn>
          </ActionsWrapper>
        </Content>
      </CustomDialogContent>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomDialog open={open} aria-describedby='buy-now-dialog-description' className='buy-now-dialog'>
      {modalContentEl}
    </CustomDialog>
  );
};

export default LowListingDialog;
