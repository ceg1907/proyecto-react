export const ItemCount = ({ counter, sumar, restar }) => {
  return (
    <div>
      <button onClick={restar}> restar </button>
      <input type="text" defaultValue={counter} />
      <button onClick={sumar}> sumar </button>
    </div>
  );
};
