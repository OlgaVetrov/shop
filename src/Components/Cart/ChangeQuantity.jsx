import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../../redux/cartSlice";

const ChangeQuantity = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="quantity">
      <button onClick={() => {dispatch(decreaseQuantity(item))}}
      > - </button>

      <span>{item.quantity}</span>

      <button onClick={() => {dispatch(increaseQuantity(item))}}
      > + </button>
    </div>
  );
};

export default ChangeQuantity;
