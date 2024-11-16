"use client";

import { AgGridReact } from "ag-grid-react";

import { tableConfig } from "./table.dto";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

import "./table.css";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";

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
