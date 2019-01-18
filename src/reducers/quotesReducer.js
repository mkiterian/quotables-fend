import * as constants from "../constants";

const initialState = {
  quotes: [],
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_QUOTES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case constants.FETCH_QUOTES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        quotes: action.payload
      };
    case constants.FETCH_QUOTES_FAILURE:
    return {
      ...state,
      isAuthenticated: false,
      error: action.payload,
    }
    default:
      return state;
  }
}
