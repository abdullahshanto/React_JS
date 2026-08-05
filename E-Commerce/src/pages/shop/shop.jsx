import { useState } from "react";
import { dummyData } from "../../dummydata";
import { category } from "../../catagory";
import Product from "../../components/product/product";
import "./shop.css";

function Shop() {
  const [products, setProducts] = useState(dummyData);
  const [activeCategory, setActiveCategory] = useState("All Products");

  function filterProducts(categoryName) {
    setActiveCategory(categoryName);
    if (categoryName === "All Products") {
      setProducts(dummyData);
    } else {
      setProducts(dummyData.filter((item) => item.category === categoryName));
    }
  }

  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>Shop</h1>
        <p className="shop-subtitle">Discover our curated collection</p>
      </div>

      <div className="category-filters">
        <button
          className={activeCategory === "All Products" ? "filter-btn active" : "filter-btn"}
          onClick={() => filterProducts("All Products")}
        >
          All Products
        </button>
        {category.map((cat) => (
          <button
            key={cat.id}
            className={activeCategory === cat.name ? "filter-btn active" : "filter-btn"}
            onClick={() => filterProducts(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
          <div className="no-products">
            <p>No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
