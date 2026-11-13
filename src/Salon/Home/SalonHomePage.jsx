import BookingCharts from "./chart/BookingCharts";
import EarningChart from "./chart/EarningChart";
import ReportCard from "./ReportCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const SalonHomePage = () => {
  return (
    <div className="space-y-5">
      <div className="lg:flex gap-5">
        <div className="space-y-10 rounded-md w-full lg:w-[70%]">
          <div className="border rounded-lg p-5 w-full">
            <h1 className="text-lg font-bold pb-5 text-primary-color">
              Total Revenue
            </h1>
            <EarningChart />
          </div>
        </div>
        <section className="space-y-5 w-full lg:w-[30%]">
          <ReportCard
            icon={<AccountBalanceIcon />}
            value={"$" + 499}
            title={"Total Earning"}
          />
          <ReportCard
            icon={<AccountBalanceIcon />}
            value={"$" + 499}
            title={"Total Bookings"}
          />
          <ReportCard
            icon={<AccountBalanceIcon />}
            value={"$" + 499}
            title={"Total Refunds"}
          />
          <ReportCard
            icon={<AccountBalanceIcon />}
            value={"$" + 499}
            title={"Cancel Bookings"}
          />
        </section>
      </div>
      <div className="space-y-10 rounded-md w-full">
        <div className="border rounded-lg p-5 w-full">
          <h1 className="text-lg font-bold pb-5 text-primary-color">
            Total Booking
          </h1>
          <BookingCharts/>
        </div>
      </div>
    </div>
  );
};

export default SalonHomePage;
