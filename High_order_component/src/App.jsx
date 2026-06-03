import withAuth from "./HOC/withAuth";
import Dashboard from "./dashboard";

const DashboardWithAuth = withAuth(Dashboard);

function App(){
  return <DashboardWithAuth />
}
export default App;