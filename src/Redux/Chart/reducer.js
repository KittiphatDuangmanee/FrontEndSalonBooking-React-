import {
  FETCH_BOOKINGS_FAILURE,
  FETCH_BOOKINGS_REQUEST,
  FETCH_BOOKINGS_SUCCESS,
  FETCH_EARNINGS_FAILURE,
  FETCH_EARNINGS_REQUEST,
  FETCH_EARNINGS_SUCCESS,
} from "./actionType";

const initialState = {
  earningChartData: {
    data: null,
    error: null,
    loading: false,
  },
  bookingChartData: {
    data: null,
    error: null,
    loading: false,
  },
};

const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EARNINGS_REQUEST:
      return {
        ...state,
        earningChartData: {
          ...state.earningChartData,
          loading: true,
          error: null,
        },
      };
    case FETCH_BOOKINGS_REQUEST:
      return {
        ...state,
        bookingChartData: {
          ...state.bookingChartData,
          loading: true,
          error: null,
        },
      };
    case FETCH_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookingChartData: {
          ...state.bookingChartData,
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case FETCH_EARNINGS_SUCCESS:
      return {
        ...state,
        earningChartData: {
          ...state.earningChartData,
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case FETCH_BOOKINGS_FAILURE:
      return {
        ...state,
        bookingChartData: {
          ...state.bookingChartData,
          loading: false,
          error: action.payload,
        },
      };
    case FETCH_EARNINGS_FAILURE:
      return {
        ...state,
        earningChartData: {
          ...state.earningChartData,
          loading: false,
          error: action.payload,
        },
      };

    default:
      return state;
  }
};

export default chartReducer;