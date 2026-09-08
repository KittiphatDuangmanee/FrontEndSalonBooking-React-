import { Delete } from "@mui/icons-material";
import { Avatar, Box, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
const ReviewCard = () => {
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
                A
              </Avatar>
            </Box>
          </Grid>
          <Grid size={9}>
            <div className=" space-y-2">
              <p className="font-semibold text-lg">Remarkable Mark</p>
              <p className="opacity-70">2026-12-01T09:51:00</p>
            </div>
            <div>
              <Rating
                name="half-rating-read"
                value={2.5}
                precision={0.5}
                readOnly
              />
            </div>
            <p>This salon is provide good service.</p>
          </Grid>
        </Grid>
      </div>
      <IconButton>
        <Delete sx={{ color: red[700] }} />
      </IconButton>
    </div>
  );
};

export default ReviewCard;
