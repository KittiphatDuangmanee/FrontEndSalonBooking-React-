import {
  CREATE_SALON_FAILURE,
  CREATE_SALON_REQUEST,
  CREATE_SALON_SUCCESS,
  FETCH_SALON_BY_ID_FAILURE,
  FETCH_SALON_BY_ID_REQUEST,
  FETCH_SALON_BY_ID_SUCCESS,
  FETCH_SALON_BY_OWNER_FAILURE,
  FETCH_SALON_BY_OWNER_REQUEST,
  FETCH_SALON_BY_OWNER_SUCCESS,
  FETCH_SALONS_FAILURE,
  FETCH_SALONS_REQUEST,
  FETCH_SALONS_SUCCESS,
  SERCH_SALONS_FAILURE,
  SERCH_SALONS_REQUEST,
  SERCH_SALONS_SUCCESS,
  UPDATE_SALON_FAILURE,
  UPDATE_SALON_REQUEST,
  UPDATE_SALON_SUCCESS,
} from "./actionTypes";

const initialState = {
  salons: [],
  searchSalons: [],
  salon: null,
  loading: false,
  error: null,
};

const salonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SALONS_REQUEST:
    case CREATE_SALON_REQUEST:
    case UPDATE_SALON_REQUEST:
    case FETCH_SALON_BY_ID_REQUEST:
    case FETCH_SALON_BY_OWNER_REQUEST:
    case SERCH_SALONS_REQUEST:
      return { ...state, loading: true };

    case FETCH_SALONS_FAILURE:
    case CREATE_SALON_FAILURE:
    case UPDATE_SALON_FAILURE:
    case FETCH_SALON_BY_ID_FAILURE:
    case FETCH_SALON_BY_OWNER_FAILURE:
    case SERCH_SALONS_FAILURE:
      return { ...state, error: action.payload, loading: false };

    case FETCH_SALONS_SUCCESS:
      return { ...state, salons: action.payload, loading: false };
    case SERCH_SALONS_SUCCESS:
      return { ...state, salons: action.payload, loading: false };
    case CREATE_SALON_SUCCESS:
      return { ...state, salon: action.payload, loading: false };
    case UPDATE_SALON_SUCCESS:
      return { ...state, salon: action.payload, loading: false };
    case FETCH_SALON_BY_ID_SUCCESS:
      return { ...state, salon: action.payload, loading: false };
    case FETCH_SALON_BY_OWNER_SUCCESS:
      return { ...state, salon: action.payload, loading: false };

    default:
      return state;
  }
};

export default salonReducer;
