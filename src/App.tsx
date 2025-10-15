import { GlobalStyles } from './styles/GlobalStyles';
import { Navigation } from './components/navigation/Navigation';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navigation />
      <Home />
      <Footer />
    </>
  );
}

export default App;