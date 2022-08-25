import styled from 'styled-components';
import {
  thTable,
  transactionType,
  sourceVal,
  linkTable,
  wrapTable,
  thTableSecondary,
  tdTableSecondary,
  transactionTypeSecondary,
  sourceValSecondary
} from '../../../theme/utility/mixin';
import { ENTFActivityType } from '../../../../base/constants/common';
import Tooltip from '@mui/material/Tooltip';

export const Wrapper = styled.div``;
export const Content = styled.div``;

export const TableWrapper = styled.div`
  ${wrapTable}
`;

export const Table = styled.table``;

export const Thead = styled.thead``;

export const Th = styled.th`
  ${thTable}

  &.${ENTFActivityType.TAB} {
    ${thTableSecondary}
  }

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

export const Tbody = styled.tbody`
  tr:not(:last-child) {
    border-bottom: var(--table-tr-border);
    &.${ENTFActivityType.TAB} {
      border-bottom: var(--table-secondary-tr-border);
    }
  }
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  &.${ENTFActivityType.TAB} {
    ${tdTableSecondary}
  }

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  &.col-img {
    width: 70px;
    min-width: 70px;
  }
`;

export const Link = styled.a`
  ${linkTable}
  display: flex;
  align-items: center;
`;

export const ImageWrap = styled.div`
  min-width: 36px;
  width: 36px;
  height: 36px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const Image = styled.img``;

export const TitleLink = styled.a`
  ${linkTable}
`;

export const SolanaLink = styled.a`
  ${linkTable}
`;

export const TransactionType = styled.div`
  ${transactionType}
`;

export const TransactionTypeSecond = styled.div`
  ${transactionTypeSecondary}
`;

export const Source = styled.span`
  ${sourceVal}
`;

export const SourceSecond = styled.span`
  ${sourceValSecondary}
`;

export const TooltipWrapper = styled.div`
  cursor: pointer;
  white-space: nowrap;
`;

export const TooltipItem = styled(Tooltip).attrs({
  sx: {}
})``;

export const Filter = styled.div``;

export const NoData = styled.div``;

export const Title = styled.span`
  margin: 0 0 0 10px;
  min-width: 140px;
`;
