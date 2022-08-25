import styled from 'styled-components';
import { thTable, wrapTable, thTableSecondary, tdTableSecondary } from '../../../theme/utility/mixin';
import { primaryTextButton } from '../../../theme/utility/mixin';

export const Content = styled.div``;

export const TableWrapper = styled.div`
  ${wrapTable}
`;

export const Table = styled.table``;

export const Thead = styled.thead``;

export const Th = styled.th`
  ${thTable}
  ${thTableSecondary}
  white-space: nowrap;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Td = styled.td`
  ${tdTableSecondary}
  &.action {
    padding-right: 0;
    text-align: right;
  }
`;

export const CancelBtn = styled.button`
  ${primaryTextButton}
`;
