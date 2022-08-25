import styled from 'styled-components';
import mediaDevice from '../../../theme/utility/mediaDevice';
import Skeleton from '@mui/material/Skeleton';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 24px 0;
  width: 100%;
  margin: 0 auto;

  @media ${mediaDevice.lg} {
    padding: 24px 0 8px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 45px;

  > a {
    &:first-child {
      min-width: 60px;
    }
  }

  @media ${mediaDevice.lg} {
    min-width: 318px;
    padding-right: 58px;
  }
`;

export const LogoImg = styled.img``;

export const PoweredLink = styled.a`
  margin: -5px 0 0 20px;

  svg {
    width: 100%;
    min-width: 130px;
  }
`;

export const LinkTo = styled.a``;

export const SkeletonImage = styled(Skeleton).attrs({
  sx: {
    backgroundColor: 'rgba(68,68,68,1)'
  }
})``;