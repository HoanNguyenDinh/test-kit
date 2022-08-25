import styled from 'styled-components';
import { gridRow, gridCol, gridLgRow, gridLgCol } from '../../../theme/utility/mixin';
import { StyledComponentProps } from '../../../theme/theme';
import mediaDevice from '../../../theme/utility/mediaDevice';

export const Wrapper = styled.div`
  .grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Item = styled.div`
  flex: 0 0 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${gridCol}

  @media ${mediaDevice.xs} {
    flex: 0 0 50%;
    width: 50%;
  }

  @media ${mediaDevice.sm} {
    flex: 0 0 33.33%;
    width: 33.33%;
  }

  @media ${mediaDevice.md} {
    flex: 0 0 25%;
    width: 25%;
  }

  @media ${mediaDevice.lg} {
    ${gridLgCol}
  }

  @media ${mediaDevice.medium} {
    flex: 0 0 20%;
    width: 20%;
  }
`;

export const GridWrapper = styled.div`
  ${gridRow}

  @media ${mediaDevice.lg} {
    ${gridLgRow}
  }
`;

export const GroupItems = styled.div`
  margin-bottom: 20px;

  .grid {
    display: flex;
    flex-wrap: wrap;

    &.one-group {
      @media ${mediaDevice.ml} {
        padding: 36px 0 0;
      }
    }
  }
`;
