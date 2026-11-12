import { Route, Routes } from "react-router-dom"
import SalonDashBoard from "../Salon/SalonDashBoard"
import SalonHomePage from "../Salon/Home/SalonHomePage"
import BookingTable from "../Salon/Booking/BookingTable"
import ServiceTable from "../Salon/Services/ServiceTable"
import CreateServiceForm from "../Salon/Services/CreateServiceForm"
import Category from "../Salon/Category/Category"
import TransactionTable from "../Salon/Transaction/TransactionTable"
import Notifications from "../Salon/Notification/Notifications"
import Payment from "../Salon/Payment/Payment"
import NotFound from "../NotFound/NotFound"
import Profile from "../Salon/Profile/Profile"

const SalonOwnerRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<SalonDashBoard/>}>
            <Route index element={<SalonHomePage/>}/>
            <Route path="bookings" element={<BookingTable/>}/>
            <Route path="services" element={<ServiceTable/>}/>
            <Route path="add-services" element={<CreateServiceForm/>}/>
            <Route path="category" element={<Category/>}/>
            <Route path="transaction" element={<TransactionTable/>}/>
            <Route path="notifications" element={<Notifications/>}/>
            <Route path="payment" element={<Payment/>}/>
            <Route path="account" element={<Profile/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Route>
    </Routes>
  )
}

export default SalonOwnerRoutes