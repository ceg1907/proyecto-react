import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { Loader } from '../../components/loader/Loader';
import { CartContext } from '../../context/CartContext';
import { dataBase } from '../../fireBaseConfig';
import { collection, doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { addToCart, cartTotalQuantityId } = useContext(CartContext);

  const initial = cartTotalQuantityId(id);

  useEffect(() => {
    setIsLoading(true);

    let articlesCollection = collection(dataBase, 'articles');
    let docReference = doc(articlesCollection, id);

    getDoc(docReference)
      .then((res) => setArticle({ ...res.data(), id: res.id }))
      .finally(() => setIsLoading(false));
  }, [id]);

  let onAdd = (cantidad) => {
    let itemCart = {
      ...article,
      quantity: cantidad,
    };
    addToCart(itemCart);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ItemDetail {...article} onAdd={onAdd} initial={initial} />
    </>
  );
};
