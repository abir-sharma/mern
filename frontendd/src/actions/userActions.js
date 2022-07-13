import * as api from "../api/index"

export const register = (userData) => async (dispatch) => {
    try {
      dispatch({ type: "REGISTER_USER_REQUEST" });
  
    //   const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await api.register(userData);
  
      dispatch({ type: "REGISTER_USER_SUCCESS", payload: data.user });
    } catch (error) {
      dispatch({
        type: "REGISTER_USER_FAIL",
        payload: error.response.data.message,
      });
    }
  };

  export const getUserDetails = () => async (dispatch) => {
    try {
      dispatch({ type: "USER_DETAILS_REQUEST" });
      const { data } = await api.userDetails();
  
      dispatch({ type: "USER_DETAILS_SUCCESS", payload: data.user });
    } catch (error) {
      dispatch({ type: "USER_DETAILS_FAIL", payload: error.response.data.message });
    }
  };

  export const login = (loginData) => async (dispatch) => {
    try {
      dispatch({ type: "LOGIN_REQUEST" });
  
    //   const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } =await api.loginApi(loginData);
      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL", payload: error.response.data.message });
    }
  };

  export const logout = () => async (dispatch) => {
    try {
      api.logout();
  
      dispatch({ type: "LOGOUT_SUCCESS" });
    } catch (error) {
      dispatch({ type: "LOGOUT_FAIL", payload: error.response.data.message });
    }
  };

  export const updateProfile = (userData) => async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_PROFILE_REQUEST" });
  
      // const config = { headers: { "Content-Type": "multipart/form-data" } };
  
      const { data } = await api.editUser(userData);
  
      dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: data.success });
    } catch (error) {
      dispatch({
        type: "UPDATE_PROFILE_FAIL",
        payload: error.response.data.message,
      });
    }
  };
  
  // Update Password
  export const updatePassword = (passwords) => async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_PASSWORD_REQUEST" });
  
      // const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await api.updatePassword(passwords)
  
      dispatch({ type: "UPDATE_PASSWORD_SUCCESS", payload: data.success });
    } catch (error) {
      dispatch({
        type: "UPDATE_PASSWORD_FAIL",
        payload: error.response.data.message,
      });
    }
  };
  export const deleteUser = (id) => async (dispatch) => {
    try {
      dispatch({ type: "DELETE_USER_REQUEST" });
  
      const { data } = await api.deleteUser();
  
      dispatch({ type: "DELETE_USER_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "DELETE_USER_FAIL",
        payload: error.response.data.message,
      });
    }
  };

// export const register=(formData)=>async(dispatch)=>{
//     console.log(formData,"bawal")
//     dispatch({type:"registrationStart"})
//     try {
//         const {data}=await api.register(formData)
//         dispatch({
//             type:"registration",
//             payload:data
//         })
//         console.log(data)
//     } catch (error) {
//         dispatch({
//             type:"registration",
//             payload:error.response.data
//         })
//     }
// }

// export const login=(formData)=>async(dispatch)=>{
//     try {
//         const {data}=await api.login(formData)
//         dispatch({
//             type:"loginInfo",
//             payload:data
//         })
//     } catch (error) {
//         dispatch({
//             type:"error",
//             payload:error.response.data
//         })
//     }
// }

// export const logout=()=>async(dispatch)=>{
//     try {
//         const { data }=await api.logout()
//         dispatch({
//             type:"logout",
//             payload:data
//         })
//     } catch (error) {
//         dispatch({
//             type:"errors",
//             payload:error.response.data
//         })
//     }
// }

// export const Details=()=>async(dispatch)=>{
//     try {
//         const {data}=await api.userDetails()
//         dispatch({
//             type:"userDetails",
//             payload:data
//         })
//     } catch (error) {
//         dispatch({
//             type:"errors",
//             payload:error.response.data
//         })
//     }
// }

// export const editUser=(id,formData)=>async(dispatch)=>{
//     try {
//         const {data}=await api.editUser(id,formData)
//         dispatch({
//             type:"editUser",
//             payload:data
//         })
//     } catch (error) {
//         dispatch({
//             type:"errors",
//             payload:error.response.data
//         })
//     }
// }

// export const deleteUser=()=>async(dispatch)=>{
//     try {
//         const {data}=await api.deleteUser()
//         dispatch({
//             type:"deleteUser",
//             payload:data
//         })
//     } catch (error) {
//         dispatch({
//             type:"deleteUser",
//             payload:error.response.data
//         })
//     }
// }

// export const resetPassword=(data)=>async(dispatch)=>{
//     try {
//         const {damta}=await api.updatePassword(data)
//         dispatch({
//             type:"resetInfo",
//             payload:damta
//         })
//     } catch (error) {
//         dispatch({
//             type:"resetInfo",
//             payload:error.response
//         })

//     }
// }

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" });
  };