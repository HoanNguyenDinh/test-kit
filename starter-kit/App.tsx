import { observer } from 'mobx-react';
import Router from './routes';
import SolanaContext from '../base/components/solanaContext';
import GlobalStyle from './theme/globalStyle';
import SolanaWalletStyle from './theme/solanaWalletStyle';

function App() {
  return (
    <SolanaContext>
      <GlobalStyle />
      <SolanaWalletStyle />
      <Router />
    </SolanaContext>
  );
}

export default observer(App);
