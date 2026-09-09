import { Divider } from "@mui/material";
import ProfileFieldCard from "./ProfileFieldCard";

const Profile = () => {
  return (
    <div className="lg:px-20 lg:bottom-20 space-y-20">
      <div className="w-full lg:w-[70%]">
        <h1 className="text-5xl font-bold pb-5">Remarkable Salon</h1>
        <section className="grid grid-cols-2 gap-3">
          <div className="col-span-2">
            <img
              className="w-full rounded-md h-[15rem] object-cover"
              src="https://i.pinimg.com/736x/4f/dc/e2/4fdce25e5a9f3c2125bdedde4ae6fa45.jpg"
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full rounded-md h-[15rem] object-cover"
              src="https://i.pinimg.com/736x/4f/dc/e2/4fdce25e5a9f3c2125bdedde4ae6fa45.jpg"
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full rounded-md h-[15rem] object-cover"
              src="https://i.pinimg.com/736x/4f/dc/e2/4fdce25e5a9f3c2125bdedde4ae6fa45.jpg"
            />
          </div>
        </section>
      </div>
      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-center">
          <h1 className="text-2xl font-bold text-gray-600">Owner Details</h1>
        </div>
        <div>
          <ProfileFieldCard keys={"owner name"} value={"Mark Remarkable"} />
          <Divider />
          <ProfileFieldCard keys={"email"} value={"remarkable@gmail.com"} />
          <Divider />
          <ProfileFieldCard keys={"role"} value={"SALON_OWNER"} />
        </div>
      </div>
      <div className="mt-10 lg:w-[70%]">
        <div className="flex items-center pb-3 justify-center">
          <h1 className="text-2xl font-bold text-gray-600">Salon Details</h1>
        </div>
        <div>
          <ProfileFieldCard keys={"salon name"} value={"remarkable salon"} />
          <Divider />
          <ProfileFieldCard keys={"salon address"} value={"thailand bangkok"} />
          <Divider />
          <ProfileFieldCard keys={"open time"} value={"9:00 AM"} />
          <Divider />
          <ProfileFieldCard keys={"close time"} value={"10:00 PM"} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
