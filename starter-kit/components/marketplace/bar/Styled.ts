import styled from 'styled-components';
import { resetList } from '../../../theme/utility/mixin';
import mediaDevice from '../../../theme/utility/mediaDevice';

export const CollectionBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 25px;
  flex-wrap: wrap;

  @media ${mediaDevice.md} {
  }
`;

export const ButtonFilter = styled.button`
  height: 48px;
  margin-right: 16px;
  display: block;
  margin: 16px 0 0;

  @media ${mediaDevice.md} {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background: rgba(243, 234, 219, 0.3);
  border-radius: 3px;
  height: 48px;
  margin: 16px 0 0;
  width: 100%;
  order: 1;

  svg {
    color: #402d28;
    g {
      opacity: 1;
    }
  }

  @media ${mediaDevice.lg} {
    flex: 1;
    order: 0;
    margin: 0 24px 0 0;
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  border: 0;
  background: transparent;
  font-family: var(--body-font);
  padding: 0 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #402d28;

  &::-webkit-input-placeholder {
    color: rgba(64, 45, 40, 0.4);
  }

  &:-ms-input-placeholder {
    color: rgba(64, 45, 40, 0.4);
  }

  &::placeholder {
    color: rgba(64, 45, 40, 0.4);
  }
`;

export const SortByWrapper = styled.div`
  margin: 16px 0 0;
  width: calc(100% - 46px);

  @media ${mediaDevice.md} {
    margin: 0 24px 0 0;
    width: calc(100% - 100px);
  }

  @media ${mediaDevice.lg} {
    width: 306px;
  }
`;

export const SortByList = styled.ul`
  ${resetList}
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px;
`;

export const SortByItem = styled.li`
  padding: 6px 0;
`;

export const SortByBtn = styled.button`
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

export const ViewByWrapper = styled.div`
  align-items: center;
  display: none;

  @media ${mediaDevice.md} {
    display: flex;
  }
`;

export const ViewByBtn = styled.button`
  color: rgba(145, 107, 70, 0.5);

  &.selected {
    color: #402d28;
  }

  &:first-child {
    margin: 0 13.5px 0 0;
  }

  &:last-child {
    margin: 0 0 0 13.5px;
  }
`;
