import React from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const COLUMNS = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Campaign Name",
    flex: 1,
  },
];

const DataTable = ({ data }) => {
  const { currentMode } = useStateContext();
  const navigate = useNavigate();

  const handleRowClick = (rowInfo) => {
    let { id } = rowInfo;
    navigate(`/dashboard/${id}`);
    console.log(id);
  };

  // check if data is undefined or empty
  if (!data || data.length === 0) {
    return <div>No data to display.</div>;
  }

  const rowsWithUuid = data.map((row) => ({ ...row, id: row.id }));

  return (
    <div
      className="m-2 md:m-10 mt-24 p-2 pb-4 md:p-10 bg-gray-200 md:rounded-3xl rounded-xl"
      style={{
        backgroundColor: currentMode === "Dark" ? "rgb(145 157 176)" : "#fff",
      }}
    >
      <Header title="Campaign List" />

      <div className="data-table-container">
        <DataGrid
          rows={rowsWithUuid}
          columns={COLUMNS}
          onRowClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default DataTable;
