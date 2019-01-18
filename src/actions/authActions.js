import * as constants from "../constants";
import axios from "axios";
import config from "../config";

export const registerRequest = () => {
  return {
    type: constants.REGISTER_REQUEST,
  };
}

export const registerFailure = error => (
  {
    type: constants.REGISTER_FAILURE,
    payload: error,
  }
);

export const registerSuccess = (user) => {
  return (
  {
    type: constants.REGISTER_SUCCESS,
    payload: user,
  }
);}

export const registerUser = newUser => (
  (dispatch) => {
    dispatch(registerRequest());
    return axios.post(`${config.API_BASE}/users`, newUser)
      .then((response) => {
        dispatch(registerSuccess(response.data));
      })
      .catch((error) => { dispatch(registerFailure(error)); });
  }
);

export const loginRequest = () => {
  return {
    type: constants.LOGIN_REQUEST,
  };
}

export const loginFailure = error => (
  {
    type: constants.LOGIN_FAILURE,
    payload: error,
  }
);

export const loginSuccess = (user) => {
  return (
  {
    type: constants.LOGIN_SUCCESS,
    payload: user,
  }
);}

export const loginUser = credentials => (
  (dispatch) => {
    dispatch(loginRequest());
    return axios.post(`${config.API_BASE}/users/login`, credentials)
      .then((response) => {
        localStorage.setItem("x-auth", response.headers["x-auth"]);
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => { dispatch(loginFailure(error)); });
  }
);