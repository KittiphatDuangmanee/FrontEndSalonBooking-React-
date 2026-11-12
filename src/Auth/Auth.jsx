import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button } from "@mui/material";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-[95vh]">
      <div className="shadow-lg p-5">
        {location.pathname === "/register" ? (
          <>
            <SignUpForm />
            <div className="text-center pt-5">
              Already Have Accout?{" "}
              <Button onClick={() => navigate("/login")}>Login</Button>
            </div>
          </>
        ) : (
          <>
            <LoginForm />

            <div className="text-center pt-5">
              Not Have Accout?{" "}
              <Button onClick={() => navigate("/register")}>Signup</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
