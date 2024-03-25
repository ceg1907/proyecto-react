import { Link } from 'react-router-dom';
import './ProductCard.css';
import { TbShoppingBagPlus } from 'react-icons/tb';
import '@fontsource/corinthia';

export const ProductCard = ({ id, title, price, img }) => {
  return (
    <Link className='link-card' to={`/article/${id}`}>
      <article className='box-card'>
        <header className='box-img'>
          <img className='img-card' src={img} alt='' />
        </header>
        <div className='box-info'>
          <h3>{title}</h3>
          <div>
            <span>${price}</span>
            <TbShoppingBagPlus fontSize={'1.3rem'} />
          </div>
        </div>
      </article>
    </Link>
  );
};
