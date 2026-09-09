import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AccountCircle, NotificationsActive } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";

const Navbar = () => {
  const id = 1;
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="z-50 px-6 flex items-center justify-between py-2">
        <div className="flex items-center gap-10">
          <h1 className="cursor-pointer font-bold text-2xl" onClick={() => navigate("/")}>Salon Booking</h1>
          <div className="flex items-center gap-5">
            <h1 onClick={() => navigate("/")}>Home</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <Button variant="outlined">Become partner</Button>
          <IconButton onClick={() => navigate("notifications")}>
            <Badge badgeContent={5}>
              <NotificationsActive color="primary" />
            </Badge>
          </IconButton>

          {true ? (
            <div className="flex gap-1 items-center">
              <h1 className="text-lg font-semibold">Mark</h1>
              <IconButton
                id={buttonId}
                aria-controls={open ? menuId : undefined}
                aria-haspopup="true"
                aria-expanded={open}
                onClick={handleClick}
              >
                <Avatar sx={{ bgcolor: "green" }}>M</Avatar>
              </IconButton>
              <Menu
                id={menuId}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": buttonId,
                  },
                }}
              >
                <MenuItem onClick={() => {
                  navigate("bookings")
                  handleClose()
                }}>My Bookings</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <IconButton>
              <AccountCircle sx={{ fontSize: "45px", color: "green" }} />
            </IconButton>
          )}
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default Navbar;
