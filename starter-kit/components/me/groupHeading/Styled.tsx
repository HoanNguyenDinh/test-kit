import Skeleton from '@mui/material/Skeleton';
import styled from 'styled-components';
import mediaDevice from '../../../theme/utility/mediaDevice';

export const SkeletonImage = styled(Skeleton).attrs({
  sx: {
    backgroundColor: 'rgba(68,68,68,1)'
  }
})``;

export const SkeletonName = styled(Skeleton).attrs({
  sx: {
    background: 'linear-gradient(90deg, rgba(142,142,142,1) 0%, rgba(51,51,51,1) 100%)',
    height: '14px'
  }
})`
  border-radius: 3px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 30px;
  padding: 0;
`;

export const ImageWrapper = styled.div`
  width: var(--me-brand-group-img-width);
  height: var(--me-brand-group-img-height);
  border-radius: var(--me-brand-group-img-radius);
  overflow: hidden;
  margin-right: 1rem;
  border: var(--me-brand-group-img-border);
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.div`
  font-weight: var(--me-brand-group-name-weight);
  font-size: var(--me-brand-group-name-size);
  line-height: var(--me-brand-group-name-line-height);
  margin-right: 1rem;
  max-width: calc(100% - 72px);
`;

export const Floor = styled.div`
  border: var(--me-brand-group-price-border);
  border-radius: var(--me-brand-group-price-radius);
  padding: 0.2rem 0.5rem;

  @media ${mediaDevice.max_sm} {
    margin-top: 10px;
  }

  &.floor {
    margin-right: 10px;
  }
`;
