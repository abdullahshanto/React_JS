import { useState } from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cartcontext";
import emptyCartImg from "../../assets/emptycart.png";
import "./cart.css";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    clearCart();
    navigate("/contact");
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <img src={emptyCartImg} alt="Empty Cart" />
        <h2>Your cart is empty</h2>
        <p>Add items to your cart to get started</p>
        <Link to="/shop" className="btn-shop">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <span className="item-price">${item.price}</span>
            </div>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                <FaMinus />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                <FaPlus />
              </button>
            </div>
            <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          <span>Items ({getTotalItems()}):</span>
          <span>${getTotalPrice().toFixed(2)}</span>
        </div>
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
        <div className="cart-actions">
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
          <button 
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={isCheckingOut}
          >
            {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
          </button>
        </div>
        <Link to="/shop" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default Cart;
