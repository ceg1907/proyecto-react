import { AddToCart } from '../addToCart/AddToCart';
import { ButtonItemCountContainer } from '../buttonCount/ButtonItemCountContainer';

export const ItemCount = ({
  counter,
  sumar,
  restar,
  onAdd,
  stock,
  totalPrice,
}) => {
  return (
    <>
      <ButtonItemCountContainer
        sumar={sumar}
        restar={restar}
        counter={counter}
        stock={stock}
        totalPrice={totalPrice}
      />
      <AddToCart onAdd={onAdd} counter={counter} />
    </>
  );
};
