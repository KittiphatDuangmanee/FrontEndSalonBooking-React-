import { Button, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      role: "CUSTOMER",
    },
    onSubmit: (values) => {
      console.log("Submitting", values);
      values.username=values.fullName;
      dispatch(registerUser({ userData: values, navigate }));
    },
  });
  return (
    <Container component={"main"} maxWidth="xs">
      <div className="!space-y-5">
        <Typography className="text-center" variant="h5">
          Signup
        </Typography>
        <form className="!space-y-5" onSubmit={formik.handleSubmit}>
          <TextField
            variant="outlined"
            fullWidth
            name="fullName"
            id="fullName"
            label="Full Name"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            required
          />
          <TextField
            variant="outlined"
            fullWidth
            name="email"
            id="email"
            label="Email Address"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          <TextField
            variant="outlined"
            fullWidth
            name="password"
            id="password"
            label="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
            type="password"
          />
          <Button
            sx={{ py: ".8rem" }}
            type="submit"
            variant="contained"
            fullWidth
          >
            Signup
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default SignUpForm;
