"use client";

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

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "./table.css";

export function RecentStreamsTable() {
  const { theme } = useTheme();

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
      </CardHeader>
      <CardContent className={agGridTheme() + " h-[613px] w-full"}>
        <AgGridReact {...tableConfig} />
      </CardContent>
    </Card>
  );
}
