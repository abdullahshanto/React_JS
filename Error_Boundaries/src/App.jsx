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
   
   

       <ErrorBoundary fallback={ <p>
        error in user 1 profile
       </p>}> 
        <Userdata user={user} />
        </ErrorBoundary>
       <ErrorBoundary fallback={ <p>
        error in user 1 profile
       </p>}> 
        <Userdata user={user2} />
        </ErrorBoundary>
    </>
  );
}

export default App;