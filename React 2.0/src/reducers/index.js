import blogReducer from "./blogReducer"
import { combineReducers } from "redux";

export const mainReducer=combineReducers({
    blog:blogReducer
})