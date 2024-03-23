export const ItemCount = ({ counter, sumar, restar, onAdd }) => {
  return (
    <>
      <div>
        <button onClick={restar}> restar </button>
        <h4>{counter}</h4>
        <button onClick={sumar}> sumar </button>
      </div>
      <button onClick={() => onAdd(counter)}>agregar al carrito</button>
    </>
  );
};
