import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (article) => {
    const validate = validateCart(article.id);
    if (validate) {
      let newCart = cart.map((element) => {
        if (element.id === article.id) {
          return {
            ...element,
            quantity: article.quantity,
          };
        } else {
          return element;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, article]);
    }
  };

  const validateCart = (id) => {
    const validate = cart.some((element) => element.id === id);
    return validate;
  };

  const clear = () => {
    setCart([]);
  };

  const eliminar = (id) => {
    let newCart = cart.filter((element) => element.id !== id);
    setCart(newCart);
  };

  const cartTotalArticles = () => {
    let totalQuantity = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return totalQuantity;
  };

  const cartTotalPrice = () => {
    let totalPrice = cart.reduce((acc, element) => {
      return acc + element.quantity * element.price;
    }, 0);
    return totalPrice;
  };

  const cartTotalQuantityId = (id) => {
    let item = cart.find((element) => element.id === id);
    if (item) {
      return item.quantity;
    } else {
      return item;
    }
  };

  const dataCart = {
    cart,
    addToCart,
    eliminar,
    clear,
    cartTotalArticles,
    cartTotalPrice,
    cartTotalQuantityId,
  };
  return (
    <CartContext.Provider value={dataCart}> {children} </CartContext.Provider>
  );
};
