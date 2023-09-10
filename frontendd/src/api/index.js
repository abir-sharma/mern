import axios from 'axios'

export const createPosts=(data)=>axios.post("https://blog-api-96d1.onrender.com/post/new",data)
export const fetchPosts=(search)=>axios.get(`https://blog-api-96d1.onrender.com/posts${search}`)
export const deletePost=(id)=>axios.delete(`https://blog-api-96d1.onrender.com/post/${id}`)
export const editPosts=(id,data)=>axios.put(`https://blog-api-96d1.onrender.com/post/${id}`,data)
export const getPostsDetails=(id)=>axios.get(`https://blog-api-96d1.onrender.com/post/${id}`)

export const register=(data)=>axios.post("https://blog-api-96d1.onrender.com/register",data)
export const loginApi=(data)=>axios.post("https://blog-api-96d1.onrender.com/login",data)
export const logout=()=>axios.get("https://blog-api-96d1.onrender.com/logout")
export const editUser=(data)=>axios.put("https://blog-api-96d1.onrender.com/me",data)
export const deleteUser=()=>axios.delete(`https://blog-api-96d1.onrender.com/me`)
export const updatePassword=(data)=>axios.put("https://blog-api-96d1.onrender.com/password/reset",data)
export const userDetails=()=>axios.get("https://blog-api-96d1.onrender.com/me")