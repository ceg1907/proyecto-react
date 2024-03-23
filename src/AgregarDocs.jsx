import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { dataBase } from './fireBaseConfig';
import { articles } from './productsMock';

export const AgregarDocs = () => {
  const rellenarDocs = () => {
    let articlesCollection = collection(dataBase, 'articles');
    articles.forEach((item) => {
      addDoc(articlesCollection, item);
    });
  };
  return (
    <>
      <button onClick={rellenarDocs}>agregar productos</button>
    </>
  );
};
