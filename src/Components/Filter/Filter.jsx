import { useDispatch, useSelector } from "react-redux";
import { filterClothes } from "../../redux/clothesSlice";
import { categories } from "./AllCategories";

const Filter = () => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector(
    (state) => state.clothes.selectedCategory,
  );

  return (
    <div className="filter-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className={selectedCategory === category ? "category-button active"  : "category-button"}
            onClick={() => {dispatch(filterClothes(category))}}
          > {category}  </button>
        )})}
    </div>
  );
};

export default Filter;
