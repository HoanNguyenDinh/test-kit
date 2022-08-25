import styled from 'styled-components';
// import { StyledComponentProps } from '../../../theme/theme';
import mediaDevice from '../../theme/utility/mediaDevice';

export const ContentWrapper = styled.div`
  @media ${mediaDevice.md} {
    display: flex;
  }
`;

export const CollectionWrapper = styled.div``;

export const ActivitiesWrapper = styled.div``;

export const Main = styled.div`
  @media ${mediaDevice.md} {
    flex: 1;
    padding: 35px 0 0 43px;
  }
`;

export const Tabs = styled.div``;
export const TabActions = styled.div``;
export const TabAction = styled.button`
  margin: 0 20px 20px;
`;
export const TabPowered = styled.p``;
export const TabContent = styled.div`
  display: none;

  &.selected {
    display: block;
  }
`;
