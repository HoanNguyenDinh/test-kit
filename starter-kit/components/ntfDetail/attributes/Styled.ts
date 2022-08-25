import styled from 'styled-components';
import { resetList } from '../../../theme/utility/mixin';
import { CopyIcon, CopyiedIcon } from '../../shared/icons';

export const Content = styled.div``;

export const List = styled.ul`
  ${resetList}
`;

export const Item = styled.li`
  margin: var(--attrs-item-margin);
  padding: var(--attrs-item-padding);

  &:last-child {
    margin: 0;
  }
`;

export const Attribute = styled.div`
  background: var(--attrs-box-bg);
  border-radius: var(--attrs-box-radius);
  padding: var(--attrs-box-padding);
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;

  &:hover {
    img,
    svg {
      display: block;
    }
  }
`;

export const Copy = styled(CopyIcon)`
  cursor: pointer;
  display: none;
  position: absolute;
  right: 4px;
  top: 6px;
  width: 24px;
`;

export const Copyied = styled(CopyiedIcon)`
  cursor: pointer;
  display: none;
  position: absolute;
  right: 4px;
  top: 6px;
  width: 24px;
`;

export const Label = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: var(--attrs-label-margin);
  font-weight: var(--attrs-label-weight);
  font-size: var(--attrs-label-size);
  line-height: var(--attrs-label-line-height);
  text-transform: var(--attrs-label-transform);
  letter-spacing: var(--attrs-label-spacing);
  color: var(--attrs-label-color);
`;

export const LineBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin: var(--details-margin);
  align-items: center;

  &:last-child {
    margin: 0;
  }
`;

export const Value = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: var(--attrs-value-weight);
  font-size: var(--attrs-value-size);
  line-height: var(--attrs-value-line-height);
  color: var(--attrs-value-color);
`;

export const Rarity = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: var(--attrs-rarity-weight);
  font-size: var(--attrs-rarity-size);
  line-height: var(--attrs-rarity-line-height);
  color: var(--attrs-rarity-color);
`;
