import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { YearlySales } from "@/data/salesData";
import { ChartType, ChartTypeSelector } from "@/components/molecules/ChartTypeSelector";
import { FilterControl } from "@/components/molecules/FilterControl";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { useState, useMemo } from "react";

interface SalesChartProps {
  yearData: YearlySales;
}

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

export const SalesChart = ({ yearData }: SalesChartProps) => {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState<number>(0);

  const filteredData = useMemo(() => {
    return yearData.data.filter(record => record.sales >= threshold);
  }, [yearData.data, threshold]);

  const pieData = useMemo(() => {
    return filteredData.map(record => ({
      name: record.month,
      value: record.sales,
    }));
  }, [filteredData]);

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Legend />
              <Bar dataKey="sales" fill="hsl(var(--chart-1))" name="Sales ($)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="profit" fill="hsl(var(--chart-2))" name="Profit ($)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case "line":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="hsl(var(--chart-1))" 
                strokeWidth={2}
                name="Sales ($)"
                dot={{ fill: "hsl(var(--chart-1))", r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="profit" 
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2}
                name="Profit ($)"
                dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="hsl(var(--chart-1))"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>Sales Overview - {yearData.year}</CardTitle>
            <CardDescription>
              Monthly sales and profit data ({filteredData.length} months shown)
            </CardDescription>
          </div>
          <ChartTypeSelector selectedType={chartType} onTypeChange={setChartType} />
        </div>
        <div className="pt-4">
          <FilterControl threshold={threshold} onThresholdChange={setThreshold} />
        </div>
      </CardHeader>
      <CardContent>
        {renderChart()}
      </CardContent>
    </Card>
  );
};
