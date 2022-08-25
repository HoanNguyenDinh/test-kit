import styled from 'styled-components';
import { resetList } from '../../../theme/utility/mixin';

export const Wrapper = styled.div`
  margin: 0 0 23px;
`;

export const List = styled.ul`
  ${resetList}
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  margin: 0 7px 7px 0;
  display: inline-flex;
  align-items: center;
  align-content: center;
`;

export const ClearAllBtn = styled.button`
  background: #f3eadb;
  border-radius: 3px;
  min-height: 28px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #bb9772;
  padding: 0 10px;
  display: flex;
  align-items: center;
  align-content: center;
`;

export const Content = styled.div`
  border: 1px solid #bb9772;
  border-radius: 3px;
  min-height: 28px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #bb9772;
  padding: 0 10px;
  display: flex;
  align-items: center;
  align-content: center;
`;

export const ClearBtn = styled.button`
  margin: 0 0 0 7px;
`;

export const Label = styled.span``;
