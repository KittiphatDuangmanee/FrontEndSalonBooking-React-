import { useEffect, useState } from "react";
// import dayjs from "dayjs";
import CategoryCard from "./CategoryCard";
import ServiceCard from "./ServiceCard";
import { Button, Divider, Modal } from "@mui/material";
import { RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";
import SelectedServiceList from "./SelectedServiceList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { fetchServicesBySalonId } from "../../../Redux/SalonServices/action";
import { createBooking } from "../../../Redux/Booking/action";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
// import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
const SalonServiceDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open, setOpen] = useState(false);
  const [bookingData, setBookingData] = useState({
    services: [],
    time: null,
  });
  const dispatch = useDispatch();
  const { id } = useParams();
  const { salonService, category } = useSelector((store) => store);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSelectService = (service) => {
    setBookingData((prevState) => {
      return {
        ...prevState,
        services: prevState.services.some((s) => s.id === service.id)
          ? prevState.services
          : [...prevState.services, service],
      };
    });
  };

  const handleRemoveService = (id) => {
    setBookingData((prevState) => {
      return {
        ...prevState,
        services: prevState.services.filter((service) => service.id !== id)
      };
    });
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  const handleModalOpen = () => {
    setOpen(true);
  };
  const handleBooking = () => {
    const serviceIds = bookingData.services.map((service) => service.id);
    dispatch(
      createBooking({
        jwt: localStorage.getItem("jwt"),
        salonId: id,
        bookingData: { serviceIds, startTime: bookingData.time },
      }),
    );
  };

  useEffect(() => {
    dispatch(
      fetchServicesBySalonId({
        salonId: id,
        jwt: localStorage.getItem("jwt"),
        categoryId: selectedCategory,
      }),
    );
  }, [id, selectedCategory, dispatch]);

  return (
    <div className="lg:flex gap-5 h-[90vh] mt-10">
      <section className="space-y-5 border-r lg:w-[25%] pr-5">
        {category.categories.map((item) => {
          return (
            <CategoryCard
              selectedCategory={selectedCategory}
              item={item}
              handleCategoryClick={handleCategoryClick}
              key={item.id}
            />
          );
        })}
      </section>
      <section className="space-y-2 lg:w-[50%] px-5 lg:px-20 overflow-y-auto">
        {salonService.services.map((item) => {
          return (
            <div className="space-y-4" key={item.id}>
              <ServiceCard item={item} onSelect={handleSelectService} />
              <Divider />
            </div>
          );
        })}
      </section>
      <section className="lg:w-[25%]">
        <div className="border rounded-md p-5">
          {bookingData.services.length > 0 ? (
            <div>
              <div className="flex items-center gap-2">
                <ShoppingCart sx={{ color: "green", fontSize: "30px" }} />
                <h1 className="font-thin text-sm">Selected Services</h1>
              </div>
              <SelectedServiceList
                onRemove={handleRemoveService}
                selectedServices={bookingData.services}
              />
              <Button fullWidth variant="contained" onClick={handleModalOpen}>
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
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[600px] bg-secondary-color shadow-lg lg:flex gap-5 p-4">
          <div className="w-[50%] border-r pr-5">
            <h1 className="text-xl font-semibold">Time Slot Not Available</h1>
          </div>
          <div className="w-[50%] !space-y-5">
            <SelectedServiceList
              onRemove={handleRemoveService}
              selectedServices={bookingData.services}
            />
            <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
              <MobileDateTimePicker
                // defaultValue={dayjs()}
                sx={{ width: "100%" }}
                fullWidth
                onChange={(value) => {
                  if (value) {
                    const localDate = value.format("YYYY-MM-DDTHH:mm:ss");
                    setBookingData((prevState) => {
                      return { ...prevState, time: localDate };
                    });
                  }
                }}
                label="Select Time Slot"
              />
            </LocalizationProvider>
            <div>
              <Button fullWidth variant="outlined" onClick={handleBooking}>
                Book
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SalonServiceDetails;
