import styled from 'styled-components';
import mediaDevice from '../../../theme/utility/mediaDevice';

export const Wrapper = styled.div`
  min-height: calc(100vh - 250px);
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  padding: 0 20px;
  text-align: center;

  @media ${mediaDevice.sm} {
    min-height: calc(100vh - 300px);
  }
`;
