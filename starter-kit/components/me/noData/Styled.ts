import styled from 'styled-components';
import { EmptyDataLogo } from '../../shared/icons';
import { h3 } from '../../../theme/utility/mixin';

export const Wrapper = styled.div`
  min-height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
`;

export const Icon = styled(EmptyDataLogo)`
  width: 100px;
  height: auto;
  margin: 0 0 5px;
`;

export const Title = styled.h1`
  ${h3}
`;

export const Des = styled.p`
  margin: 0 0 32px;
`;
