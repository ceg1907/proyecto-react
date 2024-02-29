import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./layout/header/Header";
import { ItemListContainer } from "./pages/ItemListContainer/ItemListContainer";
import { CartContainer } from "./pages/cart/CartContainer";
import { ItemDetailContainer } from "./pages/itemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/caTegory/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/article/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
