import React from 'react';
import '../../pages/itemDetailContainer/ItemDetail.css';

export const AddToCart = ({ onAdd, counter }) => {
  return <button className='disabled' onClick={() => onAdd(counter)}></button>;
};
