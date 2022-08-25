import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'mobx-react';
import initStore from '../base/stores';
import App from '../starter-kit/App';
import theme from '../starter-kit/theme/theme';

const stores = initStore();

interface SwitchingThemeProps {
  children?: ReactNode;
}

const SwitchingTheme: FC<SwitchingThemeProps> = (props) => {
  const { children } = props;

  return (
    <Provider {...stores}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}>
          <BrowserRouter>
            <App />
            {children}
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default SwitchingTheme;
