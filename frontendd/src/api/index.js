import axios from 'axios'

export const createPosts=(data)=>axios.post("/post/new",data)
export const fetchPosts=(search)=>axios.get(`/posts${search}`)
export const deletePost=(id)=>axios.delete(`/post/${id}`)
export const editPosts=(id,data)=>axios.put(`/post/${id}`,data)
export const getPostsDetails=(id)=>axios.get(`/post/${id}`)

export const register=(data)=>axios.post("/register",data)
export const loginApi=(data)=>axios.post("/login",data)
export const logout=()=>axios.get("/logout")
export const editUser=(data)=>axios.put("/me",data)
export const deleteUser=()=>axios.delete(`/me`)
export const updatePassword=(data)=>axios.put("/password/reset",data)
export const userDetails=()=>axios.get("/me")