import { FC } from 'react';
import { observer } from 'mobx-react';
// import WalletInfo from './walletInfo';
import OffersMade from './offersMade';

interface Props {
  onClick: (item: any) => void;
  symbols: string[];
}

const OfferMadeComponent: FC<Props> = (props) => {
  return (
    <>
      {/* <WalletInfo /> */}
      <OffersMade {...props} />
    </>
  );
};

export default observer(OfferMadeComponent);
