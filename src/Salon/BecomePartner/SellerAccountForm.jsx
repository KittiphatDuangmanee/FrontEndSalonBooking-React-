import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { useState } from "react";
import OwnerDetailsForm from "./OwnerDetailsForm";
import { useFormik } from "formik";
import SalonDetailsForm from "./SalonDetailsForm";
import SalonAddressForm from "./SalonAddressForm";
import { getLocalTime } from "../../util/getLocalTime";
import { useDispatch } from "react-redux";
import { createSalon } from "../../Redux/Salon/action";
import { useNavigate } from "react-router-dom";

const steps = ["Owner Details", "Salon Details", "Salon Address"];
const SellerAccountForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const handleActiveStep = (value) => {
    setActiveStep(activeStep + value);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      password: "",
      salonAddress: {
        phoneNumber: "",
        pincode: "",
        address: "",
        state: "",
        city: "",
        email: "",
      },
      salonDetails: {
        name: "",
        openTime: "",
        closeTime: "",
        images: [],
      },
    },
    onSubmit: (values) => {
      console.log("Formik summiting:", values);
      const openTime = getLocalTime(values.salonDetails.openTime);
      const closeTime = getLocalTime(values.salonDetails.closeTime);
      const ownerDetails = {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        role:"SALON_OWNER",
        username: values.email.split("@")[0]
      }
      const salonDetails = {
        ...values.salonDetails,
        openTime,
        closeTime,
        ...values.salonAddress
      }
      dispatch(createSalon({salonDetails,ownerDetails,navigate}))
    },
  });
  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="mt-20 space-y-10">
        <div>
          {activeStep === 0 ? (
            <OwnerDetailsForm formik={formik} />
          ) : activeStep === 1 ? (
            <SalonDetailsForm formik={formik} />
          ) : (
            <SalonAddressForm formik={formik} />
          )}
        </div>
        <div className="flex items-center justify-between">
          <Button
            disabled={activeStep < 1}
            variant="contained"
            onClick={() => handleActiveStep(-1)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={
              activeStep === 2 ? formik.handleSubmit : () => handleActiveStep(1)
            }
          >
            {activeStep === 2 ? "Create Accout" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellerAccountForm;
