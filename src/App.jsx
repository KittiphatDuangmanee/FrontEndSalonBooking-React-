import "./App.css";
import {ThemeProvider } from "@mui/material";
import greenTheme from "./theme/greenTheme";
import Notifications from "./Notification/Notifications";
// import Home from "./Customer/Home/Home";
// import SalonDetails from "./Salon/SalonDetail/SalonDetails";
// import Bookings from "./Booking/Bookings";

function App() {
  return (
      <ThemeProvider theme={greenTheme}>
        {/* <Home /> */}
        {/* <SalonDetails/> */}
        {/* <Bookings/> */}
        <Notifications/>
      </ThemeProvider>
  );
}

export default App;
