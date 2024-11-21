import { TopArtist } from "@/components/charts/top-artist";
import { KeyMetrics } from "@/components/key-metrics/key-metrics";
import { UserGrowthChart } from "@/components/charts/user-growth-chart";
import { RevenueDistribution } from "@/components/charts/revenue-distribution";
import { TopFiveStreamedSongs } from "@/components/charts/top-five-streamed-songs";
import { RecentStreamsTable } from "@/components/recent-streams-table/recent-streams-table";

export default function Home() {
  return (
    <div className="grid grid-cols-1 @5xl/dashboard:grid-cols-3 gap-4">
      <div className="col-span-1 @5xl/dashboard:col-span-2 flex flex-1 flex-col gap-4 @container/key-metrics">
        <div className="grid auto-rows-min gap-4 @2xl/key-metrics:grid-cols-3">
          <KeyMetrics />
        </div>

        <UserGrowthChart />
        <RecentStreamsTable />
      </div>

      <aside className="flex flex-col gap-4 col-span-1">
        <RevenueDistribution />
        <TopArtist />
        <TopFiveStreamedSongs />
      </aside>
    </div>
  );
}
