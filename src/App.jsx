import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContainer } from './pages/cart/CartContainer';
import { ItemDetailContainer } from './pages/itemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './pages/itemListContainer/ItemListContainer';
import { Layout } from './layout/Layout';
import { CheckoutContainer } from './pages/checkout/CheckoutContainer';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<ItemListContainer />} />
              <Route
                path='/category/:category'
                element={<ItemListContainer />}
              />
              <Route path='/cart' element={<CartContainer />} />
              <Route path='/article/:id' element={<ItemDetailContainer />} />
              <Route path='/checkout' element={<CheckoutContainer />} />
            </Route>
            <Route path='*' element={<h2>404 not found</h2>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
