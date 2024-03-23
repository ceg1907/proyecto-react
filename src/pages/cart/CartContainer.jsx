import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartContainer = () => {
  const { cart, clear, eliminar, cartTotalPrice } = useContext(CartContext);

  const totalPrice = cartTotalPrice();

  return (
    <div>
      <h3>carrito</h3>

      {cart.map((article) => (
        <div key={article.id}>
          <h2>nombre:{article.title}</h2>
          <h2>cantidad: {article.quantity}</h2>
          <h2>precio: {article.price}</h2>
          <button onClick={() => eliminar(article.id)}>eliminar</button>
        </div>
      ))}

      <h2>Total {totalPrice}</h2>

      <button onClick={clear}> Vaciar carrito</button>
      <Link to='/checkout'>
        <button>Terminar compra</button>
      </Link>
    </div>
  );
};
