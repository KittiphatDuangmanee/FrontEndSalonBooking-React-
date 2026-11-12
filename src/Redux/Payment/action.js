import api from "../../config/api";
import {
  PROCEED_PAYMENT_FAILURE,
  PROCEED_PAYMENT_REQUEST,
  PROCEED_PAYMENT_SUCCESS,
} from "./actionTypes";

export const paymentSuccessAction =
  ({ paymentLinkId, jwt }) =>
  async (dispatch) => {
    dispatch({ type: PROCEED_PAYMENT_REQUEST });
    try {
      const response = await api.patch("/api/payments/proceed", null, {
        headers: { Authorization: `Bearer ${jwt}` },
        params: { paymentLinkId },
      });
      console.log("Payment: ", response.data);
      dispatch({ type: PROCEED_PAYMENT_SUCCESS, payload: response.data });
    } catch (error) {
      console.log("Error at proceedPayment ", error);
      dispatch({ type: PROCEED_PAYMENT_FAILURE, payload: error.message });
    }
  };
