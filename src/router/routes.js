import { CartContainer } from '../pages/cart/CartContainer';
import { CheckoutContainer } from '../pages/checkout/CheckoutContainer';
import { ItemDetailContainer } from '../pages/itemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from '../pages/itemListContainer/ItemListContainer';

export const routes = [
  {
    id: 'home',
    path: '/',
    Element: ItemListContainer,
  },
  {
    id: 'category',
    path: '/category/:category',
    Element: ItemListContainer,
  },
  {
    id: 'detail',
    path: '/article/:id',
    Element: ItemDetailContainer,
  },
  {
    id: 'cart',
    path: '/cart',
    Element: CartContainer,
  },
  {
    id: 'checkout',
    path: '/checkout',
    Element: CheckoutContainer,
  },
];
