"use client";

import { Header } from "@/components/sidebar/header";
import { Profile } from "@/components/sidebar/profile";
import { Revenue } from "@/components/sidebar/revenue";
import { Platform } from "@/components/sidebar/platform";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <Header />
      </SidebarHeader>

      <SidebarContent>
        <Platform />
        <Revenue />
      </SidebarContent>

      <SidebarFooter>
        <Profile />
      </SidebarFooter>
    </Sidebar>
  );
}
