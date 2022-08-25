import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { UserAvatar } from '../../shared/icons';
import { EControllers } from '../../../../base/constants/common';
import { AccountWrapper, UserAvt, WalletBtnText } from './Styled';

interface NavConnectWalletInfoProps {
  isConnected: boolean;
}

const NavConnectWalletInfo: FC<NavConnectWalletInfoProps> = (props) => {
  const { isConnected } = props;

  const clsConnected = isConnected ? 'connected-wallet' : '';
  const btnText = isConnected ? '' : <WalletBtnText>Connect Wallet</WalletBtnText>;

  return (
    <AccountWrapper>
      <UserAvt className={clsConnected}>
        <Link to={EControllers.MYACCOUNT}>
          <UserAvatar />
        </Link>
      </UserAvt>
      <WalletMultiButton className={clsConnected}>{btnText}</WalletMultiButton>
    </AccountWrapper>
  );
};

const NavConnectWallet: FC = () => {
  const { connected } = useWallet();
  const isHome = useMatch('/');

  const info = useMemo(() => {
    return <NavConnectWalletInfo isConnected={connected} />;
  }, [connected]);

  return <>{!isHome && info}</>;
};

export default observer(NavConnectWallet);
