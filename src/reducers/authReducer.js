import * as constants from "../constants";

const initialState = {
  isAuthenticated: localStorage.getItem("access_token") ? true : false,
  user: {},
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.REGISTER_REQUEST:
    case constants.LOGIN_REQUEST:
    case constants.LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case constants.REGISTER_SUCCESS:
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.payload
      };
    case constants.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case constants.REGISTER_FAILURE:
    case constants.LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isFetching: false,
        error: action.payload
      };
    case constants.LOGOUT_FAILURE:
      return {
        ...state,
        isAuthenticated: true,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
}
