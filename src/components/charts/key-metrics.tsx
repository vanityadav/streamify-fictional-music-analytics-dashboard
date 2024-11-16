"use client";

import { Play, TrendingUp, UserCheck, Users } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const metrics = {
  totalUsers: 102_010_042,
  activeUsers: 81_223_730,
  userGrowth: 5.2,
  totalStreams: 782_507_020_391,
  streamGrowth: 2.1,
};

export function KeyMetrics() {
  return (
    <TooltipProvider>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total users</CardTitle>
          <Tooltip>
            <TooltipTrigger>
              <Users className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Total number of registered users on Streamify</p>
            </TooltipContent>
          </Tooltip>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {metrics.totalUsers.toLocaleString()}
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">
              {metrics.userGrowth}% growth
            </span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active users</CardTitle>
          <Tooltip>
            <TooltipTrigger>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Users who streamed at least one song in the last 30 days</p>
            </TooltipContent>
          </Tooltip>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {metrics.activeUsers.toLocaleString()}
          </div>
          <Progress
            className="mt-4"
            value={(metrics.activeUsers / metrics.totalUsers) * 100}
          />
          <p className="text-xs text-muted-foreground mt-2">
            {((metrics.activeUsers / metrics.totalUsers) * 100).toFixed(1)}% of
            total users
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total streams</CardTitle>
          <Tooltip>
            <TooltipTrigger>
              <Play className="h-4 w-4 text-muted-foreground" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Total number of song streams on Streamify</p>
            </TooltipContent>
          </Tooltip>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {metrics.totalStreams.toLocaleString()}
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">
              {Math.abs(metrics.streamGrowth)}% growth
            </span>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  );
}
