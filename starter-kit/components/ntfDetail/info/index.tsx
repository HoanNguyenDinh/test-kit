import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { getImageUrl } from '../../../../base/utils/image.helper';
import { formatPriceToSOL, formatRoundPrice, formatToCurrency } from '../../../../base/utils/price.helper';
import { formatNTFName } from '../../../../base/utils/text.helper';
import { IBidding, INTF, IGlobalActivities, INTFStats } from '../../../../base/interfaces/collection';
import { EControllers } from '../../../../base/constants/common';
import NTFAttributes from '../attributes';
import NTFDetails from '../details';
import NTFPriceHistory from '../priceHistory';
import Media from '../../shared/media';
import NTFOffers from '../offers';
import NTFInformation from './information';
import _ from 'lodash';
import { Col, ImageSection } from './Styled';

interface INTFInfo {
  ntf: INTF | null;
  activities: IGlobalActivities[] | null;
  highestOffer: IBidding | null;
  percentHighestOffer: number | null;
  type?: string;
  auctions?: any | null;
  biddings: IBidding[] | null;
  walletAddress: string;
  ntfStats: INTFStats | null;
  customAttrs: any[] | null;
  handleReloadData: () => void;
  handleBuyNow?: () => void;
  handleMakeOffer?: () => void;
  handleCancelOffer: () => void;
  handleAddListing?: (value: number | null) => void;
  handleChangePrice?: (value: number | null) => void;
  handleCancelListing?: () => void;
  handleAcceptHighestOffer?: () => void;
}

const NTFInfo: FC<INTFInfo> = (props) => {
  const {
    ntf,
    activities,
    highestOffer,
    percentHighestOffer,
    type,
    auctions,
    biddings,
    walletAddress,
    ntfStats,
    customAttrs,
    handleReloadData,
    handleBuyNow,
    handleMakeOffer,
    handleCancelOffer,
    handleAddListing,
    handleChangePrice,
    handleCancelListing,
    handleAcceptHighestOffer
  } = props;

  const media = {
    imgUrl: ntf?.img ? getImageUrl(ntf.img, { w: 640, h: 640 }) : '',
    alt: ntf?.title || ''
  };

  const details = {
    ntf: ntf,
    mintAddress: ntf?.mintAddress || '',
    tokenAddress: ntf?.id || '',
    owner: ntf?.owner || '',
    sellerFree: ntf?.sellerFeeBasisPoints || ''
  };

  const attrs = {
    attributes: ntf?.attributes || null,
    ntfStats: ntfStats,
    customAttrs: customAttrs
  };

  const offersEl = useMemo(() => {
    return <NTFOffers biddings={biddings} handleCancel={handleCancelOffer} walletAddress={walletAddress} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biddings, walletAddress]);

  const ntfTitle = useMemo(() => {
    return <>{formatNTFName(ntf?.title || '')}</>;
  }, [ntf]);

  const informationEl = useMemo(() => {
    const ntfName = ntf?.title || '';
    const ntfContent = ntf?.content || '';
    const ntfPrice = formatToCurrency(ntf?.price) || '';
    const isNotListed = !ntfPrice || !ntf?.price;
    const ntfURL = window.location.href;
    const bidAmount = auctions ? formatPriceToSOL(auctions?.config?.highestBidAmount, 2) || '' : '';
    const highestOfferPrice = formatPriceToSOL(highestOffer?.bidderAmountLamports, false) || '';
    const percentHighestOfferValue = percentHighestOffer ?? '';
    const ntfMoonRank = formatToCurrency(ntf?.rarity?.moonrank?.rank) || '';
    const ntfHowrare = formatToCurrency(ntf?.rarity?.howrare?.rank) || '';
    const symbol = ntf?.collectionName || '';
    const mintAddress = ntf?.mintAddress || '';
    const titleArr = _.split(ntf?.title, '#');
    const identify = titleArr.length > 0 ? titleArr[1] : '';
    const ntfMoonRankURL = EControllers.MOONRANKURL.replace(':symbol', symbol).replace(':mintAddress', mintAddress);
    const ntfHowRareURL = EControllers.HOWAREISURL.replace(':symbol', symbol.replace(/_/g, '')).replace(':identify', identify);

    const infoProps = {
      title: ntfTitle,
      name: ntfName,
      content: ntfContent,
      price: ntfPrice,
      isNotListed,
      moonrank: ntfMoonRank,
      moonrankURL: ntfMoonRankURL,
      howrare: ntfHowrare,
      howrareURL: ntfHowRareURL,
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
    };

    return <NTFInformation {...infoProps} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ntf, auctions, type, highestOffer, percentHighestOffer, handleAddListing, handleChangePrice, handleReloadData]);

  return (
    <>
      <Col className='col-left'>
        <ImageSection>
          <Media {...media} />
        </ImageSection>
        <NTFPriceHistory activities={activities} />
      </Col>
      <Col className='col-right'>
        {informationEl}
        {offersEl}
        <NTFDetails {...details} />
        <NTFAttributes {...attrs} />
      </Col>
    </>
  );
};

export default observer(NTFInfo);
