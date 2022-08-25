import styled from 'styled-components';
import mediaDevice from '../../../theme/utility/mediaDevice';
import { resetList } from '../../../theme/utility/mixin';

export const Wrapper = styled.div`
  margin: 40px 0 0;
  display: flex;
  align-items: center;
`;

export const PgActions = styled.div``;

export const PgAction = styled.button`
  background-color: var(--pg-action-bg-color);
  border: none;
  color: var(--pg-action-color);
  cursor: pointer;
  outline: none;
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  line-height: 24px;

  &:disabled {
    color: var(--pg-action-disable-color);
    background-color: var(--pg-action-disable-bg-color);
    opacity: var(--pg-action-disable-opacity);
  }

  &:hover {
    background-color: var(--pg-action-hover-bg-color);
    color: var(--pg-action-hover-color);
    opacity: var(--pg-action-hover-opacity);
  }
`;

export const PgText = styled.div`
  color: var(--pg-color);
  position: relative;
  padding-right: 0.75rem;
  margin-right: 0.75rem;
  display: none;

  @media ${mediaDevice.md} {
    display: block;
  }

  &:after {
    content: '';
    width: 1px;
    background: var(--pg-line-border-color);
    height: 16px;
    display: block;
    position: absolute;
    right: 1px;
    top: 1px;
  }
`;

export const PgPageItem = styled.span`
  font-weight: 500;
`;

export const PgGoToPage = styled.div`
  color: var(--pg-color);
  display: none;

  @media ${mediaDevice.md} {
    display: block;
  }
`;

export const PgGoToPageInput = styled.input`
  border: var(--pg-input-border);
  background: var(--pg-input-bg-color);
  border-radius: 2px;
  box-sizing: border-box;
  color: var(--pg-color);
  padding: 0.7rem 1rem;
  font-size: var(--pg-input-size);
  width: var(--pg-input-width);
  height: var(--pg-input-height);
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    border: var(--pg-input-border);
    color: var(--pg-color);
  }
`;

export const PerPageWrapper = styled.div`
  margin-left: auto;
`;

export const PerPageList = styled.ul`
  ${resetList}
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px;
`;

export const PerPageItem = styled.li`
  padding: 6px 0;
`;

export const PerPage = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: var(--dropdown-content-color);

  svg {
    margin-right: 10px;
    color: var(--dropdown-content-svg-color);
  }

  &.selected {
    color: var(--dropdown-content-active-color);

    svg {
      color: var(--dropdown-content-svg-active-color);
    }
  }
`;
