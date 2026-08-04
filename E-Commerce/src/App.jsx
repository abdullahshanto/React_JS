
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
