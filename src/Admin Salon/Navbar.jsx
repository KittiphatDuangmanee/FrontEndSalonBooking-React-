import {  NotificationsActive } from "@mui/icons-material"
import { Badge, Drawer, IconButton} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import SalonDrawerList from "../Salon/components/SalonDrawerList";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toggleOpen = (status) => {
        setOpen(status);
    }
  return (
    <div className="h-[10vh] flex items-center justify-between px-5 border-b">
        <div className="flex items-center gap-3">
            <IconButton onClick={() => toggleOpen(true)}>
                <MenuIcon color="primary"/>
            </IconButton>
            <h1 className="text-xl cursor-pointer font-bold">Salon Booking</h1>
        </div>
        <IconButton>
            <Badge color="secondary">
                <NotificationsActive color="primary"/>
            </Badge>
        </IconButton>
        <Drawer open={open} onClose={() => toggleOpen(false)}>
            <SalonDrawerList toggleDrawer={toggleOpen}/>
        </Drawer>
    </div>
  )
}

export default Navbar