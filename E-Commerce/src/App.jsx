
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./pages/home/home";
import Product from "./components/product/product";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
