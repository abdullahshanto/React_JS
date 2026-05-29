import { useState } from "react"
import ChildA from "./component/childA";
import ChildB from "./component/childB";

function Parent(){
  const [count,setCount]=useState(0);
  return(
   <>
     <ChildA setCount={setCount} />
    < ChildB count={count} />
   </>

  )
}
function App(){
  return(
      <Parent />
  )
}

export default App;