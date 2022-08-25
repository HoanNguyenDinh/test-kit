import styled from 'styled-components';
import { resetList } from '../../../theme/utility/mixin';

export const Wrapper = styled.div`
  margin: 0 0 10px;
`;

export const Tabs = styled.ul`
  ${resetList}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Tab = styled.li`
  margin: var(--acts-filter-margin);
  background: var(--acts-filter-bg);
  border: var(--acts-filter-border);
  border-radius: var(--acts-filter-radius);

  &.active {
    background: var(--acts-filter-active-bg);
    border: var(--acts-filter-active-border);
  }
`;

export const TabItem = styled.button`
  padding: var(--acts-filter-padding);
  min-height: var(--acts-filter-height);
  min-width: var(--acts-filter-mwidth);
  font-weight: var(--acts-filter-weight);
  font-size: var(--acts-filter-size);
  line-height: var(--acts-filter-line-height);
  letter-spacing: var(--acts-filter-spacing);
  text-transform: var(--acts-filter-transform);
  color: var(--acts-filter-weight);

  &.active {
  }
`;
