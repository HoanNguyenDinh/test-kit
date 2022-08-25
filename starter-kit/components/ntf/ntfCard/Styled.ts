import styled from 'styled-components';
// import mediaDevice from '../../../theme/utility/mediaDevice'
import { StyledComponentProps } from '../../../theme/theme';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';
import { MarketPlaceIcon, HowRareRankIcon, MoonRankIcon } from '../../shared/icons/index';
import { gridItemWrapper, gridItemName, primaryContainedSmButton } from '../../../theme/utility/mixin';

export const SkeletonImage = styled(Skeleton).attrs({
  sx: {
    backgroundColor: 'rgba(68,68,68,1)'
  }
})``;

export const SkeletonName = styled(Skeleton).attrs({
  sx: {
    background: 'linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(51,51,51,1) 100%)',
    height: '14px'
  }
})`
  border-radius: 3px;
  margin: 0 0 10px;
`;

export const SkeletonMarketPlace = styled(Skeleton).attrs({
  sx: {
    background: 'linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(51,51,51,1) 100%)',
    height: '10px'
  }
})`
  border-radius: 3px;
  margin: 0 0 10px;
`;

export const SkeletonPrice = styled(Skeleton).attrs({
  sx: {
    background: 'linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(51,51,51,1) 100%)',
    height: '10px'
  }
})`
  border-radius: 3px;
`;

export const Wrapper = styled.div`
  ${gridItemWrapper}
  /* width: 100%;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  transition-duration: 0.3s;
  transition-property: opacity, -webkit-transform;
  transition-property: opacity, transform;
  transition-property: opacity, transform, -webkit-transform;
  transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  height: 100%;
  background: var(--grid-item-bg);
  border: var(--grid-item-border);
  border-radius: var(--grid-item-radius);
  overflow: hidden;

  &.no-hover {
    a {
      cursor: default;
    }
  } */
`;

export const LinkImage = styled.a`
  /* display: flex;
  flex-direction: column;
  width: 100%;

  &:hover {
    opacity: 0.8;
  } */
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  flex-shrink: 0;
  text-align: center;
  font-size: 0;
  line-height: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 100%;
  margin: var(--grid-item-img-margin);
  width: var(--grid-item-img-width);
  border-radius: var(--grid-item-radius) var(--grid-item-radius) 0 0;
`;

export const ImageInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  padding: var(--grid-item-info-padding);
  position: relative;
`;

export const Link = styled.a``;

export const Title = styled.h2`
  ${gridItemName}
`;

export const MarketPlaceWrapper = styled.div`
  padding: ${(props: StyledComponentProps) => props.theme.spacingRem[0].val} 0 0;
`;

export const MarketPlaceLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 2px;

  &:hover {
    color: ${(props: StyledComponentProps) => props.theme.color.text.t4};
  }
`;

export const MarketPlace = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 22px;
  line-height: calc(27 / 22);
  color: ${(props: StyledComponentProps) => props.theme.color.okay_bear.primary};
  font-family: ${(props: StyledComponentProps) => props.theme.font.family.cheddar};
  letter-spacing: 0.06em;
`;

export const MarketIcon = styled(MarketPlaceIcon)``;

export const CardBird = styled.div``;

export const Rarity = styled.div`
  position: absolute;
  right: 7px;
  top: -8px;
`;

export const RarityItem = styled.div``;

export const RarityTooltip = styled(Tooltip).attrs({
  sx: {}
})``;

export const RarityLink = styled.a`
  background: var(--detail-moonrank-bg);
  border-radius: var(--detail-moonrank-radius);
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: var(--detail-moonrank-spacing);
  text-transform: var(--detail-moonrank-transform);
  color: var(--detail-moonrank-color);
  display: flex;
  align-items: center;
  padding: 0 2px 0 0;
  margin: 0;

  &:hover {
    color: var(--detail-moonrank-color);
  }

  svg {
    margin: 0;
    width: 16px;
    height: 16px;
  }
`;

export const PriceWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  text-align: right;
  letter-spacing: 0.06em;
  color: var(--grid-item-price-color);
`;

export const DetailLink = styled.a`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #916b46;
  text-transform: none;

  &:hover {
    color: #916b46;
  }
`;
