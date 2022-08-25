import { FC, ReactNode, useMemo } from 'react';
import { observer } from 'mobx-react';
import { ReloadIcon, MoonRankIcon, HowRareRankIcon } from '../../shared/icons/index';
import NTFShare from '../share';
import PriceWithIcon from '../../shared/priceWithIcon';
import Actions from './actions';
import {
  HBidTitle,
  HBidWrapper,
  InfoWrapper,
  Rarity,
  RarityTooltip,
  RarityLink,
  MarketPlaceShare,
  NotListedPrice,
  Price,
  PriceIcon,
  PriceLabel,
  PriceValue,
  PriceWrappper,
  ReloadWrapper,
  Reload,
  Title
} from './Styled';

interface NTFInformationProps {
  title: ReactNode;
  name: string;
  content: string;
  price: string | number;
  isNotListed: boolean;
  moonrank: string | number;
  moonrankURL: string;
  howrare: string | number;
  howrareURL: string;
  ntfURL: string;
  bidAmount?: string | number;
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
  handleReloadData: () => void;
}

const NTFInformation: FC<NTFInformationProps> = (props) => {
  const {
    title,
    name,
    content,
    price,
    isNotListed,
    moonrank,
    howrare,
    moonrankURL,
    howrareURL,
    ntfURL,
    bidAmount,
    type,
    highestOfferPrice,
    percentHighestOfferValue,
    handleBuyNow,
    handleMakeOffer,
    handleCancelOffer,
    handleAddListing,
    handleChangePrice,
    handleCancelListing,
    handleAcceptHighestOffer,
    handleReloadData
  } = props;

  const titleAndShareEls = useMemo(() => {
    const shareInfo = {
      title: name,
      content,
      url: ntfURL,
      label: 'Share'
    };

    const isShowMoonRank = moonrank && +moonrank !== 0;
    const isShowHowRank = !isShowMoonRank && howrare && +howrare !== 0;

    return (
      <>
        <Title>{title}</Title>
        <MarketPlaceShare>
          <ReloadWrapper>
            {isShowMoonRank && (
              <Rarity>
                <RarityTooltip title='MoonRank' placement='top'>
                  <RarityLink href={moonrankURL} title='' target={'_blank'}>
                    <MoonRankIcon />
                    {moonrank}
                  </RarityLink>
                </RarityTooltip>
              </Rarity>
            )}
            {isShowHowRank && (
              <Rarity>
                <RarityTooltip title='MoonRank' placement='top'>
                  <RarityLink href={howrareURL} title='' target={'_blank'}>
                    <HowRareRankIcon />
                    {howrare}
                  </RarityLink>
                </RarityTooltip>{' '}
              </Rarity>
            )}
            <Reload onClick={() => handleReloadData()}>
              <ReloadIcon />
            </Reload>
          </ReloadWrapper>
          <NTFShare {...shareInfo} />
        </MarketPlaceShare>
      </>
    );
  }, [title, name, ntfURL, content, moonrank, howrare, howrareURL, moonrankURL, handleReloadData]);

  const priceEl = useMemo(() => {
    return (
      <>
        {isNotListed && <NotListedPrice>Not listed</NotListedPrice>}
        {!isNotListed && (
          <>
            <PriceLabel>Current price</PriceLabel>
            <Price>
              <PriceIcon />
              <PriceValue>{price}</PriceValue>
            </Price>
          </>
        )}
      </>
    );
  }, [price, isNotListed]);

  const hBidEl = useMemo(() => {
    if (!bidAmount || bidAmount === '') {
      return <></>;
    }
    return (
      <HBidWrapper>
        <HBidTitle>H/Bid:</HBidTitle>
        <PriceWithIcon price={bidAmount} />
      </HBidWrapper>
    );
  }, [bidAmount]);

  const actions = {
    type,
    highestOfferPrice,
    percentHighestOfferValue,
    handleBuyNow,
    handleMakeOffer,
    handleCancelOffer,
    handleAddListing,
    handleChangePrice,
    handleCancelListing,
    handleAcceptHighestOffer
  };

  return (
    <>
      <InfoWrapper>
        {titleAndShareEls}
        <PriceWrappper>
          {priceEl}
          <Actions {...actions} />
          {hBidEl}
        </PriceWrappper>
      </InfoWrapper>
      {/* <Collapse title='About Boryoku Baby Dragonz' icon={<AboutIcon />}>
        <Description>{content}</Description>
      </Collapse> */}
    </>
  );
};

export default observer(NTFInformation);
