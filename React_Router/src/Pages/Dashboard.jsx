import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> <br />
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
