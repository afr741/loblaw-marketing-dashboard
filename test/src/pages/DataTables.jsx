import React from "react";
import useData from "../hooks/useData";
import DataTable from "./Table/DataTable";

const DataTables = () => {
  const { recentStats, isLoading, error } = useData();

  if (isLoading) {
    return (
      <div className="text-large font-semibold dark:text-gray-200">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <DataTable data={recentStats.campaigns} />
    </div>
  );
};

export default DataTables;
