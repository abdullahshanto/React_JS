
import { Routes, Route, Link } from "react-router-dom";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { User } from "./Pages/User";

import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link> <br />
        <Link to="/contact">Contact</Link> <br />
        <Link to="/user/1">User 1</Link> <br />
        <Link to="/user/2">User 2</Link> <br />
        <Link to="/dashboard">Dashboard</Link> <br />
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/user/:id" element={<User />} />

        {/* Nested Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
