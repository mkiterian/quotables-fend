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
        error: action.payload
      };
    case constants.ADD_QUOTE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case constants.ADD_QUOTE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        quote: action.payload
      };
    case constants.ADD_QUOTE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
