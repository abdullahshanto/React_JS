import ChildA from "./component/childA";

function Parent(){
    let name="parent";
    return (
      <>
       <ChildA Pname={name}/>
      </>
    )
  }

function App() {

  return(
    <Parent />
  );
}

export default App