import React from 'react'
import Post from "../post/Post";
import "./posts.css";



const Posts = ({posts}) => {
  return (
    <div className="posts">
      {posts?posts.map(post=>(<Post post={post}/>)):<h1>NO POSTS</h1>}
    </div>
  )
}

export default Posts