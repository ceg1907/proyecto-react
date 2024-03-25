export const ButtonItemCountContainer = ({ counter, sumar }) => {
  return (
    <div>
      <button
        onClick={() => {
          sumar();
        }}>
        restar
      </button>
      <h4>{counter}</h4>
      <button
        onClick={() => {
          sumar();
        }}>
        sumar
      </button>
    </div>
  );
};
