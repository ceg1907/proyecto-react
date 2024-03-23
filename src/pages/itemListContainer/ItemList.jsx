import { ProductCard } from '../../components/productCard/ProductCard';
import { ProductCardConteiner } from '../../components/productCard/ProductCardContainer';
import './ItemList.css';

export const ItemList = ({ stock }) => {
  return (
    <div className='box-articles'>
      {stock.map(({ id, title, price, img, description }) => {
        return (
          <ProductCardConteiner
            key={id}
            img={img}
            title={title}
            price={price}
            description={description}
            id={id}
          />
        );
      })}
    </div>
  );
};
