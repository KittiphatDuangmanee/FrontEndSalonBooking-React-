import { Routes, Route } from "react-router-dom";
import Home from "../Customer/Home/Home";
import SalonDashBoard from "../Salon/SalonDashBoard";
import Notifications from "../Customer/Notification/Notifications";
import Bookings from "../Customer/Booking/Bookings";
import SalonDetails from "../Customer/Salon/SalonDetail/SalonDetails";
import Navbar from "../Customer/Navbar/Navbar";
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
