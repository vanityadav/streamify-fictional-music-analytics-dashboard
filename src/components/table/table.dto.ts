import { ColDef } from "ag-grid-community";
import { AgGridReactProps } from "ag-grid-react";

import recentStreams from "../../../public/recent-streams.json";

type RecentStreams = (typeof recentStreams)[0];

const columnDefs: ColDef<RecentStreams>[] = [
  { field: "name", headerName: "Name", filter: "agTextColumnFilter" },
  {
    field: "artist",
    headerName: "Artist",
    filter: "agTextColumnFilter",
  },
  {
    field: "date_streamed",
    headerName: "Date Streamed",
    filter: "agDateColumnFilter",
    cellDataType: "dateString",
    valueFormatter: ({ value }) => {
      const date = new Date(value);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
  },
  {
    field: "stream_count",
    headerName: "Stream Count",
    filter: "agNumberColumnFilter",
  },
  { field: "user_id", headerName: "User ID", filter: "agTextColumnFilter" },
];

const defaultColDef: ColDef<RecentStreams> = {
  flex: 1,
  sortable: true,
  filter: true,
  minWidth: 150,
  filterParams: {
    buttons: ["clear", "reset", "apply"],
  },
};

const paginationPageSizeSelector = [5, 10, 20, 50, 100];

const tableConfig: AgGridReactProps = {
  columnDefs,
  rowData: recentStreams,
  defaultColDef,
  paginationPageSizeSelector,
  pagination: true,
  paginationPageSize: 10,
  domLayout: "normal",
  rowHeight: 48,
  headerHeight: 58,
};

export default tableConfig;
