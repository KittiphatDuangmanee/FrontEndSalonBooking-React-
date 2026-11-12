import api from "../../config/api";
import { CREATE_BOOKING_FAILURE, CREATE_BOOKING_REQUEST, CREATE_BOOKING_SUCCESS, FETCH_BOOKING_BY_ID_FAILURE, FETCH_BOOKING_BY_ID_REQUEST, FETCH_BOOKING_BY_ID_SUCCESS, FETCH_CUSTOMER_BOOKINGS_FAILURE, FETCH_CUSTOMER_BOOKINGS_REQUEST, FETCH_CUSTOMER_BOOKINGS_SUCCESS, FETCH_SALON_BOOKINGS_FAILURE, FETCH_SALON_BOOKINGS_REQUEST, FETCH_SALON_BOOKINGS_SUCCESS, GET_SALON_REPORT_FAILURE, GET_SALON_REPORT_REQUEST, GET_SALON_REPORT_SUCCESS, UPDATE_BOOKING_STATUS_FAILURE, UPDATE_BOOKING_STATUS_REQUEST, UPDATE_BOOKING_STATUS_SUCCESS } from "./actionTypes";

const API_BASE_URL = "/api/bookings";

export const createBooking = ({jwt, salonId, bookingData}) => async (dispatch) => {
    dispatch({type: CREATE_BOOKING_REQUEST})
    try {
        const response = await api.post(API_BASE_URL,bookingData,{
            headers:{
                Authorization: `Bearer ${jwt}`
            },
            params: {
                salonId, paymentMethod:"STRIPE"
            }
        });
        console.log("Create booking ", response.data);
        window.location.href= response.data.paymentLinkUrl
        dispatch({type: CREATE_BOOKING_SUCCESS , payload: response.data})
    } catch (error) {
        console.log("Error creating booking: ", error)
        dispatch({type: CREATE_BOOKING_FAILURE, payload: error.message})
    }
};

export const fetchCustomerBookings = (jwt) => async (dispatch) => {
    dispatch({type: FETCH_CUSTOMER_BOOKINGS_REQUEST});
    try {
        const response = await api.get(`${API_BASE_URL}/customer`,{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        console.log("Customer bookings data: ", response.data);
        dispatch({type: FETCH_CUSTOMER_BOOKINGS_SUCCESS, payload: response.data})
    } catch (error) {
        console.log("FetchCustomerBooking Error " + error);
        dispatch({type: FETCH_CUSTOMER_BOOKINGS_FAILURE, payload: error.message});
    }
}

export const fetchSalonBookings = ({jwt}) => async (dispatch) => {
    dispatch({type: FETCH_SALON_BOOKINGS_REQUEST})
    try {
        const response = await api.get(`${API_BASE_URL}/salon`,{
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        });
        console.log("Salon bookings", response.data);
        dispatch({type: FETCH_SALON_BOOKINGS_SUCCESS, payload: response.data});
    } catch (error) {
        console.log("FetchSalonBookings error: " , error);
        dispatch({type: FETCH_SALON_BOOKINGS_FAILURE, payload: error.message});
    }
}

export const fetchBookingById = (bookingId) => async (dispatch) => {
    dispatch({type: FETCH_BOOKING_BY_ID_REQUEST})
    try {
        const response = await api.get(`${API_BASE_URL}/${bookingId}`);
        dispatch({type: FETCH_BOOKING_BY_ID_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: FETCH_BOOKING_BY_ID_FAILURE, payload: error.message});
    }
};

export const updateBookingStatus = ({bookingId, status, jwt}) => async (dispatch) => {
    dispatch({type: UPDATE_BOOKING_STATUS_REQUEST})
    try {
        const response = await api.put(`${API_BASE_URL}/${bookingId}/status`,null,{
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
            params: {status},
        });
        console.log("Update booking status ", response.data);
        dispatch({type: UPDATE_BOOKING_STATUS_SUCCESS, payload: response.data});
    } catch (error) {
        console.log("Error update booking status ", error);
        dispatch({type: UPDATE_BOOKING_STATUS_FAILURE, payload: error.message});
    }
};

export const getSalonReport = (jwt) => async (dispatch) => {
    dispatch({type: GET_SALON_REPORT_REQUEST});
    try {
        const response = await api.get('/api/bookings/report',{
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        })
        dispatch({type: GET_SALON_REPORT_SUCCESS, payload: response.data})
        console.log("Booking Report Data: ", response.data)
    } catch (error) {
        console.log("Get salon report error: " , error);
        dispatch({type: GET_SALON_REPORT_FAILURE, payload: error.message})
    }
}