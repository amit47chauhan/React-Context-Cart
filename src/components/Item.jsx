import { useContext } from "react";
import CartContext from "../contexts/CartContext";


function Item({ name, price }) {
  const cart = useContext(CartContext);
  return (
    <div className="item-card">
      <div className="item-name">{name}</div>
      <div className="item-price">${price}</div>
      <button
        onClick={() =>
          cart.setItems([...cart.items, { name: name, price: price }])
        }
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
