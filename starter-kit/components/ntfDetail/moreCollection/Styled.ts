import styled from 'styled-components';
import { customScroll } from '../../../theme/utility/mixin';

export const Content = styled.div`
  position: relative;
`;

export const Scroller = styled.div`
  ${customScroll}
  margin: -5px;
  padding: 5px;
  width: calc(100% + 5px);
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 11px;
  min-width: 227px;
  transition-duration: 0.3s;
  transition-property: opacity, -webkit-transform;
  transition-property: opacity, transform;
  transition-property: opacity, transform, -webkit-transform;
  transition-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);

  &:first-child {
    margin-left: 0;
  }
`;

export const ActionControls = styled.div``;
export const ArrowBtn = styled.button`
  position: absolute;
  top: 50%;
  left: -15px;
  transform: translateY(-50%);
  &.btn-prev {
  }
  &.btn-next {
    left: auto;
    right: -15px;
  }
`;
