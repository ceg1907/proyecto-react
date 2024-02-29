import { useParams } from "react-router-dom";
import { getArticles } from "../../productsMock";
import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { Loader } from "../../components/loader/Loader";

export const ItemListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const [stock, setStock] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((res) => {
      if (category) {
        const articlesFilter = res.filter((item) => item.category === category);
        setStock(articlesFilter);
      } else {
        setStock(res);
      }

      setIsLoading(false);
    });
  }, [category]);

  return <>{isLoading ? <Loader /> : <ItemList stock={stock} />}</>;
};
