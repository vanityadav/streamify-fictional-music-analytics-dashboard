"use client";

import { useState } from "react";

import { RefreshCcw, TrendingUp } from "lucide-react";
import { DateRange } from "react-day-picker";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  defaultDate,
  months,
  userGrowthChartConfig,
  userGrowthChartData,
} from "@/components/charts/charts.dto";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { DateRangeSelector } from "./date-range-selector";

export function UserGrowthChart() {
  const [chartsData, setChartsData] = useState(userGrowthChartData);

  const [activeChart, setActiveChart] = useState<"total" | "active" | "">("");

  const [date, setDate] = useState<DateRange | undefined>(defaultDate);

  const handleSetDate = (date: DateRange) => {
    if (!date) return;

    const newChartsData = userGrowthChartData.filter((data) => {
      const dataDate = new Date(data.year, data.month);

      const fromDate = new Date(
        date.from!.getFullYear(),
        date.from!.getMonth()
      );

      const toDate = new Date(date.to!.getFullYear(), date.to!.getMonth());

      return dataDate >= fromDate && dataDate <= toDate;
    });

    setDate(date);

    setChartsData(newChartsData);
  };

  const reset = () => {
    setDate(defaultDate);
    setChartsData(userGrowthChartData);
    setActiveChart("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>User growth metrics</CardTitle>
        <CardDescription>
          Showing total and active users for the last 12 months
        </CardDescription>
        <div className="ml-auto pb-8">
          <DateRangeSelector
            date={date}
            setDate={
              handleSetDate as React.Dispatch<
                React.SetStateAction<DateRange | undefined>
              >
            }
          />
        </div>

        <div className="flex">
          <button
            data-active={activeChart === "total"}
            className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
            onClick={() => setActiveChart("total")}
          >
            <span className="text-xs text-muted-foreground">Total Users</span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {chartsData
                .reduce((acc, data) => acc + data.total, 0)
                ?.toLocaleString()}
            </span>
          </button>

          <button
            data-active={activeChart === "active"}
            className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
            onClick={() => setActiveChart("active")}
          >
            <span className="text-xs text-muted-foreground">Active Users</span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              {chartsData
                .reduce((acc, data) => acc + data.active, 0)
                ?.toLocaleString()}
            </span>
          </button>

          <button
            data-active={activeChart === ""}
            className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
            onClick={reset}
          >
            <span className="flex item-center gap-2 justify-center text-xs text-muted-foreground">
              Reset chart
              <RefreshCcw className="h-4 w-4" />
            </span>
          </button>
        </div>
      </CardHeader>

      {chartsData.length === 0 && (
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <div className="text-muted-foreground">No data available</div>
          </div>
        </CardContent>
      )}
      {chartsData.length > 0 && (
        <CardContent>
          <ChartContainer
            config={userGrowthChartConfig}
            className="max-h-[500px] w-full"
          >
            <AreaChart
              accessibilityLayer
              data={chartsData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => months[value].slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-total)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-total)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillActive" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-active)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-active)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>

              <Area
                dataKey="total"
                type="natural"
                fill="url(#fillTotal)"
                fillOpacity={0.4}
                stroke="var(--color-total)"
                stackId="a"
                hide={activeChart ? activeChart !== "total" : false}
              />
              <Area
                dataKey="active"
                type="natural"
                fill="url(#fillActive)"
                fillOpacity={0.4}
                stroke="var(--color-active)"
                stackId="b"
                hide={activeChart ? activeChart !== "active" : false}
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      )}

      {chartsData.length > 0 && (
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Active user up by 2.8% this month{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
