import * as constants from "../constants";

export const requestRegister = (userData) => {
  return {
    type: constants.REGISTER_REQUEST,
    payload: userData
  };
}