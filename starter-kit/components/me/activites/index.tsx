import parse from 'html-react-parser';
import { observer } from 'mobx-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Pagination from '../../shared/pagination';
import NoData from '../noData';
import { useListingPagination } from '../../../../base/hooks/common/usePagination';
import { useCopyOnActivities } from '../../../../base/hooks/common/useCopyToClipboard';
import { useNTFActivities } from '../../../../base/hooks/collection/activities';
import { EControllers, ESources } from '../../../../base/constants/common';
import { EGetActivitiesType } from '../../../../base/constants/collection';
import { IGlobalActivities } from '../../../../base/interfaces/collection';
import {
  formatBuyer,
  formatDotDotDot,
  formatSeller,
  formatTime,
  formatTotalAmount,
  formatTransactionType
} from '../../../../base/utils/helper';
import { getImageUrl } from '../../../../base/utils/image.helper';
import {
  Content,
  Image,
  ImageLink,
  ImageWrapper,
  TooltipWrapper,
  TooltipInfo,
  PriceWrapper,
  PriceIcon,
  SolanaLink,
  Source,
  Table,
  TableWrapper,
  Tbody,
  Td,
  Th,
  Thead,
  TitleLink,
  Tr,
  TransactionType
} from './Styled';

const TableActivites = () => {
  const { perPage, currentPage, goToPage, selectedPerPageDefault, selectedPerPage, setSelectedPerPage, setCurrentPage, setGoToPage } =
    useListingPagination();
  const { total, activites, activitiesData } = useNTFActivities({ type: EGetActivitiesType.ME, currentPage, selectedPerPage, setGoToPage });
  const { copied, handleCopy } = useCopyOnActivities({ items: activitiesData });

  return (
    <>
      {activitiesData && activitiesData.length > 0 ? (
        <Content>
          <TableWrapper>
            <Table>
              <Thead>
                <Tr role='row'>
                  <Th role='columnheader'></Th>
                  <Th role='columnheader'>Name</Th>
                  <Th role='columnheader'>Transaction ID</Th>
                  <Th role='columnheader'>Transaction type</Th>
                  <Th role='columnheader'>Time</Th>
                  <Th role='columnheader'>Total amount</Th>
                  <Th role='columnheader'>Mint address</Th>
                  <Th role='columnheader'>Buyer</Th>
                  <Th role='columnheader'>Seller</Th>
                </Tr>
              </Thead>
              <Tbody role='rowgroup'>
                {activites.map((item: IGlobalActivities, index) => (
                  <Tr role='row' key={`global-activities-${index}`}>
                    <Td role='cell' className='col-img'>
                      {item?.mintObject?.img && (
                        <ImageLink
                          href={EControllers.NTFDETAIL.replace(':mintAddress', item?.mintObject?.mintAddress)}
                          title={item?.mintObject?.title}>
                          <ImageWrapper>
                            <Image src={getImageUrl(item?.mintObject?.img, { w: 54, h: 48 })} />
                          </ImageWrapper>
                        </ImageLink>
                      )}
                    </Td>
                    <Td role='cell'>
                      <TitleLink
                        href={EControllers.NTFDETAIL.replace(':mintAddress', item?.mintObject?.mintAddress)}
                        title={item?.mintObject?.title}>
                        {item?.mintObject?.title}
                      </TitleLink>
                    </Td>
                    <Td role='cell'>
                      <SolanaLink
                        href={EControllers.EXPLORER_SOLANA.replace(':transaction_id', item?.transaction_id)}
                        title={item?.transaction_id}
                        target='_blank'>
                        {formatDotDotDot(item?.transaction_id)}
                      </SolanaLink>
                    </Td>
                    <Td role='cell'>
                      <TransactionType>
                        {parse(formatTransactionType(item))} <Source>{item?.source === ESources.V2 ? '(ME v2)' : '(ME)'}</Source>
                      </TransactionType>
                    </Td>
                    <Td role='cell'>{formatTime(item?.blockTime)}</Td>
                    <Td role='cell'>
                      {formatTotalAmount(item, true) ? (
                        <PriceWrapper>
                          <PriceIcon />
                          {formatTotalAmount(item, true)}
                        </PriceWrapper>
                      ) : (
                        <></>
                      )}
                    </Td>
                    <Td role='cell'>
                      <TitleLink
                        href={EControllers.NTFDETAIL.replace(':mintAddress', item?.mintObject?.mintAddress)}
                        title={item?.mintObject?.title}>
                        <span>{formatDotDotDot(item?.mint)}</span>
                      </TitleLink>
                    </Td>
                    <Td role='cell'>
                      <TooltipWrapper title={formatBuyer(item)} className={`copiedBuyer${index}`}>
                        <CopyToClipboard text={formatBuyer(item) ?? ''} onCopy={() => handleCopy(index, 'buyer')}>
                          <TooltipInfo
                            title='Copied'
                            placement='top'
                            leaveDelay={0}
                            classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}
                            open={copied && copied.length > 0 && copied[index]?.buyerCopied ? copied[index].buyerCopied : false}
                            disableHoverListener={true}>
                            <span>{formatDotDotDot(formatBuyer(item))}</span>
                          </TooltipInfo>
                        </CopyToClipboard>
                      </TooltipWrapper>
                    </Td>
                    <Td role='cell'>
                      <TooltipWrapper title={formatSeller(item)} className={`copiedSeller${index}`}>
                        <CopyToClipboard text={formatSeller(item) ?? ''} onCopy={() => handleCopy(index, 'seller')}>
                          <TooltipInfo
                            title='Copied'
                            placement='top'
                            leaveDelay={0}
                            classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}
                            open={copied && copied.length > 0 && copied[index]?.sellerCopied ? copied[index].sellerCopied : false}
                            disableHoverListener={true}>
                            <span>{formatDotDotDot(formatSeller(item))}</span>
                          </TooltipInfo>
                        </CopyToClipboard>
                      </TooltipWrapper>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableWrapper>
          {total > selectedPerPageDefault && (
            <Pagination
              perPage={perPage}
              total={total}
              selectedPerPage={selectedPerPage}
              currentPage={currentPage}
              goToPage={goToPage}
              handleChangeCurrentPage={setCurrentPage}
              handleChangeSelectedPerPage={setSelectedPerPage}
            />
          )}
        </Content>
      ) : (
        <NoData text={'No activities'} />
      )}
    </>
  );
};

export default observer(TableActivites);
