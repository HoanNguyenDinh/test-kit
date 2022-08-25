import { FC } from 'react';
import { observer } from 'mobx-react';
import PriceWithIcon from '../../shared/priceWithIcon';
import { QuestionTooltipIcon } from '../../shared/icons';
import { EBuyPriceLabel } from '../../../../base/constants/collection';
import { EControllers } from '../../../../base/constants/common';
import { formatPriceToSOL } from '../../../../base/utils/price.helper';
import { getImageUrl } from '../../../../base/utils/image.helper';
import {
  Tr,
  Td,
  ImageWrapper,
  Image,
  QuestionTooltip,
  Label,
  IconWrapper,
  ColumnStatusWrapper,
  CheckCircleIcon,
  ErrorCircleIcon,
  ImageLink,
  TitleLink,
  CancelBtn
} from './Styled';

interface Props {
  offer: any;
  biddingBalance: number;
  onClick: (item: any) => void;
}

const OfferMadeRow: FC<Props> = (props) => {
  const { offer, biddingBalance, onClick } = props;

  if (!offer) {
    return <></>;
  }

  const offerPrice = formatPriceToSOL(offer?.bidderAmountLamports, false);
  const isValid = !offer.v2 || (offerPrice && +offerPrice <= biddingBalance);
  const icon = isValid ? <CheckCircleIcon /> : <ErrorCircleIcon />;
  const tooltipTitle = isValid ? 'Pending' : 'Insufficient funds';
  const tooltipContent = isValid
    ? `Offer is still pending listing owner's response`
    : `There is not enough SOL in your bidding wallet to fill this offer.`;

  return (
    <Tr role='row'>
      <Td className='col-img' role='cell'>
        <ImageLink href={EControllers.NTFDETAIL.replace(':mintAddress', offer?.mintAddress)} title={offer.title}>
          <ImageWrapper>
            <Image src={getImageUrl(offer.img, { w: 48, h: 48 })}></Image>
          </ImageWrapper>
        </ImageLink>
      </Td>
      <Td className='nameColumn' role='cell'>
        <TitleLink href={EControllers.NTFDETAIL.replace(':mintAddress', offer?.mintAddress)} title={offer.title}>
          {offer.title}
        </TitleLink>
      </Td>
      <Td className='status' role='cell'>
        <ColumnStatusWrapper>
          <IconWrapper>{icon}</IconWrapper>
          {tooltipTitle}
          <QuestionTooltip title={tooltipContent} placement='top'>
            <Label>
              <QuestionTooltipIcon />
            </Label>
          </QuestionTooltip>
        </ColumnStatusWrapper>
      </Td>
      <Td role='cell'>
        <PriceWithIcon price={offerPrice ?? '--'} />
      </Td>
      <Td role='cell'>{offer.price === 0 ? EBuyPriceLabel.NOTLISTES : <PriceWithIcon price={offer?.price ?? '--'} />}</Td>
      <Td className='action' role='cell'>
        <CancelBtn
          onClick={() =>
            onClick({
              image: offer.img,
              collectionName: offer.collectionName,
              collectionTitle: offer.collectionTitle,
              name: offer.title,
              price: formatPriceToSOL(offer?.bidderAmountLamports, false),
              mintAddress: offer.mintAddress
            })
          }>
          Cancel
        </CancelBtn>
      </Td>
    </Tr>
  );
};

export default observer(OfferMadeRow);
