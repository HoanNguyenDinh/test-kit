import styled from 'styled-components';
import { EmptyDataLogo } from '../../shared/icons';

export const Wrapper = styled.div`
  min-height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
`;

export const Icon = styled(EmptyDataLogo)`
  width: 100px;
  height: auto;
  margin: 0 0 5px;
`;
