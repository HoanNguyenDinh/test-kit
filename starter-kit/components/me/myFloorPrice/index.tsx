import { useContext, FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { IGroupMyItem } from '../../../../base/interfaces/collection';
import { formatPriceToSOL, formatRoundPrice } from '../../../../base/utils/price.helper';
import { CollectionStoreContext } from '../../../../base/stores/collection';
import { Web3ConnectionContext } from '../../../../base/web3/connection';
import WalletAvatar from './walletAvatar';
import InfoItem from './infoItem';
import { PageTitle, Container, ColLeft, ColRight, List, Item, PriceIcon } from './Styled';
import _ from 'lodash';

interface MyFloorPriceProps {
  walletAddress: string;
  title: string;
  symbols: string[];
}

const MyFloorPrice: FC<MyFloorPriceProps> = (props) => {
  const { walletAddress, title, symbols } = props;
  const collectionStore = useContext(CollectionStoreContext);
  const web3CollectionStore = useContext(Web3ConnectionContext);

  const mainWallet = useMemo(() => {
    const price = web3CollectionStore?.mainWallet ?? 0;
    const mainWalletTotal = formatPriceToSOL(+price, 2);
    return mainWalletTotal ?? 0;
  }, [web3CollectionStore.mainWallet]);

  const biddingWallet = useMemo(() => {
    const data = collectionStore.escrowBlance;
    const biddingPrice = formatRoundPrice(data?.balance, 2);
    return biddingPrice ?? 0;
  }, [collectionStore.escrowBlance]);

  const totalMyItemsListed = useMemo(() => {
    const myItemsListed = collectionStore.myItemsListed;
    const myItemsListedData = _.filter(myItemsListed, (item) => _.includes(symbols, item.collectionName));
    return myItemsListedData ? myItemsListedData.length : 0;
  }, [collectionStore.myItemsListed, symbols]);

  const totalOfferMade = useMemo(() => {
    const myOfferMade = collectionStore.myOfferMade;
    const myOfferMadeData = _.filter(myOfferMade, (item) => _.includes(symbols, item.collectionName));
    return myOfferMadeData ? myOfferMadeData.length : 0;
  }, [collectionStore.myOfferMade, symbols]);

  const totalOfferReceived = useMemo(() => {
    const myOfferReceived = collectionStore.myOfferReceived;
    const myOfferReceivedData = _.filter(myOfferReceived, (item) => _.includes(symbols, item.collectionSymbol));
    return myOfferReceivedData ? myOfferReceivedData.length : 0;
  }, [collectionStore.myOfferReceived, symbols]);

  const floorPrice = useMemo(() => {
    const list: IGroupMyItem[] = collectionStore.groupMyItems;
    const listed: IGroupMyItem[] = collectionStore.groupMyItemsListed;

    let total = 0;

    if (list && list.length > 0) {
      _.map(list, (item: IGroupMyItem) => {
        total += +item.floorPrice * item.items.length;
      });
    }

    if (listed && listed.length > 0) {
      _.map(listed, (item: IGroupMyItem) => {
        total += +item.floorPrice * item.items.length;
      });
    }

    return formatPriceToSOL(total, 2) || 0;
  }, [collectionStore.groupMyItems, collectionStore.groupMyItemsListed]);

  return (
    <Container>
      <ColLeft>
        <WalletAvatar walletAddress={walletAddress} />
      </ColLeft>
      <ColRight>
        <PageTitle>{title}</PageTitle>
        <List>
          <Item>
            <InfoItem label='Floor price' value={floorPrice} icon={<PriceIcon />} />
          </Item>
          <Item>
            <InfoItem label='Offers Made' value={totalOfferMade} />
          </Item>
          <Item>
            <InfoItem label='Main Wallet' value={mainWallet} icon={<PriceIcon />} />
          </Item>
          <Item>
            <InfoItem label='Offers Received' value={totalOfferReceived} />
          </Item>
          <Item>
            <InfoItem label='Bidding Wallet' value={biddingWallet} icon={<PriceIcon />} />
          </Item>
          <Item>
            <InfoItem label='My Listed Items' value={totalMyItemsListed} />
          </Item>
        </List>
      </ColRight>
    </Container>
  );
};

export default observer(MyFloorPrice);
