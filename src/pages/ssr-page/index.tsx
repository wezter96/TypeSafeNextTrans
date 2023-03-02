import TranslatedComponent from '../../components/TranslatedComponent';
import { GetStaticPropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CounterComponent from '../../components/CounterComponent';

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
    },
  };
}

function SsrPage(): JSX.Element {
  return (
    <article>
      <header>
        <h1>
          SSR-Page!
        </h1>
      </header>
      <TranslatedComponent />
      <br />
      <CounterComponent />
    </article>
  );
}

export default SsrPage;
