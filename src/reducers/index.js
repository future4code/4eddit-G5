import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import posts from "./posts";
import snackbar from "./snackbar";


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    posts,
    snackbar,
    // Outros reducers aqui
  });
