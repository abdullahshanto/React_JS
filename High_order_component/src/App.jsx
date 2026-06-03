// import withAuth from "./HOC/withAuth";
// import Dashboard from "./dashboard";
import withLoading from "./HOC/withLoading";
import Products from "./components/Products";

const ProductWithLoading = withLoading(Products);

//const DashboardWithAuth = withAuth(Dashboard);

function App(){
  // return <DashboardWithAuth />
  return <ProductWithLoading loading={true} />

}
export default App;