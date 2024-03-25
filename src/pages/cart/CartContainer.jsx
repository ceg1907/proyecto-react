import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './CartContainer.css';
import { ItemCountContainer } from '../../components/itemCount/ItemCountContainer';

export const CartContainer = () => {
  const { cart, clear, eliminar, cartTotalPrice } = useContext(CartContext);

  const totalPrice = cartTotalPrice();

  return (
    <div className='body-cart'>
      {cart.map(({ id, img, title, price, quantity }) => (
        <article key={id} className='box-item-cart'>
          <section className='box-img-cart'>
            <img src={img} alt={title} />
          </section>
          <Link to={`/article/${id}`}>
            <p className='nombre'>nombre: {title}</p>
          </Link>
          <p>Cantidad: {quantity}</p>
          {/* <ItemCountContainer stock={stock} /> */}
          <p className='precio'>precio: {price}</p>
          <button onClick={() => eliminar(id)}>eliminar</button>
        </article>
      ))}

      <h2>Total {totalPrice}</h2>
      <button onClick={clear}> Vaciar carrito</button>
      <Link to='/checkout'>
        <button>Terminar compra</button>
      </Link>
    </div>
  );
};
