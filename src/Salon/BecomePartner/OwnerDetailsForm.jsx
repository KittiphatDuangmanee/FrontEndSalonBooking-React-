import { Container, TextField, Typography } from "@mui/material"

const OwnerDetailsForm = ({formik}) => {
  return (
    <Container component={"main"} >
      <div className="!space-y-5">
        <Typography className="text-center" variant="h5">
          Owner Details
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
        </form>
      </div>
    </Container>
  )
}

export default OwnerDetailsForm