import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import { Skeleton } from '@mui/material';

export const ImageWrapper = styled.div`
  overflow: hidden;
  margin: 0;
  flex-shrink: 0;
  width: 100%;
  text-align: center;
  font-size: 0;
  line-height: 0;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 100%;
  background: var(--media-bg);
  border-radius: var(--media-radius);
`;

export const ImageInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

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

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const SkeletonImage = styled(Skeleton).attrs({
  sx: {
    backgroundColor: '#f3eadb'
  }
})``;
