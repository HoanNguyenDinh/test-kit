import { FC, useMemo } from 'react';
import { formatNTFName } from '../../../../base/utils/text.helper';
import PriceWithIcon from '../../shared/priceWithIcon';
import { MoonRankIcon, HowRareRankIcon } from '../../shared/icons/index';
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
  Rarity,
  RarityItem,
  RarityLink,
  RarityTooltip,
  PriceWrapper,
  DetailLink
} from './Styled';

interface INTFCardPros {
  img?: string;
  url?: string;
  title?: string;
  moonrank?: string | number | null;
  moonrankURL?: string;
  howrare?: string | number | null;
  howrareURL?: string;
  price?: string | number | null;
  skeleton?: boolean;
}

const NTFCard: FC<INTFCardPros> = (props) => {
  const { img, url, title, moonrank = null, moonrankURL = '', howrare = null, howrareURL = '', price = null, skeleton } = props;

  const ntfTitle = useMemo(() => {
    return <>{formatNTFName(title || '')}</>;
  }, [title]);

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

  if (!title) {
    return <></>;
  }

  const isShowMoonRank = moonrank && +moonrank !== 0;
  const isShowHowRank = !isShowMoonRank && howrare && +howrare !== 0;

  return (
    <Wrapper>
      <Link href={url} title={title}>
        <ImageWrapper>
          <ImageInner>
            <Image src={img} loading='lazy' alt={title} />
          </ImageInner>
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
          <Title>{ntfTitle}</Title>
          <PriceWrapper>
            {price && (
              <>
                <PriceWithIcon price={price} />
                <DetailLink href={url} title={title}>
                  Details
                </DetailLink>
              </>
            )}
          </PriceWrapper>
        </Content>
      </Link>
    </Wrapper>
  );
};

NTFCard.defaultProps = {
  skeleton: false
};

export default NTFCard;
