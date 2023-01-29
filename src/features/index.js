import { combineReducers } from "redux";
import { PaidTotalReducer, themeReducer, userReducer } from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  total:PaidTotalReducer,
  theme:themeReducer
});

export default rootReducer;