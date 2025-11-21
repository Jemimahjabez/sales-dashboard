# Sales Dashboard - Analytics & Insights

A professional sales analytics dashboard built with React, TypeScript, Tailwind CSS, and Recharts. This application provides comprehensive visualization of sales data across multiple years with interactive charts and custom filtering capabilities.

![Sales Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800)

## 🚀 Features

### Core Functionality
- **Multi-Year Sales Tracking**: View and compare sales data for 2024, 2023, and 2022
- **Interactive Charts**: Switch between Bar, Line, and Pie chart visualizations
- **Custom Filtering**: Set sales thresholds to filter data dynamically
- **Real-Time Metrics**: Track total sales, profit, orders, and average order value
- **Responsive Design**: Professional UI that works on all devices

### Technical Highlights
- **Atomic Design Principles**: Components organized by atoms, molecules, and organisms
- **TypeScript**: Full type safety throughout the application
- **Recharts Integration**: Beautiful, customizable charts with animations
- **Design System**: Consistent theming using CSS custom properties and Tailwind
- **Mock Data**: Realistic sales data inspired by Kaggle retail datasets

## 📊 What's Inside

### Component Structure
```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   └── MetricCard.tsx
│   ├── molecules/       # Simple combinations
│   │   ├── ChartTypeSelector.tsx
│   │   └── FilterControl.tsx
│   └── organisms/       # Complex components
│       └── SalesChart.tsx
├── data/
│   └── salesData.ts     # Mock sales data
└── pages/
    └── Dashboard.tsx    # Main dashboard page
```

### Key Components

**MetricCard** (Atom)
- Displays key performance indicators
- Shows trends and growth percentages
- Reusable with custom icons and colors

**ChartTypeSelector** (Molecule)
- Switches between Bar, Line, and Pie charts
- Clean button group interface
- Active state management

**FilterControl** (Molecule)
- Custom threshold input for filtering
- Real-time data filtering
- User-friendly controls

**SalesChart** (Organism)
- Complete chart visualization system
- Integrates multiple chart types
- Handles data filtering and display
- Responsive and accessible

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation Steps

1. **Clone the repository**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:8080`

### Build for Production
```bash
npm run build
```

## 📈 Data Structure

The application uses mock sales data with the following structure:

```typescript
interface SalesRecord {
  month: string;      // Month abbreviation
  sales: number;      // Total sales amount
  profit: number;     // Profit amount
  orders: number;     // Number of orders
}

interface YearlySales {
  year: number;
  data: SalesRecord[];
  totalSales: number;
  totalProfit: number;
  totalOrders: number;
}
```

Data includes:
- Monthly breakdown for 12 months
- Seasonal trends (higher sales in Nov/Dec)
- Realistic profit margins (15-25%)
- Average order values ($80-$120)

## 🎨 Design System

The dashboard uses a professional color scheme optimized for data visualization:

- **Primary**: Deep blue (#2B7FE6) - Main brand color
- **Accent**: Teal (#1AA894) - Secondary actions
- **Success**: Green (#22C55E) - Positive metrics
- **Warning**: Amber (#F59E0B) - Alerts
- **Charts**: 5-color palette for data visualization

All colors use HSL format and are defined in `src/index.css` as CSS custom properties, ensuring consistency across the application.

## 🔮 Future Enhancements

### Recommended Features
1. **API Integration**: Connect to real backend services for live data
2. **Export Functionality**: Download charts as images or PDFs
3. **Advanced Filters**: Filter by product category, region, or customer segment
4. **Comparison Mode**: Side-by-side comparison of multiple years
5. **Predictive Analytics**: AI-powered sales forecasting
6. **User Authentication**: Secure login and personalized dashboards

### Technical Improvements
- Add unit tests with Vitest
- Implement E2E testing with Playwright
- Add data caching with React Query
- Performance optimization with code splitting
- Accessibility audit and improvements

## 📦 Technology Stack

- **React 18.3**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **Recharts**: Chart visualization library
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library

## 🤝 Contributing

This is a portfolio/demo project. Feel free to fork and customize for your needs.

## 📄 License

This project is open source and available under the MIT License.

## 🌐 Deployment

Deploy easily using:
- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **Lovable**: Push to deploy automatically

## 📞 Support

For questions or issues:
- Check the [Lovable Documentation](https://docs.lovable.dev)
- Review component documentation in source files
- Explore Recharts documentation for chart customization

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
