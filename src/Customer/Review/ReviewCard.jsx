import { Delete } from "@mui/icons-material";
import { Avatar, Box, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../Redux/Review/action";
const ReviewCard = ({item}) => {
  const dispatch = useDispatch();
  const {auth} = useSelector(store=>store);
  const handleDeleteReview = (item) => {
    dispatch(deleteReview({
      reviewId: item.id,
      jwt:localStorage.getItem("jwt"),
    }))
  }
  return (
    <div className="flex justify-between">
      <div className="w-[80%] ">
        <Grid container spacing={9}>
          <Grid size={1}>
            <Box>
              <Avatar
                className="text-white"
                sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              >
                {item.user.fullName[0]}
              </Avatar>
            </Box>
          </Grid>
          <Grid size={9}>
            <div className=" space-y-2">
              <p className="font-semibold text-lg">{item.user.fullName}</p>
              <p className="opacity-70">{item.createdAt}</p>
            </div>
            <div>
              <Rating
                name="half-rating-read"
                value={item.rating}
                precision={0.5}
                readOnly
              />
            </div>
            <p>{item.reviewText}</p>
          </Grid>
        </Grid>
      </div>
      {item.user.id === auth.user?.id && <IconButton onClick={()=>handleDeleteReview(item)}>
        <Delete sx={{ color: red[700] }} />
      </IconButton>}
    </div>
  );
};

export default ReviewCard;
