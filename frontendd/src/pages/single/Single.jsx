import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getPostDetails } from '../../actions/postActions';
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";


const Single = () => {
  const {id}=useParams()
  const dispatch=useDispatch()
  const {post}=useSelector(state=>state.store.posts)
  useEffect(() => {
    dispatch(getPostDetails(id))
  }, [id])
  return (
    <div className="single">
      {post && <SinglePost post={post} />}
    </div>
  )
}

export default Single