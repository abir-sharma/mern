import React from 'react'
import { Link } from "react-router-dom";
import './post.css'

const Post = ({post}) => {
  const body=post.desc
  return (
    <div className="post">
          {post.id}

      <img
        className="postImg"
        src={post.photo}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to={`/posts?cat=${post.categories[0]}`}>
              {post.categories[0]}
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to={`/posts?cat=${post.categories[1]}`}>
              {post.categories[1]}
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        <div dangerouslySetInnerHTML={{__html:body}} ></div>
      </p>
    </div>
  )
}

export default Post