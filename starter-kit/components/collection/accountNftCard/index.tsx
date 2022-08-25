import { useMemo } from 'react';
import { IReviewDialog } from '../../../../base/interfaces/common';
import { INTF } from '../../../../base/interfaces/collection';
import { EControllers } from '../../../../base/constants/common';
import { formatPriceToSOL, formatToCurrency } from '../../../../base/utils/price.helper';
import { getImageUrl } from '../../../../base/utils/image.helper';
import { formatNTFName } from '../../../../base/utils/text.helper';
import { MoonRankIcon, HowRareRankIcon } from '../../shared/icons/index';
import _ from 'lodash';
import {
  SkeletonImage,
  SkeletonName,
  SkeletonMarketPlace,
  SkeletonPrice,
  Wrapper,
  ImageWrapper,
  ImageInner,
  Image,
  LinkImage,
  Content,
  Link,
  Title,
  Button,
  Rarity,
  RarityItem,
  RarityLink,
  RarityTooltip
} from './Styled';

type INTFCardPros = {
  action?: {
    text: string;
    handle: (item: IReviewDialog) => void;
  };
  data?: INTF;
  floorPrice?: number;
  skeleton?: boolean;
};

const NTFCard = (props: INTFCardPros) => {
  const { action, data, floorPrice, skeleton } = props;

  const ntfTitle = useMemo(() => {
    return <>{formatNTFName(data?.title || '')}</>;
  }, [data]);

  const floorPriceFormat = formatPriceToSOL(floorPrice, 2);

  if (skeleton) {
    return (
      <Wrapper className='no-hover'>
        <ImageWrapper>
          <LinkImage href='#' title=''>
            <ImageInner>
              <SkeletonImage animation='wave' variant='rectangular' width='100%' height='100%' />
            </ImageInner>
          </LinkImage>
        </ImageWrapper>
        <Content>
          <SkeletonName variant='rectangular' width='85%' />
          <SkeletonMarketPlace variant='rectangular' width='22%' />
          <SkeletonPrice variant='rectangular' width='34%' />
        </Content>
      </Wrapper>
    );
  }

  if (!data) {
    return <></>;
  }

  const image = getImageUrl(data.img, { w: 288, h: 250 });
  const moonrank = formatToCurrency(data?.rarity?.moonrank?.rank);
  const isShowMoonRank = moonrank && +moonrank !== 0;
  const howrare = formatToCurrency(data?.rarity?.howrare?.rank);
  const isShowHowRank = !isShowMoonRank && howrare && +howrare !== 0;
  const symbol = data?.collectionName || '';
  const mintAddress = data?.mintAddress || '';
  const titleArr = _.split(data?.title, '#');
  const identify = titleArr.length > 0 ? titleArr[1] : '';
  const moonrankURL = EControllers.MOONRANKURL.replace(':symbol', symbol).replace(':mintAddress', mintAddress);
  const howrareURL = EControllers.HOWAREISURL.replace(':symbol', symbol.replace(/_/g, '')).replace(':identify', identify);

  return (
    <Wrapper>
      <ImageWrapper>
        <LinkImage href={EControllers.NTFDETAIL.replace(':mintAddress', data?.mintAddress)} title={data?.title}>
          <ImageInner>
            <Image src={image} loading='lazy' alt={data?.img} />
          </ImageInner>
        </LinkImage>
      </ImageWrapper>
      <Content>
        <Rarity>
          {isShowMoonRank && (
            <RarityItem>
              <RarityTooltip title='MoonRank' placement='top'>
                <RarityLink href={moonrankURL} title='' target={'_blank'}>
                  <MoonRankIcon />
                  {moonrank}
                </RarityLink>
              </RarityTooltip>
            </RarityItem>
          )}
          {isShowHowRank && (
            <RarityItem>
              <RarityTooltip title='HowRare.is Rank' placement='top'>
                <RarityLink href={howrareURL} title='' target={'_blank'}>
                  <HowRareRankIcon />
                  {howrare}
                </RarityLink>
              </RarityTooltip>
            </RarityItem>
          )}
        </Rarity>
        <Link href={EControllers.NTFDETAIL.replace(':mintAddress', data?.mintAddress)} title={data.title}>
          <Title>{ntfTitle}</Title>
        </Link>
        {action && (
          <Button
            onClick={() =>
              action.handle({
                owner: data?.owner,
                id: data.id,
                image: data.img,
                collectionName: data?.collectionName ?? '',
                collectionTitle: data?.collectionTitle ?? '',
                name: data.title,
                price: data?.price && data.price > 0 ? +data.price : floorPriceFormat,
                mintAddress: data.mintAddress
              })
            }>
            {action.text}
          </Button>
        )}
      </Content>
    </Wrapper>
  );
};

export default NTFCard;
