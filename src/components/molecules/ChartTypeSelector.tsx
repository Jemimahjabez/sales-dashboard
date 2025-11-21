import { Button } from "@/components/ui/button";
import { BarChart3, LineChart, PieChart } from "lucide-react";

export type ChartType = "bar" | "line" | "pie";

interface ChartTypeSelectorProps {
  selectedType: ChartType;
  onTypeChange: (type: ChartType) => void;
}

export const ChartTypeSelector = ({ selectedType, onTypeChange }: ChartTypeSelectorProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={selectedType === "bar" ? "default" : "outline"}
        size="sm"
        onClick={() => onTypeChange("bar")}
        className="gap-2"
      >
        <BarChart3 className="h-4 w-4" />
        Bar
      </Button>
      <Button
        variant={selectedType === "line" ? "default" : "outline"}
        size="sm"
        onClick={() => onTypeChange("line")}
        className="gap-2"
      >
        <LineChart className="h-4 w-4" />
        Line
      </Button>
      <Button
        variant={selectedType === "pie" ? "default" : "outline"}
        size="sm"
        onClick={() => onTypeChange("pie")}
        className="gap-2"
      >
        <PieChart className="h-4 w-4" />
        Pie
      </Button>
    </div>
  );
};
