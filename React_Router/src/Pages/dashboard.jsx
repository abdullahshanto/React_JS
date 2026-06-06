import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard using Nested Routes</h1>

      <Link to="profile">Profile</Link>
      <br />

      <Link to="settings">Settings</Link>
      <br />

      <hr />

     
      <Outlet />
    </>
  );
}

export default Dashboard;