import { ItemCountContainer } from "../../components/itemCount/ItemCountContainer";
import "./ItemDetail.css";

export const ItemDetail = (article) => {
  return (
    <div className="containerDetail">
      <div className="box-itemDetail">
        <span className="box-imgDetail">
          <img className="imgDetail" src={article.img} alt="" />
        </span>
        <div className="box-infoDetail">
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <span>{article.price}</span>
          <section>
            <ItemCountContainer />
            <button>agregar al carrito</button>
          </section>
        </div>
      </div>
    </div>
  );
};
