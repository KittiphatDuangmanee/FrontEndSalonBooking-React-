import {
  CircularProgress,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { AddPhotoAlternate } from "@mui/icons-material";
import { useState } from "react";
import { uploadToCloudinary } from "../../util/uploadToCloudinary";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const SalonDetailsForm = ({ formik }) => {
  const [uploadImage, setUploadImage] = useState(false);
  const handleImageChange = async (event) => {
    const file = event.target?.files[0];
    if (!file) return;
    setUploadImage(true);
    const image = await uploadToCloudinary(file);
    formik.setFieldValue("salonDetails.images", [
      ...formik.values.salonDetails.images,
      image,
    ]);
    console.log(formik.values.salonDetails.images);
    setUploadImage(false);
  };
  const handleRemoveImage = (index) => {
    const updateImages = [...formik.values.salonDetails.images];
    updateImages.splice(index, 1);
    formik.setFieldValue("salonDetails.images", updateImages);
  };
  return (
    <Container component={"main"}>
      <div className="!space-y-5">
        <Typography className="text-center" variant="h5">
          Salon Details
        </Typography>
        <form className="!space-y-5" onSubmit={formik.handleSubmit}>
          <div className="flex gap-5">
            {formik.values.salonDetails.images?.map((image, index) => (
              <div className="relative rounded-md shadow-md ">
                <img className="w-24 h-24 object-cover" src={image} />
                <IconButton
                  color="error"
                  size="small"
                  sx={{ position: "absolute", top: 0, right: 0 }}
                  onClick={() => handleRemoveImage(index)}
                >
                  <CloseIcon sx={{ fontSize: "1rem" }} />
                </IconButton>
              </div>
            ))}
            {formik.values.salonDetails.images.length < 3 && (
              <>
                <input
                  type="file"
                  accept="image/*"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <label className="relative" htmlFor="fileInput">
                  <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                    <AddPhotoAlternate className="text-grey-700" />
                  </span>
                  {uploadImage && (
                    <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                      <CircularProgress />
                    </div>
                  )}
                </label>
              </>
            )}
          </div>
          <TextField
            variant="outlined"
            fullWidth
            name="salonDetails.name"
            id="Salon Name"
            label="Salon Name"
            onChange={formik.handleChange}
            value={formik.values.salonDetails.name}
            required
          />
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <TimePicker
              // defaultValue={dayjs()}
              sx={{ width: "100%" }}
              fullWidth
              onChange={(value) => {
                if (value) {
                  formik.setFieldValue(
                    "salonDetails.openTime",
                    value,
                  );
                }
              }}
              label="Select Open Time"
            />
            <TimePicker
              // defaultValue={dayjs()}
              sx={{ width: "100%" }}
              fullWidth
              onChange={(value) => {
                if (value) {
                  formik.setFieldValue(
                    "salonDetails.closeTime",
                    value,
                  );
                }
              }}
              label="Select Close Time"
            />
          </LocalizationProvider>
        </form>
      </div>
    </Container>
  );
};

export default SalonDetailsForm;
