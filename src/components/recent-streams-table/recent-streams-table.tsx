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

export function RecentStreamsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Streams</CardTitle>
        <CardDescription>Recent streams of library</CardDescription>
      </CardHeader>
      <CardContent className="ag-theme-quartz h-[612px] w-full">
        <AgGridReact {...tableConfig} />
      </CardContent>
    </Card>
  );
}
