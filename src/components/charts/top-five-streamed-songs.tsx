"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { topStreamedChartConfig } from "@/components/charts/charts.dto";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { topFiveSongs } from "../recent-streams-table/table.dto";

export function TopFiveStreamedSongs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Most streamed songs (millions)</CardTitle>
        <CardDescription>November 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={topStreamedChartConfig}
          className="max-h-[300px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={topFiveSongs}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis dataKey="name" type="category" hide />
            <XAxis dataKey="stream_count" type="number" hide />
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
            <Bar
              dataKey="stream_count"
              layout="vertical"
              radius={4}
              fill="hsl(var(--chart-2))"
            >
              <LabelList
                dataKey="name"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="stream_count"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
                formatter={(value: number) => Math.round(value / 10)}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {topFiveSongs?.[0]?.name} is trending
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing top 5 streamed songs for the last 30 days
        </div>
      </CardFooter>
    </Card>
  );
}
