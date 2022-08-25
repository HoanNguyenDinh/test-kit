import styled from 'styled-components';
import mediaDevice from '../../../theme/utility/mediaDevice';
import { NewPriceTagIcon } from '../../shared/icons/index';
import { pageTitle, resetList, h5 } from '../../../theme/utility/mixin';
import Skeleton from '@mui/material/Skeleton';
import Tooltip from '@mui/material/Tooltip';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0;

  @media ${mediaDevice.md} {
    flex-direction: row;
    padding: 45px 0;
  }

  @media ${mediaDevice.ml} {
    flex-direction: row;
    padding: 110px 0 47px;
  }
`;

export const ColLeft = styled.div`
  margin: 0 auto 20px;
  min-width: 182px;
  min-height: 182px;
  width: 182px;

  @media ${mediaDevice.md} {
    padding: 20px 0 0;
  }
`;

export const ColRight = styled.div`
  max-width: 510px;
  margin: 0 auto 20px;
  width: 100%;

  @media ${mediaDevice.md} {
    max-width: 100%;
    padding: 0 0 0 40px;
  }

  @media ${mediaDevice.ml} {
    padding: 0 0 0 103px;
  }

  @media ${mediaDevice.xgl} {
    position: relative;
  }
`;

export const SkeletonImage = styled(Skeleton).attrs({
  sx: {
    background: 'linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(51,51,51,1) 100%)'
  }
})``;

export const SkeletonTitle = styled(Skeleton).attrs({
  sx: {
    background: 'linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(51,51,51,1) 100%)',
    height: '60px',
    maxWidth: '300px',
    margin: '0'
  }
})`
  &.des {
    @media ${mediaDevice.xgl} {
      margin-top: 45px;
    }
  }
`;

export const SkeletonDesLg = styled(Skeleton).attrs({
  sx: {
    background: 'linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(51,51,51,1) 100%)',
    height: '30px',
    maxWidth: '300px',
    margin: '0'
  }
})`
  &.des {
    @media ${mediaDevice.xgl} {
      margin-top: 45px;
    }
  }
`;

export const SkeletonDesSm = styled(Skeleton).attrs({
  sx: {
    background: 'linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(51,51,51,1) 100%)',
    height: '20px',
    maxWidth: '150px',
    margin: '0'
  }
})`
  &.des {
    @media ${mediaDevice.xgl} {
      margin-top: 45px;
    }
  }
`;

export const SkeletonDesMd = styled(Skeleton).attrs({
  sx: {
    background: 'linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(51,51,51,1) 100%)',
    height: '25px',
    maxWidth: '200px',
    margin: '0'
  }
})`
  &.des {
    @media ${mediaDevice.xgl} {
      margin-top: 45px;
    }
  }
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  margin: 0;
  flex-shrink: 0;
  width: 100%;
  text-align: center;
  font-size: 0;
  line-height: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 100%;
  border-radius: 50%;
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

export const TitleContainer = styled.div`
  position: relative;
  margin: 0 0 20px;
  text-align: center;

  @media ${mediaDevice.md} {
    text-align: left;
  }
`;

export const TitleTooltip = styled(Tooltip).attrs({
  sx: {}
})``;

export const Title = styled.h1`
  ${pageTitle}
  margin: 0;
`;

export const List = styled.ul`
  ${resetList}
  display: flex;
  flex-wrap: wrap;
  margin: 0 -7.5px 7px;

  @media ${mediaDevice.md} {
    margin: 0 -7.5px;
    max-width: 525px;
  }
`;

export const Item = styled.li`
  padding: 0 7.5px;
  margin: 0 0 15px;
  display: flex;
  width: 50%;
`;

export const InfoWrapper = styled.div`
  ${h5}
  background: var(--box-info-bg-color);
  border-radius: var(--box-info-radius);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
  min-height: 40px;
`;

export const InfoLabel = styled.span`
  padding: 0 5px 0 0;
  color: var(--box-info-label-color);
`;

export const InfoValue = styled.span`
  padding: 0 0 0 5px;
  display: flex;
  align-items: center;
  color: var(--box-info-value-color);

  svg {
    margin: 0 4px 0 0;
    width: 12px;
    height: 12px;
  }
`;

export const PriceIcon = styled(NewPriceTagIcon)``;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 25px;

  @media ${mediaDevice.md} {
    max-width: 510px;
  }

  @media ${mediaDevice.xgl} {
    position: absolute;
    right: 0;
    top: 87px;
    width: calc(50% - 75px);
    max-width: 100%;
  }
`;

export const WatchItem = styled.div`
  padding: 0 7.5px 0 0;

  svg,
  img {
    margin: 0 5px 0 0;
  }

  a {
    color: red;
  }
`;

export const WatchBtn = styled.button`
  background: #f3eadb;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #886f55;
  padding: 2px 10px;
  min-height: 28px;

  &:hover {
    color: #886f55;
    background: #fff;
  }
`;

export const NumberItem = styled.span`
  margin: 0 0 0 5px;
`;

export const Socials = styled.ul`
  ${resetList}
  padding: 0 0 0 7.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const SocialItem = styled.li`
  margin: 0 15px 0 0;

  &:last-child {
    margin: 0;
  }
`;

export const SocialLink = styled.a`
  background: #f3eadb;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #886f55;
  padding: 2px 10px;
  min-height: 28px;

  &:hover {
    color: #886f55;
    background: #fff;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;

  @media ${mediaDevice.md} {
    max-width: 510px;
  }

  @media ${mediaDevice.xgl} {
    flex-direction: row;
    margin: 0 -22px;
    max-width: calc(100% + 44px);
  }
`;

export const Col = styled.div`
  @media ${mediaDevice.xgl} {
    width: 50%;
    padding: 0 22px;
  }
`;

export const Description = styled.div`
  @media ${mediaDevice.xgl} {
    padding-top: 54px;
  }
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #886f55;
`;
