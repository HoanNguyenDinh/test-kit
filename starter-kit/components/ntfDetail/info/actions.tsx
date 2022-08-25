import { FC, useMemo, useState } from 'react';
import { observer } from 'mobx-react';
import Terms from '../../shared/terms';
import { ENTFActionTypes } from '../../../../base/constants/collection';
import { ActionWrapper, ConnectBtn, ActionBtn, ActionOutlineBtn, ListNowInput, TermsWrapper, ActionTooltip } from './Styled';

interface IActions {
  type?: string;
  highestOfferPrice: string | number;
  percentHighestOfferValue: string | number;
  handleBuyNow?: () => void;
  handleMakeOffer?: () => void;
  handleCancelOffer?: () => void;
  handleAddListing?: (value: number | null) => void;
  handleChangePrice?: (value: number | null) => void;
  handleCancelListing?: () => void;
  handleAcceptHighestOffer?: () => void;
}

const Actions: FC<IActions> = (props) => {
  const {
    type,
    highestOfferPrice,
    percentHighestOfferValue,
    handleBuyNow = () => {
      return false;
    },
    handleMakeOffer = () => {
      return false;
    },
    handleCancelOffer = () => {
      return false;
    },
    handleAddListing = () => {
      return false;
    },
    handleChangePrice = () => {
      return false;
    },
    handleCancelListing = () => {
      return false;
    },
    handleAcceptHighestOffer = () => {
      return false;
    }
  } = props;

  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [priceUpdated, setPriceUpdated] = useState<number | null>(null);

  const handleChangePriceValue = (e: any) => {
    const newPrice = +e.currentTarget.value;
    setPriceUpdated(newPrice);
    if (newPrice > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const actionsEl = useMemo(() => {
    switch (type) {
      case ENTFActionTypes.BUY:
        return (
          <ActionWrapper className='acts-full'>
            <ActionBtn onClick={() => handleBuyNow()} className='btn-fixed-w'>
              Buy Now
            </ActionBtn>
            <ActionOutlineBtn onClick={() => handleMakeOffer()} className='btn-fixed-w'>
              Make an Offer
            </ActionOutlineBtn>
          </ActionWrapper>
        );
      case ENTFActionTypes.MAKEOFFERONLY:
        return (
          <>
            <ActionWrapper>
              <ActionBtn onClick={() => handleMakeOffer()} className='full'>
                Make an offer
              </ActionBtn>
            </ActionWrapper>
            <TermsWrapper>
              <Terms text={`By clicking "Make an offer"`} />
            </TermsWrapper>
          </>
        );
      case ENTFActionTypes.OFFERMADE:
        return (
          <>
            <ActionWrapper>
              <ActionBtn onClick={() => handleCancelOffer()} className='full'>
                Cancel offer
              </ActionBtn>
            </ActionWrapper>
            <TermsWrapper>
              <Terms text={`By clicking "Cancel offer"`} />
            </TermsWrapper>
          </>
        );
      case ENTFActionTypes.CANCELOFFERLISTED:
        return (
          <>
            <ActionWrapper className='actions-full'>
              <ActionBtn onClick={() => handleBuyNow()} className='btn-fixed-w'>
                Buy now
              </ActionBtn>
              <ActionBtn onClick={() => handleCancelOffer()} className='btn-fixed-w'>
                Cancel offer
              </ActionBtn>
            </ActionWrapper>
            <TermsWrapper>
              <Terms text={`By clicking "Buy now" or "Cancel offer"`} />
            </TermsWrapper>
          </>
        );
      case ENTFActionTypes.LIST:
        return (
          <>
            <ActionWrapper>
              <ListNowInput placeholder='List price (SOL)' type={'number'} onChange={handleChangePriceValue} />
              <ActionBtn onClick={() => handleAddListing(priceUpdated)} disabled={isDisabled} className='btn-nowrap'>
                List now
              </ActionBtn>
            </ActionWrapper>
            <TermsWrapper>
              <Terms text={`By clicking "List now"`} />
            </TermsWrapper>
          </>
        );
      case ENTFActionTypes.LISTED:
        return (
          <>
            <ActionWrapper>
              <ListNowInput placeholder='List price (SOL)' type={'number'} onChange={handleChangePriceValue} />
              <ActionBtn onClick={() => handleChangePrice(priceUpdated)} disabled={isDisabled} className='btn-nowrap'>
                Change Price
              </ActionBtn>
            </ActionWrapper>
            <ActionWrapper>
              <ActionBtn onClick={() => handleCancelListing()} className='full'>
                Cancel listing
              </ActionBtn>
            </ActionWrapper>
            <TermsWrapper>
              <Terms text={`By clicking "Cancel listing"`} />
            </TermsWrapper>
          </>
        );
      case ENTFActionTypes.OFFERRECEIVEDLIST:
        return (
          <>
            <ActionWrapper>
              <ListNowInput placeholder='List price (SOL)' type={'number'} onChange={handleChangePriceValue} />
              <ActionBtn onClick={() => handleAddListing(priceUpdated)} disabled={isDisabled} className='btn-nowrap'>
                List now
              </ActionBtn>
            </ActionWrapper>
            <TermsWrapper>
              <Terms text={`By clicking "List now"`} />
            </TermsWrapper>
            <ActionWrapper>
              <ActionTooltip
                title={`This offer is of ${percentHighestOfferValue}% your listing price`}
                placement='top'
                leaveDelay={0}
                classes={{ tooltip: 'MuiTooltip-tooltip-detail-action' }}>
                <ActionBtn onClick={() => handleCancelListing()} className='full'>
                  Accept highest offer @{highestOfferPrice} SOL
                </ActionBtn>
              </ActionTooltip>
            </ActionWrapper>
          </>
        );
      case ENTFActionTypes.OFFERRECEIVEDLISTED:
        return (
          <>
            <ActionWrapper>
              <ListNowInput placeholder='List price (SOL)' type={'number'} onChange={handleChangePriceValue} />
              <ActionBtn onClick={() => handleChangePrice(priceUpdated)} disabled={isDisabled} className='btn-nowrap'>
                Change Price
              </ActionBtn>
            </ActionWrapper>
            <ActionWrapper>
              <ActionTooltip
                title={percentHighestOfferValue ? `This offer is of  ${percentHighestOfferValue}% your listing price` : ''}
                placement='top'
                leaveDelay={0}
                classes={{ tooltip: 'MuiTooltip-tooltip-detail-action' }}>
                <ActionBtn onClick={() => handleAcceptHighestOffer()}>Accept highest offer @{highestOfferPrice} SOL</ActionBtn>
              </ActionTooltip>
              <ActionBtn onClick={() => handleCancelListing()}>Cancel Listing</ActionBtn>
            </ActionWrapper>
            <TermsWrapper>
              <Terms text={`By clicking "Cancel Listing" or "Accept highest offer"`} />
            </TermsWrapper>
          </>
        );
      default:
        return <ConnectBtn>Connect Wallet</ConnectBtn>;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, priceUpdated, highestOfferPrice, percentHighestOfferValue, isDisabled]);

  return <>{actionsEl}</>;
};

export default observer(Actions);
