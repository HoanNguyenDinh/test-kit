import styled from 'styled-components';
import mediaDevice from '../../../theme/utility/mediaDevice';
import { resetList } from '../../../theme/utility/mixin';

export const Wrapper = styled.div`
  position: relative;
`;

export const ShareButton = styled.button`
  display: flex;
  align-items: center;
`;

export const Sharetext = styled.span`
  margin-left: 7px;
  font-weight: var(--sharing-weight);
  font-size: var(--sharing-size);
  line-height: var(--sharing-line-height);
  letter-spacing: var(--sharing-spacing);
  text-transform: var(--sharing-transform);
  color: var(--sharing-color);
`;

export const Dropdown = styled.div`
  background: var(--sharing-content-bg);
  color: var(--sharing-content-color);
  border-radius: var(--sharing-content-radius);
  position: absolute;
  width: 210px;
  z-index: 9999;
  top: 29px;
  right: -46px;
  display: flex;
  flex-direction: column;

  @media ${mediaDevice.xs} {
    width: 250px;
    right: 0;
  }
`;

export const List = styled.ul`
  ${resetList}
  padding: 6px;
`;

export const Item = styled.li`
  cursor: pointer;
  padding: 6px;

  button {
    display: flex;
    align-items: center;
    align-content: center;
  }

  svg {
    width: 24px;
    height: 24px;
    margin: 0 10px 0 0;
  }

  &.icon-round {
    svg {
      background: #fff;
      color: var(--sharing-content-bg);
      padding: 4px;
      border-radius: 50%;
    }
  }
`;

export const ShareImage = styled.img`
  margin-right: 8px;
  width: 24px;
`;

export const CopyButton = styled.button``;
