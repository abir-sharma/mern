import { userReducer,userDetailsReducer,profileReducer } from "./user";
import { postsReducer} from "./posts";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    posts:postsReducer,
    user:userReducer,
    userDetails:userDetailsReducer,
    userProfile:profileReducer
})
    
export default rootReducer;