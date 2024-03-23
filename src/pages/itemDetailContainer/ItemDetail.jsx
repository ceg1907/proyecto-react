import { ItemCountContainer } from '../../components/itemCount/ItemCountContainer';
import './ItemDetail.css';

export const ItemDetail = ({
  img,
  title,
  description,
  price,
  stock,
  onAdd,
  initial,
}) => {
  return (
    <div className='containerDetail'>
      <div className='box-itemDetail'>
        <span className='box-imgDetail'>
          <img className='imgDetail' src={img} alt='' />
        </span>
        <div className='box-infoDetail'>
          <h2>{title}</h2>
          <p>{description}</p>
          <span>{price}</span>
          <div>
            {initial && <h3> Hay {initial} unidades en el carrito</h3>}
            <section>
              <ItemCountContainer
                stock={stock}
                onAdd={onAdd}
                initial={initial}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
