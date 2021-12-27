import type { AppProps } from 'next/app';
import { GlobalStyle } from '../global/styles/global';
import theme from '../global/styles/theme';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
