import { FC } from 'react';
import { observer } from 'mobx-react';
import NoData from '../noData';
import { useMyOffersReceived } from '../../../..//base/hooks/collection/myOffersReceived';
import { formatPriceToSOL } from '../../../../base/utils/price.helper';
import { EControllers } from '../../../../base/constants/common';
import { getImageUrl } from '../../../../base/utils/image.helper';
import {
  TableWrapper,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ImageWrapper,
  Image,
  IconWrapper,
  GreenTick,
  ErrorTick,
  PriceIcon,
  PriceWrapper,
  TitleLink
} from './Styled';

interface OfferReceivedProps {
  symbols: string[];
}

const OfferReceived: FC<OfferReceivedProps> = ({ symbols }) => {
  const { offersReceived } = useMyOffersReceived(symbols);

  if (!offersReceived || (offersReceived && offersReceived.length === 0)) {
    return <NoData text={'No offers received'} />;
  }

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <Tr role='row'>
            <Th></Th>
            <Th role='columnheader'>Name </Th>
            <Th role='columnheader'>Listed</Th>
            <Th role='columnheader'>Price</Th>
            <Th role='columnheader'>From</Th>
          </Tr>
        </Thead>
        <Tbody role='rowgroup'>
          {offersReceived.map((item: any, index: number) => (
            <Tr role='row' key={index}>
              <Td className='col-img'>
                <TitleLink
                  href={EControllers.NTFDETAIL.replace(':mintAddress', item?.initializerDepositTokenMintAccount)}
                  title={item?.title}>
                  <ImageWrapper>
                    <Image src={getImageUrl(item?.image, { w: 54, h: 48 })}></Image>
                  </ImageWrapper>
                </TitleLink>
              </Td>
              <Td className='nameColumn' role='cell'>
                <TitleLink
                  href={EControllers.NTFDETAIL.replace(':mintAddress', item?.initializerDepositTokenMintAccount)}
                  title={item?.title}>
                  {item?.title}
                </TitleLink>
              </Td>
              <Td role='cell'>
                <IconWrapper>{item?.status === 'list' ? <ErrorTick /> : <GreenTick />}</IconWrapper>
              </Td>
              <Td role='cell'>
                <PriceWrapper>
                  <PriceIcon /> {formatPriceToSOL(item?.bidderAmountLamports, 4) ?? '--'}
                </PriceWrapper>
              </Td>
              <Td role='cell'>{item?.bidderPubkey}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableWrapper>
  );
};

export default observer(OfferReceived);
