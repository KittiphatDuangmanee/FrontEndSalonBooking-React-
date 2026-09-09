import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const DrawerList = ({ menu, menu2, toggleDrawer}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (item) => {
    navigate(item.path);
    if(toggleDrawer){
        toggleDrawer(false);
    }
  };

  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r py-5">
        <div className="space-y-2">
          {menu.map((item, index) => {
            return (
              <div
                key={`${index}-${item.name}`}
                onClick={() => handleClick(item)}
                className={`pr-9 cursor-pointer`}
              >
                <div
                  className={`${item.path === location.pathname ? "bg-primary-color text-secondary-color" : "bg-white text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}
                >
                  <ListItemIcon>
                    {item.path === location.pathname
                      ? item.activeIcon
                      : item.icon}
                  </ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </div>
              </div>
            );
          })}
          <div>
            <Divider />
          </div>
          {menu2.map((item, index) => {
            return (
              <div
                key={`${index}-${item.name}`}
                onClick={() => handleClick(item)}
                className={`pr-9 cursor-pointer`}
              >
                <div
                  className={`${item.path === location.pathname ? "bg-primary-color text-secondary-color" : "bg-white text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}
                >
                  <ListItemIcon>
                    {item.path === location.pathname
                      ? item.activeIcon
                      : item.icon}
                  </ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DrawerList;
