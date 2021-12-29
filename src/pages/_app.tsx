import type { AppProps } from 'next/app';
import { GlobalStyle } from '../global/styles/global';
import theme from '../global/styles/theme';
import { ThemeProvider } from 'styled-components';
import MenuProvider from '../contexts/menuGlobal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </ThemeProvider>
  );
}

export default MyApp;
