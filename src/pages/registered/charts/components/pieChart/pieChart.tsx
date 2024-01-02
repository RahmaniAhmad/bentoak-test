import {
  ResponsiveContainer,
  Tooltip,
  PieChart as RechartsPieChart,
  Pie,
} from "recharts";
import { IChartData } from "../../../../../types";

interface LineChartProps {
  data: IChartData[];
}
export const PieChart = ({ data }: LineChartProps) => {
  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <RechartsPieChart>
        <Tooltip />
        <Pie
          data={data}
          dataKey="commentsCount"
          nameKey="postTitle"
          cx="50%"
          cy="50%"
          innerRadius={30}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};
