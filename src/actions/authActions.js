import * as constants from "../constants";
import axios from "axios";

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

export const registerSuccess = user => (
  {
    type: constants.REGISTER_SUCCESS,
    user,
  }
);

export const registerUser = newUser => (
  (dispatch) => {
    dispatch(registerRequest());
    return axios.post("http://localhost:5000/users", newUser)
      .then((response) => {
        console.log(response);
        dispatch(registerSuccess(response.data.data));
      })
      .catch((error) => { dispatch(registerFailure(error)); });
  }
);