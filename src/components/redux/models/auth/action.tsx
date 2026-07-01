
import { Dispatch } from "redux";
import * as CONSTANTS from "./constant";
import { Auth } from "@/components/services";

  export const register = (requestObject:any) => async (dispatch:Dispatch) => {
  try {
    const response = await Auth.registerUser(requestObject); 
    if (response.success) {
     
      dispatch({ type: CONSTANTS.REGISTER_SUCCESSFULLY });
      return response;
    }
  } catch (error) {
    console.log(error, "error");
  }
};

  export const login = (requestObject:any) => async (dispatch:Dispatch) => {
  try {
    const response = await Auth.loginUser(requestObject); 
    if (response.success) {
     
      dispatch({ type: CONSTANTS.LOGIN_SUCCESSFULLY });
      return response;
    }
  } catch (error) {
    console.log(error, "error");
  }
};

  export const forgot = (requestObject:any) => async (dispatch:Dispatch) => {
  try {
    const response = await Auth.forgotUser(requestObject); 
    if (response.success) {
     
      dispatch({ type: CONSTANTS.FORGOT_SUCCESSFULLY });
      return response;
    }
  } catch (error) {
    console.log(error, "error");
  }
};

export const reset = (requestObject:any) => async (dispatch:Dispatch) => {
  try {
    const response = await Auth.resetUser(requestObject);
    if (response.success) {

      dispatch({ type: CONSTANTS.RESET_SUCCESSFULLY });
      return response;
    }
  } catch (error) {
    console.log(error, "error");
  }
};


export const getUser = () => async (dispatch: Dispatch) => {
  try {
    const response = await Auth.getUser();

    if (response.success) {
      dispatch({
        type: CONSTANTS.GET_USER_SUCCESSFULLY,
        payload: response.data, // 🔥 VERY IMPORTANT
      });
      return response;
    }
  } catch (error) {
    console.log(error);
  }
};
