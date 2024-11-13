import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/sidebar/sidebar";
import RecentStreams from "@/components/table/recent-streams";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  SidebarInput,
} from "@/components/ui/sidebar";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="p-4">
        <header className="flex h-16 items-center gap-2 w-full">
          <div className="flex items-center gap-2 w-full">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <span className="truncate font-semibold">hi, vanit</span>

            <form className="relative ml-auto flex-1 max-w-[300px] min-w-[100px]">
              <SidebarInput
                id="search"
                placeholder="Search..."
                className="pl-8"
              />
              <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </form>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="flex flex-1 flex-col gap-4  pt-0">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
              </div>
              <div className="min-h-[400px] flex-1 rounded-xl bg-muted/50" />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Recent Streams</h2>
                <p className="mt-1 mb-3 truncate text-xs">
                  Recent streams of library
                </p>
                <RecentStreams />
              </div>
            </div>
          </div>
          <aside>
            <div className="grid gap-4 grid-cols-1">
              <div className="aspect-[4/3] rounded-xl bg-muted/50" />
              <div className="aspect-[4/3] rounded-xl bg-muted/50" />
            </div>
          </aside>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
