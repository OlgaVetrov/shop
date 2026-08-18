import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
import ChangeQuantity from "./ChangeQuantity";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.image} className="cart-item-image" alt={item.name} />

      <div className="cart-item-info">
        <h3>{item.name}</h3>

        <p>${item.price}</p>

        <ChangeQuantity item={item} />

        <p className="cart-item-total">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        <button className="change"
          onClick={() => {dispatch(removeFromCart(item))}}
        > Remove </button>
      </div>
    </div>
  );
};

export default CartItem;
