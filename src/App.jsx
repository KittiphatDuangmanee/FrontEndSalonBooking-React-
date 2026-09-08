import "./App.css";
import {ThemeProvider } from "@mui/material";
// import Home from "./Customer/Home/Home";
import greenTheme from "./theme/greenTheme";
import SalonDetails from "./Salon/SalonDetail/SalonDetails";

function App() {
  return (
      <ThemeProvider theme={greenTheme}>
        {/* <Home /> */}
        <SalonDetails/>
      </ThemeProvider>
  );
}

export default App;
