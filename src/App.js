import './styles/App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
