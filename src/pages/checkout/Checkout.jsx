export const Checkout = ({ sendForm, saveUserData, orderId }) => {
  return (
    <div>
      {orderId ? (
        <h1> Gracias por su compra, su numero de orden es {orderId}</h1>
      ) : (
        <form onSubmit={sendForm}>
          <input
            type='text'
            placeholder='Nombre'
            onChange={saveUserData}
            name='nombre'
          />
          <input
            type='text'
            placeholder='Apellido'
            onChange={saveUserData}
            name='apellido'
          />
          <input
            type='number'
            placeholder='Telefono'
            onChange={saveUserData}
            name='telefono'
          />
          <input
            type='text'
            placeholder='e-mail'
            onChange={saveUserData}
            name='email'
          />
          <button type='submit'>Comprar ahora</button>
        </form>
      )}
    </div>
  );
};
