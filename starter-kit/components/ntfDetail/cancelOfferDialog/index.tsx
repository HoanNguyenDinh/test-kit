import { FC, useMemo } from 'react';
import Terms from '../../shared/terms';
import PriceWithIcon from '../../shared/priceWithIcon';
import { CloseIcon } from '../../shared/icons';
import {
  CustomDialog,
  CustomDialogTitle,
  CustomDialogContent,
  Content,
  Title,
  CloseBtn,
  Description,
  ActionWrapper,
  CancelOfferBtn,
  Info,
  Name,
  ColletionTitle,
  Prices,
  PriceItem,
  Label,
  TermsWrapper
} from './Styled';

interface ICancelOfferDialogProps {
  open: boolean;
  title: string;
  price: number | string;
  offerPrice: number | null;
  handleCancelOffer: () => void;
  handleClose: () => void;
}

export const CancelOfferDialog: FC<ICancelOfferDialogProps> = (props) => {
  const { title, price, offerPrice, open, handleClose, handleCancelOffer } = props;

  const modalTitleEl = useMemo(() => {
    return (
      <CustomDialogTitle>
        <Title>Cancel the offer</Title>
        <CloseBtn onClick={() => handleClose()}>
          <CloseIcon />
        </CloseBtn>
      </CustomDialogTitle>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const infoAndActionsEl = useMemo(() => {
    return (
      <>
        <Description>
          {`When your offer is canceled, the funds will remain in your bidding wallet until you withdraw them. This is to allow your other bids to remain open and prevent them from becoming invalid. When you're ready to withdraw the funds from your bidding wallet, you can do so from the 'Offers Made' page of your profile.`}
        </Description>
        <ActionWrapper>
          <CancelOfferBtn onClick={() => handleCancelOffer()}>Cancel offer</CancelOfferBtn>
        </ActionWrapper>
        <Info>
          <Name>{title}</Name>
          {/* <ColletionTitle>{ntf?.collectionName}</ColletionTitle> */}
        </Info>
      </>
    );
  }, [title, handleCancelOffer]);

  const priceEl = useMemo(() => {
    return (
      <>
        {price && (
          <PriceItem>
            <Label>Buy now price</Label>
            <PriceWithIcon price={price} />
          </PriceItem>
        )}
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [price]);

  const offerPriceEl = useMemo(() => {
    return (
      <>
        {offerPrice && (
          <PriceItem>
            <Label>Your offer</Label>
            <PriceWithIcon price={offerPrice} />
          </PriceItem>
        )}
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerPrice]);

  const termEl = useMemo(() => {
    return (
      <TermsWrapper>
        <Terms text={`By clicking "Cancel offer"`} />
      </TermsWrapper>
    );
  }, []);

  return (
    <CustomDialog open={open} aria-describedby='make-offer-dialog-description' className='make-offer-dialog'>
      {modalTitleEl}
      <CustomDialogContent id='make-offer-dialog-description'>
        <Content>
          {infoAndActionsEl}
          <Prices>
            {priceEl}
            {offerPriceEl}
          </Prices>
          {termEl}
        </Content>
      </CustomDialogContent>
    </CustomDialog>
  );
};

export default CancelOfferDialog;
