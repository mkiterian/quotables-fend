import * as constants from "../constants";
import axios from "axios";
import config from "../config";

export const fethQuotesRequest = () => {
  return {
    type: constants.FETCH_QUOTES_REQUEST
  };
};

export const fetchQuotesFailure = error => ({
  type: constants.FETCH_QUOTES_FAILURE,
  payload: error
});

export const fetchQuotesSuccess = user => {
  return {
    type: constants.FETCH_QUOTES_SUCCESS,
    payload: user
  };
};

export const fetchQuotes = () => dispatch => {
  dispatch(fethQuotesRequest());
  const token = localStorage.getItem("access_token");
  return axios
    .get(`${config.API_BASE}/quotes`, { headers: {"x-auth": token} })
    .then(response => {
      dispatch(fetchQuotesSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchQuotesFailure(error));
    });
};

export const addQuoteRequest = () => {
  return {
    type: constants.ADD_QUOTE_REQUEST
  };
};

export const addQuoteFailure = error => ({
  type: constants.ADD_QUOTE_FAILURE,
  payload: error
});

export const addQuoteSuccess = quote => {
  return {
    type: constants.ADD_QUOTE_SUCCESS,
    payload: quote
  };
};

export const addQuote = (quote) => dispatch => {
  dispatch(addQuoteRequest());
  const token = localStorage.getItem("access_token");
  return axios
    .post(`${config.API_BASE}/quotes`, quote, { headers: {"x-auth": token} })
    .then(response => {
      dispatch(addQuoteSuccess(response.data));
    })
    .catch(error => {
      dispatch(addQuoteFailure(error));
    });
};
