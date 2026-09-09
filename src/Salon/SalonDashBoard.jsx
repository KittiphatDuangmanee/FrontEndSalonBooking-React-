import Navbar from "../Admin Salon/Navbar"
import SalonDrawerList from "./components/SalonDrawerList"
import { Outlet } from "react-router-dom"


const SalonDashBoard = () => {
  return (
    <div className="min-h-screen">
    <Navbar/>
      <section className="lg:flex lg:h-[90vh]">
        <div className="hidden lg:block h-full">
          <SalonDrawerList/>
        </div>
        <div className="p-10 w-full lg:w-[80%] overflow-y-auto">
            <Outlet/>
        </div>
      </section>
    </div>
  )
}

export default SalonDashBoard