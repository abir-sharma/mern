import { createReducer } from "@reduxjs/toolkit";


export const postsReducer=createReducer({posts:[],post:{}},{
    getposts:(state,action)=>{
        state.posts=action.payload.posts
    },
    getPostDetails:(state,action)=>{
        state.post=action.payload.post
    },
    WRITE_POST_REQUEST:(state,action)=>{
        state.loading=true   
    },
    WRITE_POST_SUCCESS:(state,action)=>{
        state.loading=false
        state.isWritten=action.payload
    },
    WRITE_POST_FAIL:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    UPDATE_POST_REQUEST:(state,action)=>{
        state.loading=true
    },
    DELETE_POST_REQUEST:(state,action)=>{
        state.loading=true
    },
    UPDATE_POST_SUCCESS:(state,action)=>{
        state.loading=false
        state.isPostUpdated=action.payload
    },
    DELETE_USER_SUCCESS:(state,action)=>{
        state.loading=false
        state.isPostDeleted=true
     },
    UPDATE_POST_FAIL:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    DELETE_USER_FAIL:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },
    CLEAR_ERRORS:(state,action)=>{
        state.error=null
    }
})


