"use client";

import { AgGridReact } from "ag-grid-react";

import tableConfig from "./table.dto";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export default function RecentStreams() {
  return (
    <div className="ag-theme-quartz-auto-dark h-[590px] w-full">
      <AgGridReact {...tableConfig} />
    </div>
  );
}
