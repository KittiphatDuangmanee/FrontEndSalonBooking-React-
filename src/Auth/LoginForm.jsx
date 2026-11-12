import { Button, TextField, Typography } from "@mui/material"
import Container from '@mui/material/Container';
import { useFormik } from "formik"
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Auth/action";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log("Submitting", values);
      dispatch(loginUser({data:values, navigate}))
    }
  })
  return (
    <Container component={"main"} maxWidth="xs">
      <div className="!space-y-5">
        <Typography className="text-center" variant="h5">
          Login
        </Typography>
        <form className="!space-y-5" onSubmit={formik.handleSubmit} >
            <TextField
              variant="outlined"
              fullWidth
              name="username"
              id="username"
              label="Email Address"
              onChange={formik.handleChange}
              value={formik.values.username}
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
            <Button sx={{py: ".8rem"}} type="submit" variant="contained" fullWidth>Login</Button>
        </form>
      </div>
    </Container>
  )
}

export default LoginForm