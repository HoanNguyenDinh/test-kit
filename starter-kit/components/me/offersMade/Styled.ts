import Tooltip from '@mui/material/Tooltip';
import styled from 'styled-components';
import { TickIcon, WarningIcon } from '../../shared/icons';
import { customScroll, linkTable, wrapTable, thTable } from '../../../theme/utility/mixin';

export const TableWrapper = styled.div`
  ${wrapTable}
`;

export const Table = styled.table``;

export const Thead = styled.thead``;

export const Th = styled.th`
  ${thTable}

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
  }
`;

export const Tr = styled.tr``;

export const Td = styled.td`
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

export const ImageLink = styled.a`
  display: block;
  font-size: 0;
  line-height: 0;
`;

export const ImageWrapper = styled.div`
  width: 100%;
`;

export const Image = styled.img``;

export const IconWrapper = styled.div`
  width: 30px;
`;

export const TitleLink = styled.a`
  ${linkTable}
`;

export const QuestionTooltip = styled(Tooltip).attrs({
  sx: {}
})``;

export const Label = styled.span`
  letter-spacing: 0.03rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: no-wrap;
  line-height: 1.5;
  display: flex;
  align-items: center;
  svg {
    display: inline;
    margin-left: 5px;
  }
`;

export const ColumnStatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckCircleIcon = styled(TickIcon)``;

export const ErrorCircleIcon = styled(WarningIcon)``;

export const CancelBtn = styled.button`
  color: #19ab6e;
`;
