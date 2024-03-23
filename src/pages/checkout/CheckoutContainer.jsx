import React, { useContext, useState } from 'react';
import { Checkout } from './Checkout';
import { CartContext } from '../../context/CartContext';
import { dataBase } from '../../fireBaseConfig';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';

export const CheckoutContainer = () => {
  const [userData, setUserData] = useState({
    nombre: '',
    apellido: '',
    email: '',
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, cartTotalPrice, clear } = useContext(CartContext);
  let totalPrice = cartTotalPrice();

  const sendForm = (e) => {
    e.preventDefault();
    let order = {
      buyer: userData,
      item: cart,
      total: totalPrice,
    };

    let ordersCollection = collection(dataBase, 'orders');
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));
    cart.forEach((element) => {
      let docReference = doc(dataBase, 'articles', element.id);
      updateDoc(docReference, { stock: element.stock - element.quantity });
    });

    clear();
  };

  const saveUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Checkout
      orderId={orderId}
      sendForm={sendForm}
      saveUserData={saveUserData}
    />
  );
};
