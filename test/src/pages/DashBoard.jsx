import React from "react";
import StatBox from "../components/StatBox";
import { getItemList, getTotalItemList } from "../data/dashboard";
import { useParams } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";
import useData from "../hooks/useData";

const DashBoard = () => {
  const { currentColor } = useStateContext();
  const { id } = useParams();

  const { recentStats, totalStats, error } = useData(id);

  const renderRecentStats = () => {
    let recentStatsData = getItemList(recentStats);

    return recentStatsData.map((item) => (
      <StatBox key={item.title} {...item} currentColor={currentColor} />
    ));
  };

  const renderRecentTotalStats = () => {
    let totalStatsData = getTotalItemList(totalStats);

    return totalStatsData.map((item) => (
      <StatBox
        key={item.title}
        {...item}
        currentColor={currentColor}
        isTotal={true}
      />
    ));
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mt-24 px-4">
      <div className="flex-col flex-wrap justify-center items-center">
        <div className="flex-col flex-wrap justify-center dark:text-gray-200 dark:bg-[rgb(32, 35, 42)]">
          <h1 className="text-4xl font-bold text-center">
            Performance metrics
          </h1>
        </div>

        <div className="flex flex-wrap  justify-center py-20">
          {renderRecentTotalStats()}
        </div>

        <div className="flex m-3 flex-wrap justify-center items-center gap-6">
          {renderRecentStats()}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
