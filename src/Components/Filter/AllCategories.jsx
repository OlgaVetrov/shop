import { useDispatch, useSelector } from "react-redux";
import { filterClothes } from "../../redux/clothesSlice";

const AllCategories = () => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.clothes.selectedCategory);

  return (
    <div className="category-container">
      <button
        className={selectedCategory === "all" ? "category-button active" : "category-button"}
        onClick={() => {dispatch(filterClothes("all"))}}
      > All Categories </button>
    </div>
  );
};

export default AllCategories;
