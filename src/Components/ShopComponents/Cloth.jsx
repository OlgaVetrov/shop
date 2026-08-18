import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Cloth = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, image } = product;
  return (
    <div className="product-card">
      <img className="product-image"
        src={image}
        width="400px"
        height="500px"
        alt={name}
      />

      <div className="product-info">
        <h3>{name}</h3>

        <h4>${price}</h4>

        <button className="change"
          onClick={() => {dispatch(addToCart(product))}}
           > Add to Cart </button>
      </div>
    </div>
  );
};

export default Cloth;
