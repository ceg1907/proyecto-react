import { useCounter } from "../../hooks/useCounter";
import { ItemCount } from "./ItemCount";

export const ItemCountContainer = () => {
  const { counter, sumar, restar } = useCounter(1);

  return <ItemCount counter={counter} sumar={sumar} restar={restar} />;
};
