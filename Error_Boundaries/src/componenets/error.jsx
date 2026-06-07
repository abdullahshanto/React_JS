import { Component } from "react";

class ErrorBoundary extends Component{
  constructor(props){
    super(props);
    this.state = {haserror: false ,error: null ,errorinfo:null}
  }

  static getDerivedStateFromError(error){
    return {haserror:true , error: error}
  }

  render()
  {
    if(this.state.haserror){
      return <h2>Something went wrong</h2>
    }
    return this.props.children;
  }
}
export default ErrorBoundary