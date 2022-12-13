import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./PostsSlice";
import userReducer from "./UserSlice";


const reducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
});

const store = configureStore({reducer}); 


export default store; 