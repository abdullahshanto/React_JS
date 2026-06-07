import ErrorBoundary from "./componenets/error.jsx";
import Userdata from "./componenets/userData.jsx";

function App() {
  const user = {
    name: "shanto",
    age: 23,
  };
  const user2 = null;

  return (
    <>
   
   

       <ErrorBoundary> <Userdata user={user} /></ErrorBoundary>
       <ErrorBoundary> <Userdata user={user2} /></ErrorBoundary>
    </>
  );
}

export default App;