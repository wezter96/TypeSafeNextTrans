import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next';
import { compose } from 'redux';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default compose(
  wrapper.withRedux,
  appWithTranslation
)(MyApp)
