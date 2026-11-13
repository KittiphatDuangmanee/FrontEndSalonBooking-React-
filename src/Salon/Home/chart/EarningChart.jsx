import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fetchEarnings } from "../../../Redux/Chart/action";
import { Backdrop, CircularProgress } from "@mui/material";

const EarningChart = () => {
  const dispatch = useDispatch();
  const { chart } = useSelector(store => store);
  console.log("Redux chart state:", chart);
  useEffect(() => {
    dispatch(fetchEarnings(localStorage.getItem("jwt")));
  }, [dispatch]);

  if (chart.earningChartData.loading) {
  return (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
  return (
    <div className="h-[40vh] w-full">
      {chart.earningChartData.data ? (
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={chart.earningChartData.data}>
            <XAxis dataKey="daily" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="earnings" stroke="#5b9fd4" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div className="w-full flex justify-center items-center font-bold text-xl h-2/3">
          No Earning Data
        </div>
      )}
    </div>
  );
};

export default EarningChart;
