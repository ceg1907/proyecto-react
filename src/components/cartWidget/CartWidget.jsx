import { CiShop } from 'react-icons/ci';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Badge, Box } from '@mui/material';

export const CartWidget = () => {
  const { cartTotalArticles } = useContext(CartContext);

  const totalQuantity = cartTotalArticles();

  return (
    <div className='cart-box'>
      <section>
        <Badge badgeContent={totalQuantity} className='badge'>
          <CiShop size={'1.5rem'} color='inherit' />
        </Badge>
      </section>
      <p>carrito</p>
    </div>
  );
};
