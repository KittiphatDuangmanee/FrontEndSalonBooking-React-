import { FiberManualRecord } from "@mui/icons-material";
import { Button } from "@mui/material";

const ServiceCard = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-5">
        <div className="space-y-1 w-[60%]">
          <h1 className="text-2xl font-semibold">Man Beard</h1>
          <p className="text-grey-500 text-sm">stylish man beard</p>

          <div className="flex items-center gap-3">
            <p>$399</p>
            <FiberManualRecord sx={{fontSize: "10px", color: "gray"}}/>
            <p>45 mins</p>
          </div>

        </div>
        <div className="space-y-3 ">
            <img
             className="w-32 h-32 object-cover rounded-md"
             src="https://i.pinimg.com/736x/4f/dc/e2/4fdce25e5a9f3c2125bdedde4ae6fa45.jpg"/>
            <Button variant="outlined" fullWidth>
                Add
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
