import { Route, Routes } from "react-router-dom";
import {ThemeProvider } from "@mui/material";
import greenTheme from "./theme/greenTheme";
import "./App.css";
import SalonDashBoard from "./Salon/SalonDashBoard";
import CustomerRoutes from "./Routes/CustomerRoutes";
function App() {
  return (
      <ThemeProvider theme={greenTheme}>
        <Routes>
          <Route path="/salon-dashboard/*" element={<SalonDashBoard/>}/>
          <Route path="*" element={<CustomerRoutes/>}/>
        </Routes>
      </ThemeProvider>
  );
}

export default App;
