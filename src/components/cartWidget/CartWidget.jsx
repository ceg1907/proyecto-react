import { TbShoppingBag } from 'react-icons/tb';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
  const { cartTotalArticles } = useContext(CartContext);

  const totalQuantity = cartTotalArticles();

  return (
    <div className='cart-box'>
      <h4> {totalQuantity} </h4>
      <TbShoppingBag size={'1.5rem'} />
      <span>carrito</span>
    </div>
  );
};
