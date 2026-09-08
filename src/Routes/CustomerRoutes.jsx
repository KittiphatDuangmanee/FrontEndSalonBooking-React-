import { Routes, Route } from "react-router-dom";
import Home from "../Customer/Home/Home";
import SalonDashBoard from "../Seller/SalonDashBoard";
import Notifications from "../Notification/Notifications";
import Bookings from "../Booking/Bookings";
import SalonDetails from "../Salon/SalonDetail/SalonDetails";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path="salon-dashbord/*" element={<SalonDashBoard />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="salon/:id" element={<SalonDetails />} />
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
};

export default CustomerRoutes;
