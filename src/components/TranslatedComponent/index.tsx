import { useTranslation } from 'next-i18next';

function TranslatedComponent(): JSX.Element {
  const { t } = useTranslation();

  return (
    <article>
      {t('hello')}
    </article>
  );
}

export default TranslatedComponent;
