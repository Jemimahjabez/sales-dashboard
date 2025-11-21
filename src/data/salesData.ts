// Mock sales data inspired by Kaggle retail datasets
export interface SalesRecord {
  month: string;
  sales: number;
  profit: number;
  orders: number;
}

export interface YearlySales {
  year: number;
  data: SalesRecord[];
  totalSales: number;
  totalProfit: number;
  totalOrders: number;
}

const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Generate realistic sales data with seasonal trends
const generateSalesData = (year: number, baseAmount: number): SalesRecord[] => {
  const seasonalMultipliers = [0.8, 0.75, 0.9, 0.95, 1.0, 1.05, 1.1, 1.08, 1.0, 1.15, 1.25, 1.4];
  
  return months.map((month, index) => {
    const seasonal = seasonalMultipliers[index];
    const randomVariation = 0.9 + Math.random() * 0.2;
    
    const sales = Math.round(baseAmount * seasonal * randomVariation);
    const profit = Math.round(sales * (0.15 + Math.random() * 0.1));
    const orders = Math.round(sales / (80 + Math.random() * 40));
    
    return {
      month,
      sales,
      profit,
      orders
    };
  });
};

export const salesData2024: YearlySales = {
  year: 2024,
  data: generateSalesData(2024, 285000),
  totalSales: 0,
  totalProfit: 0,
  totalOrders: 0
};

export const salesData2023: YearlySales = {
  year: 2023,
  data: generateSalesData(2023, 245000),
  totalSales: 0,
  totalProfit: 0,
  totalOrders: 0
};

export const salesData2022: YearlySales = {
  year: 2022,
  data: generateSalesData(2022, 198000),
  totalSales: 0,
  totalProfit: 0,
  totalOrders: 0
};

// Calculate totals
[salesData2024, salesData2023, salesData2022].forEach(yearData => {
  yearData.totalSales = yearData.data.reduce((sum, record) => sum + record.sales, 0);
  yearData.totalProfit = yearData.data.reduce((sum, record) => sum + record.profit, 0);
  yearData.totalOrders = yearData.data.reduce((sum, record) => sum + record.orders, 0);
});

export const allYearsData = [salesData2024, salesData2023, salesData2022];
