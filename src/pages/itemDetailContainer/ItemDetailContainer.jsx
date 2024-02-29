import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getArticle } from "../../productsMock";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticle(+id).then((res) => setArticle(res));
  }, [id]);
  return <>{article && <ItemDetail {...article} />}</>;
};
