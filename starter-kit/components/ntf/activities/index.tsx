import { FC, useMemo } from 'react';
import parse from 'html-react-parser';
import { observer } from 'mobx-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Collapse from '../../shared/collapse';
import Pagination from '../../shared/pagination';
import FilterTabs from '../../ntfDetail/filterTabs';
import { HistoryIcon } from '../../shared/icons/index';
import PriceWithIcon from '../../shared/priceWithIcon';
import DefaultNoData from '../noData';
import { useCopyOnActivities } from '../../../../base/hooks/useCopyToClipboard';
import { useNTFActivitiesFilter } from '../../../../base/hooks/useActivities';
import { usePagination } from '../../../../base/hooks/usePagination';
import { EControllers, ESources } from '../../../../base/constants/common';
import { IGlobalActivities } from '../../../../base/interfaces/collection';
import { formatDotDotDot } from '../../../../base/utils/text.helper';
import { formatPriceToSOL } from '../../../../base/utils/price.helper';
import { formatTimeToDays } from '../../../../base/utils/time.helper';
import { getImageUrl } from '../../../../base/utils/image.helper';
import { ENTFActivityType, ETransactionType } from '../../../../base/constants/common';
import Media from '../../shared/media';
import {
  TooltipWrapper,
  TooltipItem,
  Content,
  SolanaLink,
  Table,
  TableWrapper,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TransactionType,
  TransactionTypeSecond,
  Source,
  SourceSecond,
  NoData,
  Link,
  ImageWrap,
  Title
} from './Styled';

interface NTFActivitiesProps {
  activities: IGlobalActivities[] | null;
  type: string;
  selectedPerPageDefault?: number;
  showName?: boolean;
}

const NTFActivities: FC<NTFActivitiesProps> = (props) => {
  const { activities, type, showName = false } = props;
  const { copied, handleCopy } = useCopyOnActivities();
  const { perPage, currentPage, goToPage, selectedPerPageDefault, selectedPerPage, setSelectedPerPage, setCurrentPage } = usePagination();
  const { tabsItems, selectedTab, filterResult, handleChangeFilter } = useNTFActivitiesFilter(activities);
  const total = !filterResult ? 0 : filterResult.length;
  const isPagination = total > selectedPerPageDefault;
  const isTab = type === ENTFActivityType.TAB;

  const onChangeFilter = (value: string) => {
    setCurrentPage(1);
    handleChangeFilter(value);
  };

  const paginationResult = useMemo(() => {
    if (filterResult && currentPage > 0 && selectedPerPage > 0) {
      let result: IGlobalActivities[] = [];

      filterResult.map((item, index) => {
        if (index >= (currentPage - 1) * selectedPerPage && index < currentPage * selectedPerPage) {
          result = [...result, item];
        }
      });

      return result;
    }

    return null;
  }, [filterResult, currentPage, selectedPerPage]);

  const acts: IGlobalActivities[] | null = paginationResult;

  const getTransactionType = (item: IGlobalActivities) => {
    let transactionType = '';
    if (item?.parsedList) {
      transactionType = '<span class="listing">Listing</span>';
    }
    if (item?.parsedUnlist) {
      transactionType = '<span class="cancel-listing">Cancel Listing</span>';
    }
    if (item?.parsedPlacebid) {
      transactionType = '<span class="place-bid">Place Bid</span>';
    }
    if (item?.parsedTransaction) {
      transactionType = '<span class="sale">Sales</span>';
    }
    if (item?.parsedCancelbid) {
      transactionType = '<span class="cancel-bid">Cancel Bid</span>';
    }
    if (item?.txType === ETransactionType.AUCTIONCANCELED) {
      transactionType = '<span class="auction-canceled">Auction Canceled</span>';
    }
    if (item?.txType === ETransactionType.AUCTIONCREATED) {
      transactionType = '<span class="auction-created">Auction Created</span>';
    }
    return transactionType;
  };

  const getTotalAmount = (item: IGlobalActivities) => {
    let totalAmount: string | number = '';
    if (item?.parsedList) {
      totalAmount = formatPriceToSOL(item.parsedList?.amount, false) || '';
    }
    if (item?.parsedPlacebid) {
      totalAmount = formatPriceToSOL(item.parsedPlacebid?.amount, false) || '';
    }
    if (item?.parsedTransaction) {
      totalAmount = formatPriceToSOL(item.parsedTransaction?.total_amount, false) || '';
    }
    if (item?.txType === ETransactionType.AUCTIONCREATED) {
      totalAmount = formatPriceToSOL(item.parsedAuctionTransaction?.amount, false) || '';
    }
    return totalAmount;
  };

  const getBuyer = (item: IGlobalActivities) => {
    let buyer: string | undefined = '';
    if (item?.parsedList) {
      buyer = '';
    }
    if (item?.parsedUnlist) {
      buyer = item.parsedUnlist?.buyer_address;
    }
    if (item?.parsedPlacebid) {
      buyer = item.parsedPlacebid?.buyer_address;
    }
    if (item?.parsedTransaction) {
      buyer = item.parsedTransaction?.buyer_address;
    }
    if (item?.parsedCancelbid) {
      buyer = item.parsedCancelbid?.buyer_address;
    }
    return buyer;
  };

  const getSeller = (item: IGlobalActivities) => {
    let seller: string | undefined = '';
    if (item?.parsedList) {
      seller = item?.seller_address || item.parsedList?.seller_address;
    }
    if (item?.parsedUnlist) {
      seller = item?.seller_address;
    }
    if (item?.parsedPlacebid) {
      seller = item?.seller_address;
    }
    if (item?.parsedTransaction) {
      seller = item?.seller_address || item.parsedTransaction?.seller_address;
    }
    if (item?.parsedCancelbid) {
      seller = item?.seller_address;
    }
    if (item?.parsedAuctionTransaction) {
      seller = item.seller_address;
    }
    return seller;
  };

  const titleCols = useMemo(() => {
    return (
      <Tr role='row'>
        {showName && <Th role='columnheader'>Name</Th>}
        <Th role='columnheader' className={type}>
          Transation ID
        </Th>
        <Th role='columnheader' className={type}>
          Transaction type
        </Th>
        <Th role='columnheader' className={type}>
          Time
        </Th>
        <Th role='columnheader' className={type}>
          Total amount
        </Th>
        <Th role='columnheader' className={type}>
          Buyer
        </Th>
        <Th role='columnheader' className={type}>
          Seller
        </Th>
      </Tr>
    );
  }, [type, showName]);

  const dataCols = useMemo(() => {
    if (acts) {
      const data: unknown[] = [];
      acts.map((activity: IGlobalActivities) => {
        const id = activity._id;
        const transactionId = activity?.transaction_id || '';
        const transactionIdSum = formatDotDotDot(transactionId);
        const transactionType = parse(getTransactionType(activity));
        const transactionSource = activity?.source === ESources.V2 ? '(ME v2)' : activity?.source === ESources.AUCTION ? '' : '(ME)';
        const time = formatTimeToDays(activity?.blockTime);
        const totalAmount = getTotalAmount(activity);
        const buyer = getBuyer(activity) || '';
        const buyerSum = formatDotDotDot(buyer);
        const seller = getSeller(activity) || '';
        const sellerSum = formatDotDotDot(seller);
        const isBuyerCopied = copied && copied.id === id && copied.type === 'buyer';
        const isSellerCopied = copied && copied.id === id && copied.type === 'seller';
        const rawImg = activity?.mintObject?.img;
        const img = getImageUrl(rawImg, { w: 54, h: 48 });
        const name = activity?.mintObject?.title;
        const mintAddress = activity?.mintObject?.mintAddress;

        data.push(
          <Tr role='row' key={`global-activities-${id}`} className={type}>
            {showName && (
              <Td role='cell' className='col-img'>
                <Link href={EControllers.NTFDETAIL.replace(':mintAddress', mintAddress)} title={name}>
                  {rawImg && (
                    <ImageWrap>
                      <Media imgUrl={img} alt={name || ''} />
                    </ImageWrap>
                  )}
                  <Title>{name}</Title>
                </Link>
              </Td>
            )}
            <Td role='cell' className={type}>
              <SolanaLink
                href={EControllers.EXPLORER_SOLANA.replace(':transaction_id', transactionId)}
                title={transactionId}
                target='_blank'>
                {transactionIdSum}
              </SolanaLink>
            </Td>
            <Td role='cell' className={type}>
              {isTab && (
                <TransactionTypeSecond>
                  {transactionType} <SourceSecond>{transactionSource}</SourceSecond>
                </TransactionTypeSecond>
              )}
              {!isTab && (
                <TransactionType>
                  {transactionType} <Source>{transactionSource}</Source>
                </TransactionType>
              )}
            </Td>
            <Td role='cell' className={type}>
              {time}
            </Td>
            <Td role='cell' className={type}>
              <PriceWithIcon price={totalAmount} />
            </Td>
            <Td role='cell' className={type}>
              {!buyerSum ? (
                '-'
              ) : (
                <TooltipWrapper title={buyer} className={`copiedBuyer${id}`}>
                  <CopyToClipboard text={buyer} onCopy={() => handleCopy(id, 'buyer')}>
                    <TooltipItem
                      title='Copied'
                      placement='top'
                      leaveDelay={0}
                      classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}
                      open={isBuyerCopied || false}
                      disableHoverListener={true}>
                      <span>{buyerSum}</span>
                    </TooltipItem>
                  </CopyToClipboard>
                </TooltipWrapper>
              )}
            </Td>
            <Td role='cell' className={type}>
              {!sellerSum ? (
                '-'
              ) : (
                <TooltipWrapper title={seller} className={`copiedSeller${id}`}>
                  <CopyToClipboard text={seller} onCopy={() => handleCopy(id, 'seller')}>
                    <TooltipItem
                      title='Copied'
                      placement='top'
                      leaveDelay={0}
                      classes={{ tooltip: 'MuiTooltip-tooltip-detail' }}
                      open={isSellerCopied || false}
                      disableHoverListener={true}>
                      <span>{sellerSum}</span>
                    </TooltipItem>
                  </CopyToClipboard>
                </TooltipWrapper>
              )}
            </Td>
          </Tr>
        );
      });
      return data;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acts, copied, type, showName]);

  const actTables = useMemo(() => {
    return (
      <>
        {!acts || acts.length < 1 ? (
          <>{isTab ? <NoData>No data</NoData> : <DefaultNoData />}</>
        ) : (
          <TableWrapper>
            <Table>
              <Thead>{titleCols}</Thead>
              <Tbody role='rowgroup'>{dataCols}</Tbody>
            </Table>
          </TableWrapper>
        )}
      </>
    );
  }, [acts, titleCols, dataCols, isTab]);

  const filterEl = useMemo(() => {
    return <FilterTabs tabsItems={tabsItems} selectedTab={selectedTab} handleChangeFilter={onChangeFilter} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabsItems, selectedTab]);

  const paginationEl = useMemo(() => {
    return (
      <>
        {isPagination && (
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
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPagination, perPage, total, selectedPerPage, currentPage, goToPage]);

  if (isTab) {
    return (
      <Collapse title='Item activity' icon={<HistoryIcon />}>
        <Content>
          {filterEl}
          {actTables}
          {paginationEl}
        </Content>
      </Collapse>
    );
  }

  return (
    <>
      {actTables}
      {paginationEl}
    </>
  );
};

export default observer(NTFActivities);
