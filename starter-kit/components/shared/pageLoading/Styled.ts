import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

export const Wrapper = styled.div``;

export const LoadingIcon = styled(CircularProgress).attrs({
  sx: {}
})`
  &.MuiCircularProgress-root {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--loading-icon-color);
  }
`;
