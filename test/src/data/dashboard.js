import React from "react";

import { FaUsers } from "react-icons/fa";

import { FaRegEye } from "react-icons/fa";
import { MdAdsClick } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { IoMdRepeat } from "react-icons/io";

export const getItemList = (stats) => {
  if (!stats) return [];
  let { impressions, clicks, users, iterations } = stats;
  let ctr = clicks === 0 ? "-" : ((clicks / impressions) * 100).toFixed(2);

  return [
    {
      icon: <FaRegEye />,
      value: impressions,
      title: "Most Recent Impressions",
    },
    {
      icon: <MdAdsClick />,
      value: clicks,
      title: "Most Recent Clicks",
    },
    {
      icon: <GiClick />,
      value: ctr,
      title: "Most Recent CTR",
    },
    {
      icon: <FaUsers />,
      value: users,
      title: "Most Recent Users",
    },
    {
      icon: <IoMdRepeat />,
      value: iterations,
      title: "Current Number",
    },
  ];
};
export const getTotalItemList = (stats) => {
  if (!stats) return [];
  let { totalImpressions, totalClicks, totalCtr, totalUsers } = stats;
  return [
    {
      icon: <FaRegEye size="2em" />,
      title: "Total Impressions",
      value: totalImpressions,
    },
    {
      icon: <MdAdsClick size="2em" />,
      title: "Total Clicks",
      value: totalClicks,
    },
    {
      icon: <GiClick size="2em" />,
      title: "Total Clickthru Rates",
      value: totalCtr,
    },
    {
      icon: <FaUsers size="2em" />,
      title: "Total Users",
      value: totalUsers,
    },
  ];
};

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    color: "#FB9678",
    name: "orange-theme",
  },
];
