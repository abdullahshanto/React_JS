import { useState, useEffect } from "react";

export function Post(){
  const [posts,setPost] = useState([]);
  useEffect(() =>{
    async function fetchposts() {
      const getpost = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await getpost.json();
      setPost(data);
    }
    fetchposts();
  },[]);
    
  return(

    <>
        <h1>Posts</h1>
        <ul>
          
                {posts.map((post) => (
                  <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                  </li>
                ))}

        </ul>
    
    </>
  )


}
