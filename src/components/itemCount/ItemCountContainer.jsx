import { useState } from 'react';
import { ItemCount } from './ItemCount';

export const ItemCountContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert();
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert();
    }
  };

  return (
    <ItemCount
      counter={counter}
      sumar={sumar}
      restar={restar}
      onAdd={onAdd}
      stock={stock}
    />
  );
};
