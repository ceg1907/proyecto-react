import { TbShoppingBag } from "react-icons/tb";
import "./CartWidget.css";

export function CartWidget() {
  return (
    <div className="cart-box">
      <button className="button-CartWidget">
        <span>15</span>
        <TbShoppingBag size={"1.5rem"} />
        <span>carrito</span>
      </button>
    </div>
  );
}
