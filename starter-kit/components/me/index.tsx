import { FC, useContext, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useWallet } from '@solana/wallet-adapter-react';
import { CommonStoreContext } from '../../../base/stores/common';
import { useOrganization } from '../../../base/hooks/useOrganization';
import MyFloorPrice from '../me/myFloorPrice';
import MeTabItems from './tabItems';
import Connect from './connect';
import { useWalletAddress } from '../../../base/hooks/useWalletAddress';
import { ICollectionInfo, IFamily } from '../../../base/interfaces/collection';
import _ from 'lodash';

const MeListings: FC = () => {
  const { walletAddress } = useWalletAddress();
  const { connected } = useWallet();
  const commonStore = useContext(CommonStoreContext);
  const creator = commonStore.creator;
  const brandSymbol = commonStore.brandSymbol;

  const { org } = useOrganization(creator);
  const symbols = useMemo(() => {
    let symbolsTemp: string[] = [];
    if (creator && org && org.families) {
      _.map(org.families, (item: IFamily) => {
        const { collections } = item;
        _.map(collections, (collection: ICollectionInfo) => {
          symbolsTemp = [...symbolsTemp, collection?.symbol];
        });
      });
    }
    return creator ? symbolsTemp : brandSymbol ? [brandSymbol] : [];
  }, [creator, brandSymbol, org]);

  if (!connected) {
    return <Connect />;
  }

  return (
    <>
      <MyFloorPrice walletAddress={walletAddress} title={''} symbols={symbols} />
      <MeTabItems symbols={symbols} />
    </>
  );
};

export default observer(MeListings);
