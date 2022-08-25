import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { OffersIcon } from '../../shared/icons/index';
import PriceWithIcon from '../../shared/priceWithIcon';
import Collapse from '../../shared/collapse';
import { IBidding } from '../../../../base/interfaces/collection';
import { formatPriceToSOL } from '../../../../base/utils/price.helper';
import { formatDateText } from '../../../../base/utils/time.helper';
import { ETimeFormat } from '../../../../base/constants/common';
import { Content, TableWrapper, Table, Tbody, Td, Th, Thead, Tr, CancelBtn } from './Styled';

interface INTFOffers {
  biddings: IBidding[] | null;
  walletAddress: string;
  handleCancel: () => void;
}

const NTFOffers: FC<INTFOffers> = (props) => {
  const { biddings, walletAddress, handleCancel } = props;

  const titleCols = useMemo(() => {
    return (
      <Tr role='row'>
        <Th role='columnheader'>Price</Th>
        <Th role='columnheader'>Expires At</Th>
        <Th role='columnheader'>From</Th>
        <Th role='columnheader'></Th>
      </Tr>
    );
  }, []);

  const dataCols = useMemo(() => {
    if (biddings && biddings.length > 0) {
      const data: unknown[] = [];
      biddings.map((bid: IBidding) => {
        const id = bid._id;
        const bidderAmount = formatPriceToSOL(bid?.bidderAmountLamports, false);
        const bidderPubkey = bid?.bidderPubkey;
        const expiresAt = formatDateText(bid.expiryDate, ETimeFormat.LONGTEXT);
        const showCancelBtn = bidderPubkey === walletAddress;

        data.push(
          <Tr role='row' key={`bidding-${id}`}>
            <Td role='cell'>
              <PriceWithIcon price={bidderAmount} />
            </Td>
            <Td role='cell'>{expiresAt}</Td>
            <Td role='cell'>{bidderPubkey}</Td>
            <Td className='action'>{showCancelBtn && <CancelBtn onClick={() => handleCancel()}>Cancel</CancelBtn>}</Td>
          </Tr>
        );
      });
      return data;
    }
    return <></>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [biddings, walletAddress]);

  if (!biddings || biddings.length < 1) {
    return <Collapse title='Offers' emptyTitle='No offers yet' icon={<OffersIcon />} count={0} />;
  }

  return (
    <Collapse title='Offers' emptyTitle='No offers yet' icon={<OffersIcon />} count={biddings?.length}>
      <Content>
        <TableWrapper>
          <Table>
            <Thead>{titleCols}</Thead>
            <Tbody role='rowgroup'>{dataCols}</Tbody>
          </Table>
        </TableWrapper>
      </Content>
    </Collapse>
  );
};

export default observer(NTFOffers);
