import authUserTypes from "./auth.types";

export const registerUserStart = () => ({
  type: authUserTypes.REGISTER_USER_START,
});

export const registerUserSuccess = (user) => ({
  type: authUserTypes.REGISTER_USER_SUCCESS,
  payload: user,
});

export const registerUserFailure = (error) => ({
  type: authUserTypes.REGISTER_USER_FAILURE,
  payload: error,
});

export const logUserOut = () => ({
  type: authUserTypes.LOG_USER_OUT,
});

export const registerUser = (user) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      dispatch(registerUserStart());
      try {
        dispatch(registerUserSuccess(user));
      } catch (error) {
        dispatch(registerUserFailure(error));
        reject(error);
      }
    });
  };
};
