import TranslatedComponent from '../../components/TranslatedComponent';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CounterComponent from '../../components/CounterComponent';

export async function getServerSideProps({ locale }: GetServerSidePropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale!)),
      // Will be passed to the page component as props
    },
  };
}

function SsgPage(): JSX.Element {
  return (
    <article>
      <header>
        <h1>
          SSG-Page!
        </h1>
      </header>
      <TranslatedComponent />
      <br />
      <CounterComponent />
    </article>
  );
}

export default SsgPage;
