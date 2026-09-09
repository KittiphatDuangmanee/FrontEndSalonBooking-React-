import { ArrowRightAlt } from "@mui/icons-material";
import { Button } from "@mui/material";

const BookingCard = () => {
  return (
    <div className="p-5 rounded-md bg-slate-100 md:flex items-center justify-between">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Remarkable Salon</h1>
        <div>
            <li>hair cut</li>
            <li>massage therapy</li>
            <li>hair color</li>
        </div>
        <div>
          <p>Time & Date <ArrowRightAlt/> 2026-01-16</p>
          <p>12:00:00 To 12:45:00</p>

        </div>
      </div>
      <div className="space-y-2">
        <img
        className="h-28 w-28" 
        src="https://i.pinimg.com/736x/4f/dc/e2/4fdce25e5a9f3c2125bdedde4ae6fa45.jpg"
          alt="Services"
        />
        <p className="text-center">$249</p>
        <Button color="error" variant="outlined">Cancelled</Button>
      </div>
    </div>
  );
};

export default BookingCard;
