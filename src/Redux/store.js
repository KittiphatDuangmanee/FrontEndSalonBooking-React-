import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import salonReducer from "./Salon/reducer";
import authReducer from "./Auth/reducer";
import bookingReducer from "./Booking/reducer";
import categoryReducer from "./Category/reducer";
import notificationReducer from "./Notifications/reducer";
import reviewReducer from "./Review/reducer";
import serviceOfferingReducer from "./SalonServices/reducer";
import proceedPaymentReducer from "./Payment/reducer";


const rootReducers = combineReducers({
    salon: salonReducer,
    auth: authReducer,
    booking: bookingReducer,
    category: categoryReducer,
    notification: notificationReducer,
    review: reviewReducer,
    salonService: serviceOfferingReducer,
    payment: proceedPaymentReducer
})

export const store=legacy_createStore(rootReducers, applyMiddleware(thunk))