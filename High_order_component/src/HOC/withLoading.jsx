function withLoading(component){
  return function withLoadingComponent({loading , ...props}){
    if(loading){
      return <h1>Loading</h1>
    }
    return <component {...props} />
  }
}
export default withLoading