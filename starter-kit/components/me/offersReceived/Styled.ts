import styled from 'styled-components';
import { TickIcon, WarningIcon, ErrorIcon, NewPriceTagIcon } from '../../shared/icons';
import { wrapTable, thTable, linkTable } from '../../../theme/utility/mixin';

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

export const GreenTick = styled(TickIcon)``;

export const WarningTick = styled(WarningIcon)``;

export const ErrorTick = styled(ErrorIcon)``;

export const IconWrapper = styled.div`
  width: 30px;
`;

export const PriceIcon = styled(NewPriceTagIcon)``;

export const PriceWrapper = styled.span`
  display: flex;
  align-items: center;

  svg {
    margin-right: 3px;
    width: 16px;
    height: 16px;
  }
`;

export const TitleLink = styled.a`
  ${linkTable}
`;
