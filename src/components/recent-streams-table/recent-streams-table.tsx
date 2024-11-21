"use client";

import { useState } from "react";

import { useTheme } from "next-themes";
import { AgGridReact } from "ag-grid-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { tableConfig } from "./table.dto";

import "ag-grid-enterprise";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "./table.css";
import { Search } from "lucide-react";
import { SidebarInput } from "../ui/sidebar";

export function RecentStreamsTable() {
  const { theme } = useTheme();

  const [searchQuery, setSearchQuery] = useState("");

  const agGridTheme = () => {
    if (theme === "light") return "ag-theme-quartz";

    if (theme === "dark") return "ag-theme-quartz-dark";

    return "ag-theme-quartz-auto-dark";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
        <CardDescription>Recent streams of library</CardDescription>

        <div className="relative ml-auto min-w-[220px]">
          <SidebarInput
            id="search"
            placeholder="Search..."
            className="pl-8"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </div>
      </CardHeader>
      <CardContent className={agGridTheme() + " h-[613px] w-full"}>
        <AgGridReact {...tableConfig} quickFilterText={searchQuery} />
      </CardContent>
    </Card>
  );
}
