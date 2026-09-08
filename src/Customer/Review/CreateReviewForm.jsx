import { Box, Button, InputLabel, TextField } from "@mui/material"
import Rating from "@mui/material/Rating";
import { useFormik } from "formik";

const CreateReviewForm = () => {
    const formik = useFormik({
        initialValues:{
            reviewText:"",
            reviewRating: 0
        },
        onSubmit:(values) => {
            console.log("Submitting", values);
        }
    })
  return (
    <Box
    component={"form"}
    onSubmit={formik.handleSubmit}
    className="mt-5 !space-y-5 w-full lg:w-1/2 "
    >
        <TextField
            fullWidth
            id="reviewText"
            name="reviewText"
            label="Review"
            variant="outlined"
            multiline
            rows={4}
            value={formik.values.reviewText}
            onChange={formik.handleChange}
        />
        <div className="space-y-2">
            <InputLabel>Rating</InputLabel>
            <Rating 
                id="reviewRating"
                name="reviewRating"
                defaultValue={formik.values.reviewRating}
                onChange={(event, newValue) => formik.setFieldValue("reviewRating", newValue)}
                precision={0.5}
            />
        </div>
        <Button variant="contained" color="primary" type="submit">
            Submit Review
        </Button>
    </Box>
  )
}

export default CreateReviewForm