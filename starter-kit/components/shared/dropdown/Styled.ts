import styled from 'styled-components';
import { EDropdownType } from '../../../../base/constants/common';
import { ArrowDownIcon } from '../../shared/icons';

export const Wrapper = styled.div`
  position: relative;
`;

export const Title = styled.div`
  display: flex;
`;

export const TitleInput = styled.input`
  font-family: var(--boday-font);
  &.${EDropdownType.PRIMARY} {
    background: none;
    border: var(--dropdown-input-border);
    border-radius: 3px;
    height: var(--dropdown-input-height);
    width: var(--dropdown-input-width);
    box-sizing: border-box;
    color: var(--dropdown-color);
    cursor: pointer;
    padding: 12px 36px 12px 12px;
    font-size: var(--dropdown-input-size);
    -moz-appearance: textfield;

    &:focus {
      background: none;
      border: var(--dropdown-input-border);
      color: var(--dropdown-color);
    }
  }
  &.${EDropdownType.SECONDARY} {
    background: rgba(243, 234, 219, 0.3);
    border-radius: 3px;
    border: 0;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #402d28;
    height: 48px;
    padding: 0 16px;
    width: 100%;
    cursor: pointer;
    -moz-appearance: textfield;

    &:focus {
    }
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const TitleIcon = styled.div`
  width: 17px;
  position: absolute;

  &.${EDropdownType.PRIMARY} {
    right: 10px;
    top: 10px;
  }

  &.${EDropdownType.SECONDARY} {
    right: 18px;
    top: 16px;
  }
`;

export const ArrowIcon = styled(ArrowDownIcon)`
  fill: var(--dropdown-icon-color);
  transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;
  color: #402d28;

  &.show {
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg);
  }
`;

export const Content = styled.div`
  display: none;
  z-index: 9999;
  width: 100%;
  position: absolute;
  right: 0;
  top: 40px;
  background: var(--dropdown-content-bg-color);
  border-radius: 3px;

  &.show {
    display: flex;
    flex-direction: column;
  }

  &.${EDropdownType.PRIMARY} {
  }

  &.${EDropdownType.SECONDARY} {
    min-width: 260px;
    top: 50px;
  }
`;
