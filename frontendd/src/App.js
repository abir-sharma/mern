import { Routes,Route } from 'react-router-dom';
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useDispatch,useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './app.css'
import Cookies from 'js-cookie';


function App() {
  const {isAuthenticated}=useSelector(state=>state.store.user)
  return (
    <>
    <Topbar />

    <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={isAuthenticated? <Homepage /> : <Register />} />
        <Route path="/login" element={isAuthenticated? <Login /> : <Login />}/>
        <Route path="/post/:id" element={<Single />}/>
        <Route path="/write" element={isAuthenticated ? <Write /> : <Login />} />
        <Route path="/settings" element={isAuthenticated? <Settings /> : <Register />} />
    </Routes>
    </>
  )
}

export default App
