import React from 'react'
import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState,useEffect } from 'react';
import { updateProfile, updatePassword,clearErrors,deleteUser } from '../../actions/userActions';
import { useDispatch,useSelector } from 'react-redux'
import { ToastContainer,toast } from 'react-toastify';
import Modal from '../../components/modal/Modal';


const Settings = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mess, setMessage] = useState("")
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [Oldpassword,setOldPassword]=useState("")
  const [Newpassword,setNewPassword]=useState("")
  const [ConfirmNewpassword,setConfirmNewPassword]=useState("")
  const dispatch=useDispatch()
  const {user}=useSelector(state=>state.store.userDetails)
  const {error,isProfileUpdated,isPasswordUpdated,message,isDeleted}=useSelector(state=>state.store.userProfile)
  const handleDelete = async (command) => {
    if (command === "YES") {
      console.log("kfo")
      dispatch(deleteUser())
    }
    setModalOpen(true)
    setMessage("Sure want to delete account ?")
  }
  useEffect(() => {
    setUsername(user.username)
    setEmail(user.email)
  }, [user])
  const handleUpdate=async(e)=>{
    e.preventDefault()
    dispatch(updateProfile({username,email}))
  }
  function handleResetPassword (e) {
    e.preventDefault()
    dispatch(updatePassword({"oldPassword":Oldpassword,"newPassword":Newpassword,"confirmPassword":ConfirmNewpassword}))
  }
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearErrors());
    }

    if (isProfileUpdated && !isDeleted && !isPasswordUpdated) {
      toast.success("Profile updated successfully !!!")
    }
    if (isPasswordUpdated && !isDeleted && !isProfileUpdated) {
      toast.success("Password updated successfully")
    }
    if (isDeleted && !isPasswordUpdated && !isProfileUpdated){
      toast.success(message)
    }
  }, [dispatch,error,isProfileUpdated,isPasswordUpdated,isDeleted]);
  return (
    <>
    {modalOpen && <Modal setOpenModal={setModalOpen} message={mess} handleDelete={handleDelete} />}
    <div className="settings">
    <div className="settingsWrapper">
      <div className="settingsTitle">
        <span className="settingsTitleUpdate">{user.username}, Update Your Account</span>
        <button className="settingsTitleDelete" onClick={handleDelete} >Delete Account</button>
      </div>
      <form className="settingsForm">
        {/* <label>Profile Picture</label> */}
        <div className="settingsPP">
          {/* <img
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          /> */}
          <h3>Welcome back, {user.username}</h3>
          {/* <label htmlFor="fileInput">
            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
          </label> */}
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            className="settingsPPInput"
          />
        </div>
        <label>Username</label>
        <input type="text"  name="username" value={username} onChange={(event)=>setUsername(event.target.value)} />
        <label>Email</label>
        <input type="email"  name="email" value={email} onChange={(event)=>setEmail(event.target.value)} />
        <button className="settingsSubmitButton" type="submit" onClick={handleUpdate} >
          Update Profile
        </button>
        <label>Old Password</label>
        <input type="password" placeholder="Password" name="Oldpassword"  onChange={(event)=>setOldPassword(event.target.value)} />
        <label>New Password</label>
        <input type="password" placeholder="Password" name="Newpassword"  onChange={(event)=>setNewPassword(event.target.value)} />
        <label>Confirm New Password</label>
        <input type="password" placeholder="Password" name="ConfirmNewpassword"  onChange={(event)=>setConfirmNewPassword(event.target.value)} />
        <button className="settingsSubmitButton" type="submit" onClick={handleResetPassword} >
          Change Password
        </button>
      </form>
    </div>
    <ToastContainer position='bottom-right' />
  </div>
  </>
  )
}

export default Settings