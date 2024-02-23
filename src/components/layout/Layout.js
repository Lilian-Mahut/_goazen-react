import './Layout.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../../pages/home/Home';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
