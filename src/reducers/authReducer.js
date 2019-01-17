import * as constants from "../constants";

const initialState = {
  isAuthenticated: false,
  user: {},
  isFetching: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.REGISTER_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case constants.REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        user: action.payload,
      }
    default:
      return state;
  }
}
