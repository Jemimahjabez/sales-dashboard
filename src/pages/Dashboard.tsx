import { MetricCard } from "@/components/atoms/MetricCard";
import { SalesChart } from "@/components/organisms/SalesChart";
import { allYearsData, salesData2024 } from "@/data/salesData";
import { DollarSign, TrendingUp, ShoppingCart, Calendar } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  
  const currentYearData = allYearsData.find(data => data.year === selectedYear) || salesData2024;
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const calculateGrowth = (year: number) => {
    if (year === 2022) return "+12.5%";
    const currentData = allYearsData.find(d => d.year === year);
    const previousData = allYearsData.find(d => d.year === year - 1);
    
    if (!currentData || !previousData) return "N/A";
    
    const growth = ((currentData.totalSales - previousData.totalSales) / previousData.totalSales) * 100;
    return `${growth > 0 ? '+' : ''}${growth.toFixed(1)}%`;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Sales Dashboard</h1>
            <p className="text-muted-foreground mt-2">Track your sales performance and trends</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <Select value={selectedYear.toString()} onValueChange={(value) => setSelectedYear(Number(value))}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Sales"
            value={formatCurrency(currentYearData.totalSales)}
            icon={DollarSign}
            trend={calculateGrowth(selectedYear)}
            trendUp={true}
          />
          <MetricCard
            title="Total Profit"
            value={formatCurrency(currentYearData.totalProfit)}
            icon={TrendingUp}
            trend={`${((currentYearData.totalProfit / currentYearData.totalSales) * 100).toFixed(1)}% margin`}
            trendUp={true}
          />
          <MetricCard
            title="Total Orders"
            value={formatNumber(currentYearData.totalOrders)}
            icon={ShoppingCart}
            trend={`${(currentYearData.totalOrders / 12).toFixed(0)} avg/month`}
            trendUp={true}
          />
          <MetricCard
            title="Avg Order Value"
            value={formatCurrency(currentYearData.totalSales / currentYearData.totalOrders)}
            icon={DollarSign}
            trend="+3.2%"
            trendUp={true}
          />
        </div>

        {/* Main Chart */}
        <SalesChart yearData={currentYearData} />

        {/* Year Comparison */}
        <div className="grid gap-6 md:grid-cols-3">
          {allYearsData.map((yearData) => (
            <div 
              key={yearData.year}
              className={`rounded-lg border p-6 transition-all ${
                selectedYear === yearData.year 
                  ? 'border-primary bg-primary/5 shadow-lg' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">{yearData.year} Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sales</span>
                  <span className="font-semibold">{formatCurrency(yearData.totalSales)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Profit</span>
                  <span className="font-semibold">{formatCurrency(yearData.totalProfit)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Orders</span>
                  <span className="font-semibold">{formatNumber(yearData.totalOrders)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
