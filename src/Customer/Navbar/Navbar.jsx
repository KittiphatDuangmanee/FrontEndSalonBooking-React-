import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AccountCircle, NotificationsActive } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../Redux/Auth/action";

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
  const dispatch = useDispatch();
  const { auth, notification } = useSelector((store) => store);

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  useEffect(() => {
    dispatch(getUser(localStorage.getItem("jwt")));
  }, [auth.jwt, dispatch]);

  return (
    <div className="pb-20">
      <div className="z-50 px-6 flex items-center justify-between py-2">
        <div className="flex items-center gap-10">
          <h1
            className="cursor-pointer font-bold text-2xl"
            onClick={() => navigate("/")}
          >
            Salon Booking
          </h1>
          <div className="flex items-center gap-5 cursor-pointer">
            <h1 onClick={() => navigate("/")}>Home</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-6">
          <Button variant="outlined" onClick={() => navigate("/become-partner")}>Become partner</Button>
          <IconButton onClick={() => navigate("notifications")}>
            <Badge badgeContent={notification.unreadCount}>
              <NotificationsActive color="primary" />
            </Badge>
          </IconButton>

          {auth.user?.id ? (
            <div className="flex gap-1 items-center">
              <h1 className="text-lg font-semibold">{auth.user?.fullName}</h1>
              <IconButton
                id={buttonId}
                aria-controls={open ? menuId : undefined}
                aria-haspopup="true"
                aria-expanded={open}
                onClick={handleClick}
              >
                <Avatar sx={{ bgcolor: "green" }}>
                  {auth.user?.fullName[0]}
                </Avatar>
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
                <MenuItem
                  onClick={() => {
                    navigate("bookings");
                    handleClose();
                  }}
                >
                  My Bookings
                </MenuItem>
                { auth.user?.role === "SALON_OWNER" &&
                  <MenuItem
                    onClick={() => {
                      navigate("/salon-dashboard");
                      handleClose();
                    }}
                  >
                    SalonDashboard
                  </MenuItem>
                }
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <IconButton onClick={() => navigate("/login")}>
              <AccountCircle sx={{ fontSize: "45px", color: "green" }} />
            </IconButton>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
