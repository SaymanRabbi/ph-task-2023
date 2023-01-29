import { combineReducers } from "redux";
import { PaidTotalReducer, userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  total:PaidTotalReducer
});

export default rootReducer;