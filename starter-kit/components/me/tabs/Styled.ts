import styled from 'styled-components';
import { resetList } from '../../../theme/utility/mixin';
import mediaDevice from '../../../theme/utility/mediaDevice';
// import { StyledComponentProps } from '../../../theme/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Items = styled.ul`
  ${resetList}
  display: flex;
  border-bottom: 3px solid var(--tab-controls-border-color);
  justify-content: center;
  padding: 8px 0 0;
  margin: 0 auto 40px;
  flex-wrap: wrap;
  width: 100%;
  max-width: var(--tab-controls-width);
`;

export const Item = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: rgba(187, 151, 114, 0.5);
  padding: 16px 0;
  width: 50%;
  display: flex;
  justify-content: center;

  @media ${mediaDevice.xsm} {
    width: 33.33%;
  }

  @media ${mediaDevice.sm} {
    width: auto;
    padding: 16px 32px;
  }
`;

export const Btn = styled.button`
  position: relative;
  color: var(--tab-control-color);
  font-weight: var(--tab-control-weight);
  font-size: var(--tab-control-size);
  line-height: var(--tab-control-line-height);

  &.active {
    color: var(--tab-control-active-color);

    &:after {
      content: '';
      display: block;
      background: var(--tab-control-active-border-color);
      width: calc(100% + 30px);
      height: 3px;
      left: -15px;
      position: absolute;
      bottom: -19px;
    }
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const TabItem = styled.div`
  display: none;

  &.selected {
    display: block;
  }
`;
