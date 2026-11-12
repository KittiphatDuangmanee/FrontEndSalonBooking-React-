import { Route, Routes } from "react-router-dom";
import {ThemeProvider } from "@mui/material";
import greenTheme from "./theme/greenTheme";
import "./App.css";
import CustomerRoutes from "./Routes/CustomerRoutes";
import SalonOwnerRoutes from "./Routes/SalonOwnerRoutes";
import Auth from "./Auth/Auth";
import BecomePartner from "./Salon/BecomePartner/BecomePartner";
function App() {
  return (
      <ThemeProvider theme={greenTheme}>
        <Routes>
          <Route path="/salon-dashboard/*" element={<SalonOwnerRoutes/>}/>
          <Route path="/register" element={<Auth/>}/>
          <Route path="/login" element={<Auth/>}/>
          <Route path="/become-partner" element={<BecomePartner/>}/>
          <Route path="*" element={<CustomerRoutes/>}/>
        </Routes>
      </ThemeProvider>
  );
}

export default App;
