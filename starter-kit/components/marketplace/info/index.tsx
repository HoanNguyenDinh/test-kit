import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { ICollectionInfo, IEscrowStats } from '../../../../base/interfaces/collection';
import { IHolderStats } from '../../../../base/interfaces/schema';
import { getImageUrl } from '../../../../base/utils/image.helper';
import { priceToSOL, formatToCurrency, formatCash } from '../../../../base/utils/price.helper';
import CollectionAttrs from './attrs';
import CollectionSocials from './socials';
import {
  ColLeft,
  ColRight,
  Wrapper,
  Grid,
  Col,
  Image,
  ImageInner,
  ImageWrapper,
  SkeletonImage,
  TitleContainer,
  Title,
  SkeletonTitle,
  SkeletonDesLg,
  SkeletonDesMd,
  SkeletonDesSm,
  Description,
  DescriptionWrapper
} from './Styled';
import { ESocialRoutes } from '../../../../base/constants/common';

interface CollectionInfoProps {
  collectionInfo: ICollectionInfo | null;
  holderStats: IHolderStats | null;
  escrowStats: IEscrowStats | null;
}

const CollectionInfo: FC<CollectionInfoProps> = (props) => {
  const { collectionInfo, holderStats, escrowStats } = props;

  const isSkeleton = !collectionInfo;
  const title = collectionInfo?.name || '';
  const image = collectionInfo?.image || '';
  const imageUrl = getImageUrl(image, { w: 178, h: 178 }) || '';
  const des = collectionInfo?.description || '';
  const watch = collectionInfo?.watchlistCount || 0;

  const floorPrice = escrowStats?.floorPrice ? priceToSOL(escrowStats.floorPrice, 0) || '--' : '--';
  const totalVol = escrowStats?.volumeAll ? priceToSOL(escrowStats.volumeAll, 2) || '--' : '--';
  const avgPrice24hr = escrowStats?.avgPrice24hr ? priceToSOL(escrowStats.avgPrice24hr, 2) || '--' : '--';
  const listed = escrowStats?.listedCount ? formatToCurrency(escrowStats.listedCount) || '--' : '--';
  const owners = holderStats?.uniqueHolders ? formatToCurrency(holderStats.uniqueHolders) || '--' : '--';
  const totalSupply = holderStats?.totalSupply ? formatToCurrency(+holderStats.totalSupply) || '--' : '--';
  const socialProps = {
    watch: formatCash(watch) || 0,
    instagramUrl: collectionInfo?.instagram || ESocialRoutes.INSTAGRAM,
    twitterUrl: collectionInfo?.twitter || ESocialRoutes.TWITTER,
    discordUrl: collectionInfo?.discord || ESocialRoutes.DISCORD
  };

  const colAttrsProps = {
    floorPrice,
    listed,
    totalVol,
    avgPrice24hr,
    owners,
    totalSupply
  };

  const mediaEl = useMemo(() => {
    if (isSkeleton || !imageUrl) {
      return (
        <ImageWrapper>
          <ImageInner>
            <SkeletonImage variant='rectangular' width='100%' height='100%' />
          </ImageInner>
        </ImageWrapper>
      );
    }
    return (
      <ImageWrapper>
        <ImageInner>
          <Image src={imageUrl} loading='lazy' alt={title} />
        </ImageInner>
      </ImageWrapper>
    );
  }, [isSkeleton, imageUrl, title]);

  const titleEl = useMemo(() => {
    if (isSkeleton || !title) {
      return (
        <TitleContainer>
          <SkeletonTitle />
        </TitleContainer>
      );
    }

    return (
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    );
  }, [isSkeleton, title]);

  const desEl = useMemo(() => {
    if (isSkeleton || !des) {
      return (
        <DescriptionWrapper>
          <Description>
            <SkeletonDesLg />
            <SkeletonDesSm />
            <SkeletonDesMd />
          </Description>
        </DescriptionWrapper>
      );
    }
    return (
      <DescriptionWrapper>
        <Description>{des}</Description>
      </DescriptionWrapper>
    );
  }, [isSkeleton, des]);

  return (
    <Wrapper>
      <ColLeft>{mediaEl}</ColLeft>
      <ColRight>
        {titleEl}
        <CollectionSocials {...socialProps} />
        <Grid>
          <Col>
            <CollectionAttrs {...colAttrsProps} />
          </Col>
          <Col>{desEl}</Col>
        </Grid>
      </ColRight>
    </Wrapper>
  );
};

export default observer(CollectionInfo);
