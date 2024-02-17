import './App.css';
import Layout from './components/layout/Layout';
import { useTranslation, Trans } from 'react-i18next';
import { useState } from 'react';

const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'French' },
};

export default function App() {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);

  return (
    <>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
            }}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lng);
              setCounter(count + 1);
            }}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <p>
        <i>{t('counter', { count })}</i>
      </p>
      <Trans i18nKey="description.part1">
        Edit <code>src/App.js</code> and save to reload.
      </Trans>
      <p>{t('description.part2')}</p>
      <Layout />
    </>
  );
}
