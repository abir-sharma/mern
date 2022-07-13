import React, { useState,useEffect, useContext } from 'react'
import './login.css'
import { useDispatch,useSelector } from 'react-redux'
import { login,clearErrors,getUserDetails } from '../../actions/userActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/loader/Loader';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const { error,isAuthenticated }=useSelector(state=>state.store.user)
  const [loginData,setLoginData]=useState({username:"",password:""})


  
  function handleChange(event){
    setLoginData({...loginData,[event.target.name]:event.target.value})
  }

  const handleSubmit=async(event)=>{
    event.preventDefault()
    dispatch(login(loginData))
  }

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      toast.success("Logged In successfully !!!")
      dispatch(getUserDetails())
      navigate("/settings")
    }
  }, [dispatch, error, isAuthenticated]);
  return (
    <>
    <div className="login">
      <span className="loginTitle">Login</span>
      {/* {loading && <Loader />} */}
      <form className="loginForm">
        <label>Username</label>
        <input className="loginInput" type="text" onChange={handleChange} placeholder="Enter your username..." name="username"  />
        <label>Password</label>
        <input className="loginInput" type="password" onChange={handleChange} placeholder="Enter your password..." name="password"   />
        <button className="loginButton" onClick={handleSubmit}>Login</button>
      </form>
        {/* <button className="loginRegisterButton">Register</button> */}
    </div>
    <ToastContainer position='bottom-right' />
    </>
  )
}

export default Login