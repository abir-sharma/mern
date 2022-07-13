import React, { useEffect,useState } from 'react'
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./homepage.css";
import {getPosts} from "../../actions/postActions"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate'



const Homepage = () => {
  const {search}=useLocation()
  const dispatch=useDispatch()
  const {posts}=useSelector(state=>state.store)

  useEffect(()=>{
    dispatch(getPosts(search))
  },[search])
  function handlePageClick(data){
      dispatch(getPosts(`?page=${data.selected+1}`))
  }
  return (
    <>
    <Header />
      <div className="home">
        {/* {posts.posts.length!=0?<Posts posts={posts.posts}/>:<h1>No Posts to show</h1> } */}
        <Posts posts={posts.posts} />
       </div>
    <ReactPaginate 
    previousLabel={'Previous'}
    nextLabel={'Next'}
    breakLabel={'....'}
    pageCount={25}
    marginPagesDisplayed={3}
    pageRangeDisplayed={6}
    onPageChange={handlePageClick}
    containerClassName={'pagination'}
    pageClassName={'page-item'}
    pageLinkClassName={'page-link'}
    previousClassName={'page-item'}
    previousLinkClassName={'page-link'}
    nextClassName={'page-item'}
    nextLinkClassName={'page-link'}
    breakClassName={'page-item'}
    breakLinkClassName={'page-link'}
    activeClassName={'active'}
    />
    </>
  )
}

export default Homepage