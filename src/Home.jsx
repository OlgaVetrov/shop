import Navbar from "./Components/Navbar";
import AllCategories from "./Components/Filter/AllCategories";
import Filter from "./Components/Filter/Filter";
import Clothes from "./Components/ShopComponents/Clothes";
import Cart from "./Components/Cart/Cart";

const Home = () => {
  return (
    <div className="shop-layout">
      <div className="shop-column">
        <Navbar />

        <main className="shop-content">
          <div className="filter-section">
            <div className="cont">
              <h2 className="back">Free Standart Shipping</h2>
            </div>

            <AllCategories />

            <Filter />
          </div>

          <Clothes />
        </main>
      </div>

      <aside className="cart-sidebar">
        <Cart />
      </aside>
    </div>
  );
};

export default Home;
