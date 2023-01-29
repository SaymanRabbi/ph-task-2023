import Cookies from "js-cookie";

export function userReducer(state = Cookies.get("user")?JSON.parse(Cookies.get("user")):null, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
      case "LOGOUT":
        return null;
    default:
      return state;
  }
}

export function PaidTotalReducer (state = 0, action) {
  switch (action.type) {
    case "TOTAL":
      return {...state,total:action.payload};
    default:
      return state;
  }
}