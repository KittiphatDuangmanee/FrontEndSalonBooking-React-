import { useState } from "react";
import CategoryCard from "./CategoryCard";
import ServiceCard from "./ServiceCard";
import { Button, Divider } from "@mui/material";
import { RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";
import SelectedServiceList from "./SelectedServiceList";
const SalonServiceDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="lg:flex gap-5 h-[90vh] mt-10">
      <section className="space-y-5 border-r lg:w-[25%] pr-5">
        {[1, 1, 1, 1, 1].map((item, index) => {
          return (
            <CategoryCard
              selectedCategory={selectedCategory}
              item={index}
              handleCategoryClick={handleCategoryClick}
              key={index}
            />
          );
        })}
      </section>
      <section className="space-y-2 lg:w-[50%] px-5 lg:px-20 overflow-y-auto">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => {
          return (
            <div className="space-y-4" key={index}>
              <ServiceCard/>
              <Divider/>
            </div>
          );
        })}
      </section>
      <section className="lg:w-[25%]">
        <div className="border rounded-md p-5">
          {true ? (
            <div>
              <div className="flex items-center gap-2">
                <ShoppingCart sx={{ color: "green", fontSize: "30px" }} />
                <h1 className="font-thin text-sm">Selected Sercices</h1>
              </div>
              <SelectedServiceList />
              <Button fullWidth variant="contained">
                Book now
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 items-center justify-center">
              <RemoveShoppingCart sx={{ fontSize: "30px", color: "green" }} />
              <h1>Not selected</h1>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SalonServiceDetails;
