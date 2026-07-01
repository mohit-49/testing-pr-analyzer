import * as CONSTANT from "./constant";

const initialState = {
  isRegister: false,
  isLogin: false,
  access_token :  null,
  isForgot: false,
  isReset: false,
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CONSTANT.REGISTER_SUCCESSFULLY:
      return {
        ...state,
        isRegister: true,
      };

      case CONSTANT.LOGIN_SUCCESSFULLY:
      return {
        ...state,
        isLogin: true,
      };

      case CONSTANT.FORGOT_SUCCESSFULLY:
      return {
        ...state,
        isForgot: true,
      };

      case CONSTANT.RESET_SUCCESSFULLY:
      return {
        ...state,
        isReset: true,
      };

      case CONSTANT.GET_USER_SUCCESSFULLY:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
