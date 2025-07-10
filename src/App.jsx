import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';

const ProductList = React.lazy(() => import('./components/ProductList'));
const ProductDetail = React.lazy(() => import('./components/ProductDetail'));
const Cart = React.lazy(() => import('./components/Cart'));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
