import styled from 'styled-components';
import { NewPriceTagIcon } from '../../shared/icons';
// import mediaDevice from './../../theme/utility/mediaDevice';
import { thTable, sourceVal, linkTable, wrapTable } from '../../../theme/utility/mixin';
import Tooltip from '@mui/material/Tooltip';
// import Skeleton from '@mui/material/Skeleton';

export const Content = styled.div``;

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

export const TitleLink = styled.a`
  ${linkTable}
`;

export const SolanaLink = styled.a`
  ${linkTable}
`;

export const TransactionType = styled.div`
  span {
    &.cancel-bid,
    &.cancel-listing {
      color: var(--table-transc-cancel-color);
    }

    &.place-bid {
      color: var(--table-transc-place-color);
    }

    &.sale {
      color: var(--table-transc-sale-color);
    }
  }
`;

export const Source = styled.span`
  ${sourceVal}
`;

export const TooltipWrapper = styled.div`
  cursor: pointer;
  white-space: nowrap;
`;

export const TooltipInfo = styled(Tooltip).attrs({
  sx: {}
})``;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

export const PriceIcon = styled(NewPriceTagIcon)`
  margin-right: 3px;
`;
