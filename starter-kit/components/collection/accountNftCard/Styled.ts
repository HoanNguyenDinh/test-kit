import styled from 'styled-components';
import { gridItemWrapper, gridItemName, primaryContainedSmButton } from '../../../theme/utility/mixin';
import { StyledComponentProps } from '../../../theme/theme';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';
import { MarketPlaceIcon, HowRareRankIcon } from '../../shared/icons/index';

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

export const MarketPlaceLink = styled.a`
  display: flex;
  align-items: center;
  color: ${(props: StyledComponentProps) => props.theme.color.text.t4};
  line-height: 21px;
  margin-bottom: 14px;

  &:hover {
    color: ${(props: StyledComponentProps) => props.theme.color.text.t4};
  }
`;

export const MarketPlace = styled.span`
  font-family: ${(props: StyledComponentProps) => props.theme.font.family.cheddar};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-right: 0.25rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #886f55;
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

// Update design

export const MarketPlaceWrapper = styled.div`
  display: none;
`;

export const Wrapper = styled.div`
  ${gridItemWrapper}
`;

export const LinkImage = styled.a``;

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

export const Button = styled.button`
  ${primaryContainedSmButton}
  display: flex;
  width: 100%;
  margin: 0 0 6px;
`;

export const PriceWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1.25rem;
`;

export const PriceLabel = styled.span``;

export const Price = styled.span`
  align-items: center;
  display: flex;
  font-weight: 700;
  color: rgba(245, 243, 247, 1);
  font-size: 18px;

  svg {
    display: inline-block;
    margin-right: 5px;
  }
`;
