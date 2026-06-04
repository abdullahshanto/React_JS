import { lazy, Suspense } from "react";

const Post = lazy(() =>
  import("./Components/All_posts").then((module) => ({ default: module.Post }))
);

function App(){
  return(
    <Suspense fallback={<p>Loading posts...</p>}>
      <Post />
    </Suspense>
  )
}

export default App