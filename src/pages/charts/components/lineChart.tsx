import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { IChartData } from "../../../types";

interface LineChartProps {
  data: IChartData[];
}
export const LineChart = ({ data }: LineChartProps) => {
  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <RechartsLineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="postTitle" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="commentsCount" stroke="#8884d8" />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};
