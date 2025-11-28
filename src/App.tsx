import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navigation } from './components/navigation/Navigation';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';
import { ProductPage } from './pages/product-page/ProductPage';

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