import { Search } from "lucide-react";

import { Separator } from "@radix-ui/react-separator";
import { ModeToggle } from "@/components/theme/theme";
import { SidebarInput, SidebarTrigger } from "@/components/ui/sidebar";

export function Header() {
  return (
    <header className="flex h-16 items-center gap-2 w-full">
      <div className="flex items-center gap-2 w-full">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <span className="truncate font-semibold">hi, vanit</span>

        <form className="relative ml-auto flex-1 max-w-[300px] min-w-[100px]">
          <SidebarInput id="search" placeholder="Search..." className="pl-8" />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </form>
        <ModeToggle />
      </div>
    </header>
  );
}
