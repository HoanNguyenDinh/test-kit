import { FC, useState, useMemo } from 'react';
import { EPriceValidationMessages } from '../../../../base/constants/collection';
import Terms from '../../shared/terms';
import PriceWithIcon from '../../shared/priceWithIcon';
import { CloseIcon } from '../../shared/icons';
import { formatRoundPrice } from '../../../../base/utils/price.helper';
import {
  CustomDialog,
  CustomDialogTitle,
  CustomDialogContent,
  Content,
  Title,
  CloseBtn,
  Description,
  Options,
  Option,
  OptionTitle,
  OptionInfo,
  ActionWrapper,
  InputWrapper,
  Input,
  Error,
  MakeOfferBtn,
  Info,
  Name,
  ColletionTitle,
  Prices,
  PriceItem,
  Label,
  Sub,
  TermsWrapper
} from './Styled';

export interface MakeOfferDialogProps {
  ntfTitle: string;
  collectionName: string;
  buyNowPrice: number | null;
  minOffer: number | null;
  mainWallet: number;
  biddingWallet: number;
  open: boolean;
  handleMakeOffer: (usedBiddingWallet: boolean, price: number) => void;
  handleClose: () => void;
}

export const MakeOfferDialog: FC<MakeOfferDialogProps> = (props) => {
  const { ntfTitle, collectionName, mainWallet, buyNowPrice, minOffer, biddingWallet, open, handleClose, handleMakeOffer } = props;
  const [usedBiddingWallet, setUseBiddingWallet] = useState<boolean>(false);
  const [message, setMessage] = useState<string>(EPriceValidationMessages.LOWER);
  const [offerPrice, setOfferPrice] = useState<number>(buyNowPrice ?? 0);
  const newWalletBalance = mainWallet ? formatRoundPrice(mainWallet - offerPrice, 6) : 0;
  const newBiddingBalance = biddingWallet ? formatRoundPrice(biddingWallet + offerPrice, 3) : 0;

  const offerPriceValue = formatRoundPrice(offerPrice, 2);
  const isShowMainWallet = mainWallet ? true : false;
  const isShowBuyNow = buyNowPrice ? true : false;
  const isShowMinOffer = minOffer ? true : false;

  const checkAndSetMessage = (newPrice: number) => {
    if (newPrice && buyNowPrice && newPrice >= buyNowPrice) {
      setMessage(EPriceValidationMessages.LOWER);
    }
    if (newPrice && minOffer && newPrice < minOffer) {
      setMessage(EPriceValidationMessages.HIGHER);
    }
    if (newPrice && +newPrice > mainWallet) {
      setMessage(EPriceValidationMessages.NOTENOUGHBALANCE);
    }
    if (newPrice && minOffer && buyNowPrice && newPrice >= minOffer && newPrice < buyNowPrice && newPrice < mainWallet) {
      setMessage('');
    }
    if (!newPrice) {
      setMessage(EPriceValidationMessages.EMPTY);
    }
  };

  const handleChangePrice = (e: any) => {
    const newPrice = e.currentTarget.value;
    setOfferPrice(+newPrice ?? 0);
    checkAndSetMessage(newPrice);
  };

  const modalTitleEl = useMemo(() => {
    return (
      <CustomDialogTitle>
        <Title>Make an offer</Title>
        <CloseBtn onClick={() => handleClose()}>
          <CloseIcon />
        </CloseBtn>
      </CustomDialogTitle>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const descriptionEl = useMemo(() => {
    return (
      <Description>
        {`When you make an offer, the funds are kept in your bidding wallet to allow you to make multiple offers using the same funds. To
  view, deposit, or withdraw from your bidding wallet, please visit the 'Offers Made' page of your Magic Eden profile.`}
      </Description>
    );
  }, []);

  const optionEls = useMemo(() => {
    return (
      <Options>
        <Option className={usedBiddingWallet ? '' : 'selected'} onClick={() => setUseBiddingWallet(false)}>
          <OptionTitle>Fund the offer</OptionTitle>
          <OptionInfo>Transfer money from your main wallet to the bidding wallet account.</OptionInfo>
        </Option>
        {isShowMainWallet && (
          <Option className={usedBiddingWallet ? 'selected' : ''} onClick={() => setUseBiddingWallet(true)}>
            <OptionTitle>Use bidding wallet (advanced)</OptionTitle>
            <OptionInfo>You can make this offer using the funds which you already have held in your bidding wallet.</OptionInfo>
          </Option>
        )}
      </Options>
    );
  }, [isShowMainWallet, usedBiddingWallet]);

  const infoAnActionsEl = useMemo(() => {
    return (
      <>
        <ActionWrapper>
          <InputWrapper>
            <Input type={'number'} min='0' defaultValue={buyNowPrice ?? ''} onChange={handleChangePrice} />
            {message && <Error>{message}</Error>}
          </InputWrapper>
          <MakeOfferBtn onClick={() => handleMakeOffer(usedBiddingWallet, offerPrice)} disabled={message !== '' ? true : false}>
            Make offer
          </MakeOfferBtn>
        </ActionWrapper>
        <Info>
          <Name>{ntfTitle}</Name>
          {/* <ColletionTitle>{collectionName}</ColletionTitle> */}
        </Info>
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, buyNowPrice, usedBiddingWallet, offerPrice, ntfTitle]);

  const buyNowPriceEl = useMemo(() => {
    return (
      <>
        {isShowBuyNow && (
          <PriceItem className={'buyNow-price'}>
            <Label>Buy now price</Label>
            <PriceWithIcon price={buyNowPrice} />
          </PriceItem>
        )}
      </>
    );
  }, [isShowBuyNow, buyNowPrice]);

  const mainWalletEl = useMemo(() => {
    return (
      <PriceItem>
        <Label>Main wallet balance</Label>
        <PriceWithIcon price={mainWallet} placeholder={'0'} />
      </PriceItem>
    );
  }, [mainWallet]);

  const biddingWalletEl = useMemo(() => {
    return (
      <PriceItem>
        <Label>Bidding wallet balance</Label>
        <PriceWithIcon price={biddingWallet} placeholder={'0'} />
      </PriceItem>
    );
  }, [biddingWallet]);

  const minOfferEl = useMemo(() => {
    return (
      <>
        {isShowMinOffer && (
          <PriceItem>
            <Label>Minimum offer (50%)</Label>
            <PriceWithIcon price={minOffer} />
          </PriceItem>
        )}
      </>
    );
  }, [isShowMinOffer, minOffer]);

  const newWalletBalanceEl = useMemo(() => {
    return (
      <PriceItem>
        <Label>
          New main wallet balance{' '}
          <Sub className='sub'>
            <PriceWithIcon price={offerPriceValue} label={'-'} />
          </Sub>
        </Label>
        <PriceWithIcon price={newWalletBalance} placeholder={'0'} />
      </PriceItem>
    );
  }, [offerPriceValue, newWalletBalance]);

  const newBiddingBalanceEl = useMemo(() => {
    return (
      <PriceItem>
        <Label>
          New bidding wallet balance{' '}
          <Sub>
            <PriceWithIcon price={offerPriceValue} label={'+'} />
          </Sub>
        </Label>
        <PriceWithIcon price={newBiddingBalance} placeholder={'0'} />
      </PriceItem>
    );
  }, [offerPriceValue, newBiddingBalance]);

  const termEl = useMemo(() => {
    return (
      <TermsWrapper>
        <Terms text={`By clicking "Make offer"`} />
      </TermsWrapper>
    );
  }, []);

  return (
    <CustomDialog open={open} aria-describedby='make-offer-dialog-description' className='make-offer-dialog'>
      {modalTitleEl}
      <CustomDialogContent id='make-offer-dialog-description'>
        <Content>
          {descriptionEl}
          {optionEls}
          {infoAnActionsEl}
          <Prices>
            {buyNowPriceEl}
            {minOfferEl}
            {mainWalletEl}
            {biddingWalletEl}
          </Prices>
          {!usedBiddingWallet && (
            <Prices>
              {newWalletBalanceEl}
              {newBiddingBalanceEl}
            </Prices>
          )}
          {termEl}
        </Content>
      </CustomDialogContent>
    </CustomDialog>
  );
};

export default MakeOfferDialog;
