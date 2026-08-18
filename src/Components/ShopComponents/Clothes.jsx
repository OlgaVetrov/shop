import { useSelector } from "react-redux";
import Cloth from "./Cloth";

function Clothes() {
  const clothes = useSelector((state) => state.clothes.clothes);

  return (
    <div className="products">
      {clothes.map((product) => (<Cloth key={product.id} product={product} />))}
    </div>
  );
}

export default Clothes;
