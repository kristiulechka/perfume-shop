import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navigation } from './components/navigation/Navigation';
import { Footer } from './components/footer/Footer';
import { ProductPage } from './pages/product-page/ProductPage';
import { Home } from './pages/home-page/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;