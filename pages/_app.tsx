import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { theme } from 'config/theme';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@mui/material';
import { BackgroundProvider } from 'components/Layout/BackgroundProvider';
import { Layout } from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <BackgroundProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BackgroundProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
