import { useParams } from 'react-router-dom';

import { ItemList } from './ItemList';
import { useEffect, useState } from 'react';
import { Loader } from '../../components/loader/Loader';
import { dataBase } from '../../fireBaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const [stock, setStock] = useState([]);

  useEffect(() => {
    let articleCollection = collection(dataBase, 'articles');

    let ask;

    if (category) {
      let articlesFiltered = query(
        articleCollection,
        where('category', '==', category)
      );
      ask = articlesFiltered;
    } else {
      ask = articleCollection;
    }

    getDocs(ask)
      .then((res) => {
        let arrayDecrypted = res.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });
        setStock(arrayDecrypted);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  return <>{isLoading ? <Loader /> : <ItemList stock={stock} />}</>;
};
