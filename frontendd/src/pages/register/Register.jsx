import React, { useState,useEffect } from 'react'
import Modal from '../../components/modal/Modal'
import './register.css'
import { useDispatch,useSelector } from 'react-redux'
import { register,clearErrors, getUserDetails } from '../../actions/userActions'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const { error, loading, isAuthenticated,user } = useSelector(
    (state) => state.store.user
  );
  const [formData,setFormData]=useState({username:"",email:"",password:""})
  const handleSubmit=async(event)=>{
    event.preventDefault()
    dispatch(register(formData))
  }
  function handleChange(event){
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      toast.success("Registered successfully !!!")
      dispatch(getUserDetails())
      navigate("/login")
    }
  }, [dispatch, error, isAuthenticated,user]);
  return (
    <>
    {/* {modalOpen && <Modal setOpenModal={setOpenModal} registerInfo={userReducer.registerInfo.success?<h3>User Registered succesfully</h3>:userReducer.registerInfo.message} message="Registered successfully !!!"/>} */}
    <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerForm">
      <label>Username</label>
      <input className="registerInput"
       type="text"
       placeholder="Enter your username..."
       name="username"
      //  value={formData.username}
       onChange={handleChange}
      />
      <label>Email</label>
      <input className="registerInput" type="text" placeholder="Enter your email..." name="email"
      //  value={formData.email}
       onChange={handleChange}/>
      <label>Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..." name="password"
      //  value={formData.password}
       onChange={handleChange}/>
      <button className="registerButton" onClick={handleSubmit}>Register</button>
    </form>
      {/* <button className="registerLoginButton">Login</button> */}
      {/* {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>} */}
      <ToastContainer position='bottom-right' />
  </div>
  </>
  )
}

export default Register