import Navbar from "../Admin Salon/Navbar";
import SalonDrawerList from "./components/SalonDrawerList";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSalonByOwner } from "../Redux/Salon/action";
import { getUser } from "../Redux/Auth/action";
import { fetchNotificationsBySalon } from "../Redux/Notifications/action";

const SalonDashBoard = () => {
  const dispatch = useDispatch();
  const { salon } = useSelector((store) => store);
  useEffect(() => {
    dispatch(fetchSalonByOwner(localStorage.getItem("jwt")));
    dispatch(getUser(localStorage.getItem("jwt")));
  }, [dispatch]);
  
  useEffect(() => {
    if (salon.salon) {
      dispatch(
        fetchNotificationsBySalon({
          jwt: localStorage.getItem("jwt"),
          salonId: salon.salon?.id,
        }),
      );
    }
  }, [dispatch, salon.salon]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="lg:flex lg:h-[90vh]">
        <div className="hidden lg:block h-full">
          <SalonDrawerList />
        </div>
        <div className="p-10 w-full lg:w-[80%] overflow-y-auto">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default SalonDashBoard;
