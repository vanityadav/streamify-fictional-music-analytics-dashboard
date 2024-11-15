import { Header } from "@/components/header/header";
import { AppSidebar } from "@/components/sidebar/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UserGrowthChart } from "@/components/charts/user-growth-chart";
import { RevenueDistribution } from "@/components/charts/revenue-distribution";
import { RecentStreamsTable } from "@/components/recent-streams-table/recent-streams-table";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="p-4">
        <Header />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="flex flex-1 flex-col gap-4  pt-0">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
              </div>
              <UserGrowthChart />
              <RecentStreamsTable />
            </div>
          </div>

          <aside className="grid gap-4 grid-cols-1">
            <RevenueDistribution />
          </aside>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
