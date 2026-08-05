import { FaShopify, FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <header className="nav">
      <div className="top-nav">
        <div className="logo">
          <div className="logo-icon">
            <FaShopify />
          </div>
          <div>
            <span className="brand-name">V-Shop</span>
            <small>Modern essentials</small>
          </div>
        </div>

        <form className="search-box" role="search">
          <IoSearch />
          <input type="text" placeholder="Search products..." />
        </form>

        <div className="nav-actions">
          <Link to="/shop" className="nav-link">
            Categories
          </Link>
          <div className="cart-box">
            <FaShoppingCart />
            <span>0</span>
          </div>
        </div>
      </div>

        <nav className="bottom-nav" aria-label="Secondary navigation">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
        </nav>
    </header>
  );
}

export default Nav;