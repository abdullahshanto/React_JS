import ChildB from "./childB";

function ChildA(props){
  return <ChildB name={props.Pname} />
}

export default ChildA;