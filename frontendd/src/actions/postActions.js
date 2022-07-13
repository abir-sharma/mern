import * as api from '../api/index'

export const getPosts=(search)=>async(dispatch)=>{
    try {
        const {data}=await api.fetchPosts(search)
        dispatch({
            type:"getposts",
            payload:data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const getPostDetails=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.getPostsDetails(id)
        dispatch({
            type:"getPostDetails",
            payload:data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost=(id,damta)=>async(dispatch)=>{
    try {
        dispatch({ type: "UPDATE_POST_REQUEST" });
    
        // const config = { headers: { "Content-Type": "multipart/form-data" } };
    
        const { data } = await api.editPosts(id,damta);
    
        dispatch({ type: "UPDATE_POST_SUCCESS", payload: data.success });
      } catch (error) {
        dispatch({
          type: "UPDATE_POST_FAIL",
          payload: error.response.data.message,
        });
      }
}

export const deletePost=(id)=>async(dispatch)=>{
    try {
        dispatch({ type: "DELETE_POST_REQUEST" });
    
        // const config = { headers: { "Content-Type": "multipart/form-data" } };
    
        const { data } = await api.deletePost(id);
    
        dispatch({ type: "DELETE_POST_SUCCESS", payload: data.success });
      } catch (error) {
        dispatch({
          type: "DELETE_POST_FAIL",
          payload: error.response.data.message,
        });
      }
}
export const writePost=(damta)=>async(dispatch)=>{
    try {
        dispatch({ type: "WRITE_POST_REQUEST" });
    
        // const config = { headers: { "Content-Type": "multipart/form-data" } };
    
        const { data } = await api.createPosts(damta);
        
        dispatch({ type: "WRITE_POST_SUCCESS", payload: data.success });
      } catch (error) {
        dispatch({
          type: "WRITE_POST_FAIL",
          payload: error.response.data.message,
        });
      }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" });
  };