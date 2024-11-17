import { Play, TrendingUp, UserCheck, Users } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { TooltipProvider } from "@/components/ui/tooltip";
import { metrics } from "@/components/key-metrics/metrics.dto";
import { KeyMetricsCard } from "@/components/key-metrics/key-metric-card";

export function KeyMetrics() {
  return (
    <TooltipProvider>
      <KeyMetricsCard
        title="Total users"
        descriptions="Total number of registered users on Streamify"
        Icon={Users}
        value={metrics.totalUsers}
      >
        <div className="mt-4 flex items-center space-x-2">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium text-green-500">
            {metrics.userGrowth}% growth
          </span>
        </div>
      </KeyMetricsCard>

      <KeyMetricsCard
        title="Active users"
        descriptions="Users who streamed at least one song in the last 30 days"
        Icon={UserCheck}
        value={metrics.activeUsers}
      >
        <Progress
          className="mt-4"
          value={(metrics.activeUsers / metrics.totalUsers) * 100}
          aria-label="percentage of active users to total users"
        />
        <p className="text-xs text-muted-foreground mt-2">
          {((metrics.activeUsers / metrics.totalUsers) * 100).toFixed(1)}% of
          total users
        </p>
      </KeyMetricsCard>

      <KeyMetricsCard
        title="Total streams"
        descriptions="Total number of song streams on Streamify"
        Icon={Play}
        value={metrics.totalStreams}
      >
        <div className="mt-4 flex items-center space-x-2">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-sm font-medium text-green-500">
            {Math.abs(metrics.streamGrowth)}% growth
          </span>
        </div>
      </KeyMetricsCard>
    </TooltipProvider>
  );
}
