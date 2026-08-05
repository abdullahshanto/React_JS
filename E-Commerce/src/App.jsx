
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import Contact from "./pages/contact/contact";
import Product from "./components/product/product";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Nav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
