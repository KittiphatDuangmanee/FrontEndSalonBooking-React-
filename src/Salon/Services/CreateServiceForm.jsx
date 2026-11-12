import { AddPhotoAlternate } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { uploadToCloudinary } from "../../util/uploadToCloudinary";
import { useDispatch, useSelector } from "react-redux";
import { createServiceAction } from "../../Redux/SalonServices/action";
import { getCategoriesBySalon } from "../../Redux/Category/action";

const CreateServiceForm = () => {
  const { salon, category } = useSelector((store) => store);
  const [uploadImage, setUploadImage] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (salon.salon) {
      dispatch(
        getCategoriesBySalon({
          jwt: localStorage.getItem("jwt"),
          salonId: salon.salon?.id,
        }),
      );
    }
  }, [dispatch, salon.salon]);
  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      description: "",
      price: "",
      duration: "",
      categoryId: "",
    },
    onSubmit: (values) => {
      console.log("Submitting", formik.values);
      dispatch(
        createServiceAction({
          jwt: localStorage.getItem("jwt"),
          service: values,
        }),
      );
      resetInput();
    },
  });
  const resetInput = () => {
    formik.setFieldValue("name", "");
    formik.setFieldValue("image", "");
    formik.setFieldValue("categoryId", "");
    formik.setFieldValue("duration", "");
    formik.setFieldValue("price", "");
    formik.setFieldValue("description", "");
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    setUploadImage(true);
    const image = await uploadToCloudinary(file);
    formik.setFieldValue("image", image);
    setUploadImage(false);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4 p-4 w-full lg:w-1/2"
      >
        <Grid container spacing={2}>
          <Grid className="w-24 h-24" size={{ xs: 12 }}>
            {formik.values.image ? (
              <div className="relative border">
                <img
                  className="w-24 h-24 object-cover"
                  src={formik.values.image}
                />
                <IconButton
                  color="error"
                  size="small"
                  sx={{ position: "absolute", top: 0, right: 0 }}
                >
                  <CloseIcon sx={{ fontSize: "1rem" }} />
                </IconButton>
              </div>
            ) : (
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
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              multiline
              id="description"
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              rows={4}
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="price"
              name="price"
              label="Price"
              value={formik.values.price}
              onChange={formik.handleChange}
              required
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              id="duration"
              name="duration"
              label="Duration"
              value={formik.values.duration}
              onChange={formik.handleChange}
              required
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formik.values.categoryId}
                label="Category"
                name="categoryId"
                onChange={formik.handleChange}
              >
                {category.categories && category.categories.map((item) => (
                  <MenuItem value={item.id} key={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <Button
              type="submit"
              variant="outlined"
              fullWidth
              sx={{ py: ".8rem" }}
            >
              Add New Service
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateServiceForm;
