import { Suspense } from 'react';
import './App.css';
import Layout from './components/layout/Layout';

function App() {
  return (
    <>
      <Layout />
    </>
  );
}
// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedApp() {
  return (
    <Suspense fallback="...is loading">
      <App />
    </Suspense>
  );
}
