import { useState } from "react";
import { Button, Divider } from "@mui/material";
import SalonDetail from "./SalonDetail";
import SalonServiceDetails from "./SalonServiceDetails";
import Review from "../../Customer/Review/Review";
import CreateReviewForm from "../../Customer/Review/CreateReviewForm";

const tabs = [
  {
    name:"All services"
  },
  {
    name:"Reviews"
  },
  {
    name:"Create Review"
  }
]

const SalonDetails = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleActiveTab = (tab) => {
    setActiveTab(tab)
  }
  return (
    <div className="px-5 lg:px20">
      <SalonDetail/>
      <div className="space-y-4">
        <div className="flex gap-2">
          {tabs.map((tab, index) => 
            <Button 
              onClick={() => handleActiveTab(tab)} 
              variant={activeTab.name == tab.name ? "contained":"outlined"} key={index}>
            {tab.name}
            </Button>) 
          }
        </div>
        <Divider/>
      </div>
      <div>
        {activeTab.name === "Create Review" 
          ? 
          <div className="flex justify-center">
            <CreateReviewForm/>
          </div> 
          : activeTab.name === "Reviews" 
          ? <Review/>
          : <div>
            <SalonServiceDetails />
          </div>
        }
      </div>
    </div>
  )
}

export default SalonDetails;