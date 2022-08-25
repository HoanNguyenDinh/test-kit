import styled from 'styled-components';
import Tooltip from '@mui/material/Tooltip';

export const Content = styled.div``;

export const LineBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin: var(--details-margin);
  align-items: center;

  &:last-child {
    margin: 0;
  }
`;

export const LBInfoWrapper = styled.div`
  cursor: pointer;
`;

export const TooltipEl = styled(Tooltip).attrs({
  sx: {}
})``;

export const Label = styled.div`
  font-weight: var(--details-label-weight);
  font-size: var(--details-label-size);
  line-height: var(--details-label-line-height);
  text-transform: var(--details-label-transform);
  color: var(--details-label-color);
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  font-weight: var(--details-value-weight);
  font-size: var(--details-value-size);
  line-height: var(--details-value-line-height);
  color: var(--details-value-color);

  a {
    margin-right: 10px;
    font-size: 0;
    line-height: 0;
  }

  img {
    width: 24px;
    height: 24px;
    &.explorer {
      width: 30px;
      height: 30px;
    }
  }
`;

export const LBInfo = styled.span``;

export const Link = styled.a`
  display: inline-block;
  margin-right: 0.5rem;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Image = styled.img``;
