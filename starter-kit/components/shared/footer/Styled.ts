import styled from 'styled-components';
// import { StyledComponentProps } from '../../../theme/theme';
import mediaDevice from '../../../theme/utility/mediaDevice';

export const FooterWrapper = styled.div`
  margin-top: auto;
`;

export const FooterContent = styled.div`
  padding: 16px 0;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${mediaDevice.md} {
    padding: 68px 0 48px;
  }

  @media ${mediaDevice.xl} {
    margin: 0 -33px;
    padding-right: 33px;
  }
`;

export const Copyright = styled.p`
  color: var(--copyright-color);
  text-align: left;
  margin: 0;
`;

export const FooterRight = styled.div`
  @media ${mediaDevice.max_sm} {
    margin-top: 30px;
    display: none;
  }
`;

export const FooterRightContent = styled.div`
  position: relative;
  width: 335px;

  > svg {
    position: absolute;
    left: auto;
    top: auto;
    right: 0;
    bottom: 0px;
    height: 130%;
  }
`;

export const Title = styled.div`
  height: 36px;
  padding-left: 20px;
  background-image: url(https://assets-global.website-files.com/622eead55797fc2865c24818/62585a20661151be35733290_GreenBox.svg);
  background-position: 0px 0px;
  background-size: auto;
  background-repeat: no-repeat;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const TextTitle = styled.span`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.145rem;
`;

export const Description = styled.p`
  padding-left: 20px;
  color: var(--green-700);
  font-size: 14px;
  line-height: 18px;
  text-align: left;
`;

export const Link = styled.a``;
