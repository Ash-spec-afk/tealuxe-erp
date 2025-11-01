import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const gradeData = [
  { name: "A+ (10)", value: 8, color: "#1D9E9B" },
  { name: "A (9)", value: 6, color: "#3BB5B2" },
  { name: "B+ (8)", value: 4, color: "#6CCCC9" },
  { name: "B (7)", value: 3, color: "#9FE0DE" },
  { name: "C+ (6)", value: 2, color: "#666666" },
  { name: "C (5)", value: 1, color: "#999999" },
];

export const GradeChart = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Grade Distribution (Cumulative)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={gradeData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {gradeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};
