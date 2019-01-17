import * as constants from "../constants";

const initialState = {
  isAuthenticated: false,
  user: {},
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.REGISTER_REQUEST:
    case constants.LOGIN_REQUEST:
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
    case constants.REGISTER_FAILURE:
    case constants.LOGIN_FAILURE:
    return {
      ...state,
      isAuthenticated: false,
      error: action.payload,
    }
    default:
      return state;
  }
}
