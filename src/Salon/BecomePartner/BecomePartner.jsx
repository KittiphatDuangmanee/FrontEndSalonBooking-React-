import Button from "@mui/material/Button"
import SellerAccountForm from "./SellerAccountForm"
import { useNavigate } from "react-router-dom"

const BecomePartner = () => {
  const navigate = useNavigate();
  return (
    <div className="grid md:gap-10 grid-cols-3 min-h-screen">
      <section className="lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg
      rounded-b-md">
        <SellerAccountForm/>
        <div className="mt-10 space-y-2">
          <h1 className="text-center text-sm font-medium">have account</h1>
          <Button fullWidth variant="outlined" onClick={()=> navigate("/login")}>login</Button>
        </div>
      </section>

    </div>
  )
}

export default BecomePartner