import api from "../../config/api";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actionTypes";

export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  console.log("Auth action - ", userData);

  try {
    const response = await api.post(`/auth/signup`, userData.userData);
    const user = response.data;
    if (user?.jwt) {
      localStorage.setItem("jwt", user.jwt);
      userData.navigate("/");
    }
    console.log("Register: - ", user);
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    console.log("Error ", error);
    dispatch({ type: REGISTER_FAILURE, payload: error });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await api.post(`/auth/login`, userData.data);
    const user = response.data;
    if (user?.jwt) {
      localStorage.setItem("jwt", user.jwt);
      if (user?.role === "ROLE_ADMIN") {
        userData.navigate("/admin");
      } else if (user?.role === "ROLE_SALON_OWNER") {
        userData.navigate("/salon-dashboard");
      } else {
        userData.navigate("/");
      }
    }
    console.log("Login ", user);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const getUser = (token) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const response = await api.get(`/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;
    dispatch({ type: GET_USER_SUCCESS, payload: user });
    console.log("Request User", user);
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
    dispatch({type: LOGOUT});
    localStorage.clear();
}