import logo from '../../assets/images/logo.svg';
import './Home.css';
import { useTranslation, Trans } from 'react-i18next';
import { useState } from 'react';

// const lngs = {
//   en: { nativeName: 'English' },
//   fr: { nativeName: 'French' },
// };

export default function Home() {
  const { t, i18n } = useTranslation(['translation', 'common']);
  const [count, setCounter] = useState(0);
  const [lngs] = useState({
    en: { nativeName: 'English' },
    fr: { nativeName: 'French' },
  });

  return (
    <>
      <div className="App flex flew-column">
        <img src={logo} className="App-logo" alt="logo" />
        <p>CECI EST LA PAGE HOME</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
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
    </>
  );
}
