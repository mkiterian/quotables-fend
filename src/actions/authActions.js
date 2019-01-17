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
    error,
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