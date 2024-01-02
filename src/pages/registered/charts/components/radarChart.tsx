import {
  ResponsiveContainer,
  Tooltip,
  Legend,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { IChartData } from "../../../../types";

interface LineChartProps {
  data: IChartData[];
}
export const RadarChart = ({ data }: LineChartProps) => {
  return (
    <ResponsiveContainer width={"100%"} height={500}>
      <RechartsRadarChart outerRadius={190} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="postTitle" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Tooltip />
        <Radar
          name="Comments Count"
          dataKey="commentsCount"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
};
