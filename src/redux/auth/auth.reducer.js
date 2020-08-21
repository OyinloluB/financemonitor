import authUserTypes from "./auth.types";

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authUserTypes.REGISTER_USER_START:
      return {
        ...state,
        loading: true,
      };
    case authUserTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: { ...action.payload },
        error: null,
      };
    case authUserTypes.REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case authUserTypes.LOG_USER_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
