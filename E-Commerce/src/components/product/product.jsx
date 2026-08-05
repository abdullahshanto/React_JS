import { FaPlus } from "react-icons/fa";
import "./product.css";
import { useCart } from "../../context/cartcontext";

function Product({ id, name, image, price }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product">
        <img src={image} alt={name} />
        <div className="product-details">
          <h3 className='product-name'>{name}</h3>
          <span className='product-price'>${price}</span>
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart({ id, name, image, price })}
        >
          <FaPlus /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
