
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Facility from './components/facility/Facility';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Cart from './components/home/components/cart/Cart';
import DetailProduct from './components/home/components/detail/DetailProduct';
import Home from './components/home/Home';
import { ProductProvider } from './context/ProductProvider';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <BrowserRouter>
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<DetailProduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Facility />
          <Footer />
        </BrowserRouter>

      </ProductProvider>
    </div>
  );
}

export default App;
