import { createStore } from "redux";
import postReducer from "./reducers/post";


export const store = createStore(postReducer);