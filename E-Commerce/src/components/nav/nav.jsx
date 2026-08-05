import { FaShopify, FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
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
          <a className="nav-link" href="#categories">
            Categories
          </a>
          <div className="cart-box">
            <FaShoppingCart />
            <span>0</span>
          </div>
        </div>
      </div>

        <nav className="bottom-nav" aria-label="Secondary navigation">
          <a href="#fashion">Home</a>
          <a href="#deals">Shop</a>
          <a href="#home">Cart</a>
          <a href="#new">Contact</a>
        </nav>
    </header>
  );
}

export default Nav;