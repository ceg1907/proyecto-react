import { ProductCard } from './ProductCard';

export const ProductCardConteiner = ({
  id,
  title,
  price,
  img,
  description,
}) => {
  return (
    <ProductCard
      key={id}
      img={img}
      title={title}
      price={price}
      description={description}
      id={id}
    />
  );
};
