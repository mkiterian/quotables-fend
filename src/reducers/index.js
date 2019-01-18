import { combineReducers } from "redux";
import authReducer from "./authReducer";
import quotesReducer from "./quotesReducer";


const reducers = combineReducers({
  auth: authReducer,
  quotes: quotesReducer,
});

export default reducers;