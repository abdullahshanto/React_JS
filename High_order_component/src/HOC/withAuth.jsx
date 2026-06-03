function withAuth(Component){
  return function(props){
  const isloggedin = false;
  if(isloggedin){
    return <h1>Login First</h1>
  }
  return < Component {...props} />
  }
}

export default withAuth