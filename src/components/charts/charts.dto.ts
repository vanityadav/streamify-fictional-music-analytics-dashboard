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

export const userGrowthChartData = [
  { month: "December", total: 73, active: 59 },
  { month: "January", total: 74, active: 62 },
  { month: "February", total: 75, active: 68 },
  { month: "March", total: 79, active: 60 },
  { month: "April", total: 78, active: 65 },
  { month: "May", total: 80, active: 73 },
  { month: "June", total: 83, active: 68 },
  { month: "July", total: 85, active: 69 },
  { month: "August", total: 94, active: 68 },
  { month: "September", total: 98, active: 74 },
  { month: "October", total: 95, active: 79 },
  { month: "November", total: 102, active: 81 },
];

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
