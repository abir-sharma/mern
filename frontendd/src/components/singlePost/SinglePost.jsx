import React, { useState, useEffect,useRef } from 'react'
import { Link } from "react-router-dom";
import "./singlePost.css";
import * as api from '../../api/index'
import Modal from '../modal/Modal';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react'
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { updatePost,clearErrors, deletePost } from '../../actions/postActions';


const SinglePost = ({post}) => {
  const dispatch=useDispatch()
  const editorRef=useRef()
  const [modalOpen, setModalOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(true)
  const [message, setMessage] = useState("")
  const [updated, setUpdated] = useState(false)
  const [title, setTitle] = useState("")
  const {user}=useSelector(state=>state.store.userDetails)
  const {  loading, isAuthenticated } = useSelector(
    (state) => state.store.user
  );
  const {error,isPostUpdated,isPostDeleted}=useSelector(state=>state.store.posts)
  const handleDelete = async (command) => {
    if (command === "YES") {
      console.log("kfo")
      dispatch(deletePost(post._id))
    }
    setModalOpen(true)
    setMessage("Sure want to delete post ?")
  }
  useEffect(() => {
    setTitle(post.title)
  }, [post])

  const updatePostIcon = async (e) => {
    e.preventDefault()
    setUpdated(true)
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    dispatch(updatePost(post._id,{
       "title": title,
       "desc": editorRef.current.getContent(),
       "photo": post.photo,
       "username": post.username,
       "categories": post.categories
    }))
  }
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors());
    }

    if (isPostUpdated) {
      toast.success("Post updated successfully !!!")
    }
    if (isPostDeleted) {
      toast.success("Post deleted successfully !!!")
    }
  }, [dispatch, error, isPostUpdated,isPostDeleted]);
  const body = post.desc
  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src={Object.keys(post).length === 0 ? "" : post.photo}
            // src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <h1 className="singlePostTitle">
            {updated ? <input type="text" className="singlePostTitle" value={title} onChange={(e) => setTitle(e.target.value)} /> : (<h1 className="singlePostTitle">
              {Object.keys(post).length === 0 ? "" : post.title}</h1>)}
            <div className="singlePostEdit">
              {isAuthenticated && post.username===user.username && <i className="singlePostIcon far fa-edit" onClick={updatePostIcon}></i> }
              {isAuthenticated && post.username===user.username && <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i> }

            </div>
          </h1>




          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <Link className="link" to={`/posts?username=${post.username}`}>
                  {post.username}
                </Link>
              </b>
            </span><br />
            <span className="Date">{Object.keys(post).length === 0 ? "" : new Date(post.createdAt).toDateString()}</span>
          </div>
          {updated ? <Editor 
          onInit={(evt,editor)=>editorRef.current=editor}
          initialValue={body}
          init={{
            menubar:false,
          }}
          />:< div dangerouslySetInnerHTML={{ __html: body }} />}
          
        </div>
        {isAuthenticated && post.username===user.username && <button className="update" onClick={handleUpdate}>Update</button>}
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} isDeleted={isDeleted} message={message} handleDelete={handleDelete} />}
      <ToastContainer position='bottom-right' />
    </>
  )
}

export default SinglePost