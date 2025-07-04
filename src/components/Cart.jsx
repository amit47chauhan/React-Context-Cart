import { useContext } from "react";
import CartContext from "../contexts/CartContext";
function Cart() {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="cart-section">
      <div className="cart-title">Cart</div>
      <ul className="cart-list">
        {cart &&
          cart.items.map((item) => (
            <li className="cart-item" key={item.name}>
              <span className="cart-item-name">{item.name}</span>
              <span className="cart-item-price">${item.price}</span>
            </li>
          ))}
      </ul>
      <div className="cart-total">Total: ${total}</div>
    </div>
  );
}

export default Cart;
