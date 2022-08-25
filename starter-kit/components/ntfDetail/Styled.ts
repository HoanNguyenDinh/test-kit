import styled from 'styled-components';
import mediaDevice from '../../theme/utility/mediaDevice';
import { mxWidth } from '../../theme/utility/mixin';

export const Wrapper = styled.div`
  ${mxWidth}
  padding: 40px 0;

  @media ${mediaDevice.lg} {
    padding: 98px 0;
  }
`;

export const RowTop = styled.div`
  @media ${mediaDevice.ml} {
    padding-left: 0;
    padding-right: 0;
    display: flex;
  }
`;

export const Row = styled.div`
  clear: both;
`;

export const ErrorWrapper = styled.div``;
export const ErrorTitle = styled.h4`
  margin: 0 0 5px;
`;
export const ErrorDes = styled.p`
  margin: 0;
`;
