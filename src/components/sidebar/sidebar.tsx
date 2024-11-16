"use client";

import * as React from "react";

import { AudioWaveform } from "lucide-react";

import { Profile } from "@/components/sidebar/profile";
import { Platform } from "@/components/sidebar/platform";
import { Revenue } from "@/components/sidebar/revenue";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { sidebarData } from "./sidebar.dto";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <AudioWaveform className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Streamify</span>
                  <span className="truncate text-xs">Music</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <Platform items={sidebarData.navMain} />
        <Revenue revenue={sidebarData.revenue} />
      </SidebarContent>

      <SidebarFooter>
        <Profile user={sidebarData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
