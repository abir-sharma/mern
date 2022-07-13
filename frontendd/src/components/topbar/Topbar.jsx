import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./topbar.css";
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import Sidebar from '../sidebar/Sidebar';

const Topbar = () => {
  const [searchI,setSearchI]=useState("")
  const {isAuthenticated,user}=useSelector(state=>state.store.user)
  const {userDetails}=useSelector(state=>state.store)
  const dispatch=useDispatch()
  function handleLogout (){
    dispatch(logout())
    toast("Logged out Successfully")
   }
  return (
    <>
    <div className="top">
      <div className="topLeft">
        {/* <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i> */}
        <input type="text" className='searchBox' placeholder='Search topic....' onChange={(e)=>setSearchI(e.target.value)} />
        <Link className="linkd" to={`/posts?keyword=${searchI}`}>
        <i className="topSearchIcon fas fa-search"></i>
            </Link>
      </div>
      <div className="topCenter">
        {/* <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
         
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <Link className="link" to="/login">
          {isAuthenticated && <li className="topListItem" onClick={handleLogout} >LOGOUT</li>}
            </Link>
        </ul> */}
      </div>
      <div className="topRight">
      <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
         
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {isAuthenticated && <li className="topListItem" onClick={handleLogout} >LOGOUT</li>}
        </ul>
        {isAuthenticated ? (
          <Link className="linkk" to="/settings">
            {/* <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            /> */}
            Hi,<h3>{userDetails.user.username}</h3>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
    <ToastContainer position='bottom-right' />
    <div className="cate">
            <li className="topListItem">
              <Link className="link" to="/register">
                Django
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/posts?categories=omfo">
                React js
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Next js
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Blockchain
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Machine learning
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                React Native
              </Link>
            </li>
    </div>
    </>
  )
}

export default Topbar