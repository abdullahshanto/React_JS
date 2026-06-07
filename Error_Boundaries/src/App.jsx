import Userdata from "./componenets/userData.jsx";

function App() {
  const user = {
    name: "shanto",
    age: 23,
  };
  const user2 = null;

  return (
    <>
      <Userdata user={user} />
       <Userdata user={user2} />
    </>
  );
}

export default App;