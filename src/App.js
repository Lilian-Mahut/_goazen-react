import './App.css';
import Layout from './components/layout/Layout';
import { useTranslation, Trans } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
  return (
    <>
      <Trans i18nKey="description.part1">
        Edit <code>src/App.js</code> and save to reload.
      </Trans>
      <p>{t('description.part2')}</p>
      <Layout />
    </>
  );
}
