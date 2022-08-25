import styled from 'styled-components';
import { resetList } from '../../../theme/utility/mixin';
import mediaDevice from '../../../theme/utility/mediaDevice';

export const TabWrapper = styled.div`
  position: relative;
`;

export const Items = styled.ul`
  ${resetList}
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 3px solid #f3eadb;
  padding: 0;
  margin: 0 0 16px;
`;

export const Item = styled.li`
  padding: 0 24px 16px;
  margin: 0 20px 0 0;
  width: 50%;
  max-width: 150px;
  display: flex;
  justify-content: center;
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #916b46;

  @media ${mediaDevice.sm} {
    width: auto;
    min-width: 150px;
    max-width: 100%;
  }

  &:last-child {
    margin: 0;
  }
`;

export const Btn = styled.button`
  display: flex;
  align-items: center;
  opacity: 0.5;

  svg {
    margin: 0 9px 0 0;
  }

  &.active {
    opacity: 1;
    color: #402d28;

    &:after {
      content: '';
      display: block;
      background: #402d28;
      width: 100%;
      height: 3px;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }

  &:disabled {
  }
`;

export const Powered = styled.div`
  margin: 0 0 30px;
  text-align: right;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  text-transform: uppercase;
  color: #886f55;

  display: none;

  @media ${mediaDevice.xsm} {
    position: absolute;
    bottom: 32px;
    right: 0;
    margin: 0;
    display: block;
  }
`;
