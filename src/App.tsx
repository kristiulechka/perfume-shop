import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Navigation } from './components/navigation/Navigation';
import { Footer } from './components/footer/Footer';
import { ProductPage } from './pages/product-page/ProductPage';
import { Home } from './pages/home-page/Home';
import { ShoppingBag } from './components/shopping-bag/ShoppingBag';

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
      <ShoppingBag />
    </BrowserRouter>
  );
}

export default App;
