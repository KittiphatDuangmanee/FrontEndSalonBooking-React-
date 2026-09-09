import { Route, Routes } from "react-router-dom";
import {ThemeProvider } from "@mui/material";
import greenTheme from "./theme/greenTheme";
import "./App.css";
import CustomerRoutes from "./Routes/CustomerRoutes";
import SalonOwnerRoutes from "./Routes/SalonOwnerRoutes";
function App() {
  return (
      <ThemeProvider theme={greenTheme}>
        <Routes>
          <Route path="/salon-dashboard/*" element={<SalonOwnerRoutes/>}/>
          <Route path="*" element={<CustomerRoutes/>}/>
        </Routes>
      </ThemeProvider>
  );
}

export default App;
