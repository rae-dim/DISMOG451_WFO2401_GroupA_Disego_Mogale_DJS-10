import React, { useEffect, useState } from "react"



export default function App() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
          throw new Error("Error")
        }
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData()
  }, [])

  if (error) {
    return <div className="error-message">Error</div>
  }
 
  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <ol>
        {posts.map((post, index) => (
          <li key={post.id} className="post">
            <h2 className="post-title">{`${index + 1}. ${post.title}`}</h2>
            <p className="post-body">{post.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}


