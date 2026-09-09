import { Card } from "@mui/material";
import { NotificationsActive } from "@mui/icons-material";

const NotificationCard = () => {
  return (
    <Card
      sx={{ bgcolor: "#EAF0F1" }}
      className={`cursor-pointer p-5 flex items-center gap-5`}
    >
    <NotificationsActive/>
      <div>
        <p>Your booking got confirmed</p>
        <h1 className="space-x-3">
          {[1, 1, 1, 1].map(() => {
            return <span>hair cut</span>;
          })}
        </h1>
      </div>
    </Card>
  );
};

export default NotificationCard;
