import styled from 'styled-components';
// import { StyledComponentProps } from '../../../theme/theme';
// import mediaDevice from '../../../theme/utility/mediaDevice';
import { ELayout } from '../../../../base/constants/common';
import { mxWidth, mxWidthLg, mxFullWidth } from '../../../theme/utility/mixin';

export const Wrapper = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background: var(--body-bg-color);
  display: flex;
  flex-direction: column;
  ${mxWidth}

  &.${ELayout.FULL} {
    ${mxFullWidth}
  }

  &.${ELayout.MAX_LG} {
    ${mxWidthLg}
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: var(--layout-main-max-width);
  margin: 0 auto;

  &.not-found {
    margin-top: auto;
  }

  &.full {
    max-width: 100%;
  }

  &.home {
    // margin: auto;
  }
`;
