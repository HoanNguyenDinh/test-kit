import styled from 'styled-components';
import { resetList, primaryContainedButton, secondOutlinedButton, container } from '../../../theme/utility/mixin';
import mediaDevice from '../../../theme/utility/mediaDevice';

export const Wrapper = styled.div`
  align-content: center;
  align-items: start;
  background: var(--me-selected-items-bg);
  border-radius: var(--me-selected-items-radius);
  padding: 16px 20px;
  display: none;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  flex-direction: column;

  &.active {
    display: flex;
  }

  @media ${mediaDevice.ml} {
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
  }
`;

export const Container = styled.div`
  ${container}
  width: 100%;
  padding: 0;

  @media ${mediaDevice.ml} {
    padding: 0;
  }

  @media ${mediaDevice.xl} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const InnerWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media ${mediaDevice.ml} {
    flex-direction: row;
    align-items: center;
    max-width: var(--layout-main-max-width);
  }
`;

export const Title = styled.h3`
  font-weight: var(--me-selected-items-title-weight);
  font-size: var(--me-selected-items-title-size);
  line-height: var(--me-selected-items-title-line-height);
  color: var(--me-selected-items-title-color);
  margin: 0 0 8px 0;

  @media ${mediaDevice.ml} {
    margin: 0;
  }
`;

export const List = styled.ul`
  ${resetList}
  padding: 0;
  flex: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 8px;

  @media ${mediaDevice.ml} {
    padding: 0 48px;
    margin-bottom: -8px;
  }
`;

export const Item = styled.li`
  margin: 0 8px 8px 0;
`;

export const ImageWapper = styled.div`
  font-size: 0;
  line-height: 0;
  border-radius: 3px;
  overflow: hidden;
`;

export const Image = styled.img``;

export const Actions = styled.div`
  display: flex;
`;

export const ActionBtn = styled.button`
  ${primaryContainedButton}
  margin-right: 16px;
  white-space: nowrap;
`;

export const CancelBtn = styled.button`
  ${secondOutlinedButton}
`;
