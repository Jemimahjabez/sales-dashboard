import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Filter } from "lucide-react";

interface FilterControlProps {
  threshold: number;
  onThresholdChange: (value: number) => void;
}

export const FilterControl = ({ threshold, onThresholdChange }: FilterControlProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Filter className="h-4 w-4" />
        <Label htmlFor="threshold" className="text-muted-foreground">
          Sales Threshold:
        </Label>
      </div>
      <Input
        id="threshold"
        type="number"
        value={threshold}
        onChange={(e) => onThresholdChange(Number(e.target.value))}
        className="w-32"
        placeholder="0"
      />
    </div>
  );
};
