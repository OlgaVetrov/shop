import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalQuantity, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div className={`cart ${cartItems.length === 0 ? "cart-empty" : ""}`}>
      <h2 className="cart-title">Shopping Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => ( <CartItem key={item.id} item={item} />))}

          <div className="cart-total">
            <p>Items: {totalQuantity}</p>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
