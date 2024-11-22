import { ChartConfig } from "../ui/chart";

export const revenueDistribution = [
  { source: "subscriptions", revenue: 23, fill: "var(--color-subscriptions)" },
  { source: "ads", revenue: 14, fill: "var(--color-ads)" },
  { source: "sponsors", revenue: 7, fill: "var(--color-sponsors)" },
  { source: "others", revenue: 3, fill: "var(--color-others)" },
];

export const revenueDistributionChartConfig = {
  revenue: {
    label: "Revenue",
  },
  ads: {
    label: "Ads",
    color: "hsl(var(--chart-1))",
  },
  subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-2))",
  },
  sponsors: {
    label: "Sponsors",
    color: "hsl(var(--chart-3))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const userGrowthChartData = [
  { year: 2023, month: 11, total: 73, active: 59 },
  { year: 2024, month: 0, total: 74, active: 62 },
  { year: 2024, month: 1, total: 75, active: 68 },
  { year: 2024, month: 2, total: 79, active: 60 },
  { year: 2024, month: 3, total: 78, active: 65 },
  { year: 2024, month: 4, total: 80, active: 73 },
  { year: 2024, month: 5, total: 83, active: 68 },
  { year: 2024, month: 6, total: 85, active: 69 },
  { year: 2024, month: 7, total: 94, active: 68 },
  { year: 2024, month: 8, total: 98, active: 74 },
  { year: 2024, month: 9, total: 95, active: 79 },
  { year: 2024, month: 10, total: 102, active: 81 },
];

export const defaultDate = {
  from: new Date(userGrowthChartData[0].year, userGrowthChartData[0].month),
  to: new Date(
    userGrowthChartData[userGrowthChartData.length - 1].year,
    userGrowthChartData[userGrowthChartData.length - 1].month
  ),
};

export const userGrowthChartConfig = {
  total: {
    label: "Total Users",
    color: "hsl(var(--chart-1))",
  },
  active: {
    label: "Active Users",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const topStreamedChartConfig = {
  name: {
    label: "Name",
    color: "hsl(var(--chart-1))",
  },
  stream_count: {
    label: "Stream count",
    color: "hsl(var(--chart-2))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;
