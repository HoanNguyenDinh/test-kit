import { FC } from 'react';
import { observer } from 'mobx-react';
import NoData from '../noData';
import OfferMadeRow from './offerMadeRow';
import { useMyOffersMade } from '../../../../base/hooks/collection/myOffersMade';
import { TableWrapper, Table, Thead, Tr, Th, Tbody } from './Styled';

interface Props {
  onClick: (item: any) => void;
  symbols: string[];
}

const OffersMade: FC<Props> = (props) => {
  const { onClick, symbols } = props;
  const { offers, biddingBalance } = useMyOffersMade(symbols);

  if (!offers || (offers && offers.length === 0)) {
    return <NoData text={'No offers made'} />;
  }

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <Tr role='row'>
            <Th></Th>
            <Th role='columnheader'>Name </Th>
            <Th role='columnheader'>Status</Th>
            <Th role='columnheader'>Your offer price</Th>
            <Th role='columnheader'>Buy now price</Th>
            <Th role='columnheader'>Action</Th>
          </Tr>
        </Thead>
        <Tbody role='rowgroup'>
          {offers.map((item: any, index: number) => (
            <OfferMadeRow offer={item} key={`offer-table-row-${index}`} onClick={onClick} biddingBalance={biddingBalance} />
          ))}
        </Tbody>
      </Table>
    </TableWrapper>
  );
};

export default observer(OffersMade);
