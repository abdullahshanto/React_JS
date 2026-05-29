function ChildA(props){
    function click(){
      props.setCount((prev) => prev + 1);
    }
    return(
      <button onClick={click}>Click me,i am changing it into ChildB</button>
    )
}
export default ChildA;