import axios from 'axios'

export const createPosts=(data)=>axios.post("https://blog-api-96d1.onrender.com/api/v1/api/v1/post/new",data)
export const fetchPosts=(search)=>axios.get(`https://blog-api-96d1.onrender.com/api/v1/posts${search}`)
export const deletePost=(id)=>axios.delete(`https://blog-api-96d1.onrender.com/api/v1/post/${id}`)
export const editPosts=(id,data)=>axios.put(`https://blog-api-96d1.onrender.com/api/v1/post/${id}`,data)
export const getPostsDetails=(id)=>axios.get(`https://blog-api-96d1.onrender.com/api/v1/post/${id}`)

export const register=(data)=>axios.post("https://blog-api-96d1.onrender.com/api/v1/register",data)
export const loginApi=(data)=>axios.post("https://blog-api-96d1.onrender.com/api/v1/login",data)
export const logout=()=>axios.get("https://blog-api-96d1.onrender.com/api/v1/logout")
export const editUser=(data)=>axios.put("https://blog-api-96d1.onrender.com/api/v1/me",data)
export const deleteUser=()=>axios.delete(`https://blog-api-96d1.onrender.com/api/v1/me`)
export const updatePassword=(data)=>axios.put("https://blog-api-96d1.onrender.com/api/v1/password/reset",data)
export const userDetails=()=>axios.get("https://blog-api-96d1.onrender.com/api/v1/me")