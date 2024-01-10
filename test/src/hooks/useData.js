import { useEffect, useState, useCallback } from "react";
import axiosInstance from "../api/axiosInstance";

const useData = (id) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [recentStats, setRecentStats] = useState({
    clicks: 0,
    impressions: 0,
    users: 0,
    iterations: 0,
  });
  const [totalStats, setTotalStats] = useState({
    totalClicks: 0,
    totalImpressions: 0,
    totalUsers: 0,
  });
  const [counter, setCounter] = useState(0);

  const fetchData = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try {
      const response = id
        ? await axiosInstance.get(`/campaigns/${id}?number=${counter}`, {})
        : await axiosInstance.get(`/campaigns`, {});

      const { data: responseData } = response;
      setData(responseData);
      setRecentStats({ ...responseData, iterations: counter });

      const { clicks, impressions, users } = responseData;

      const updatedTotalClicks = totalStats.totalClicks + clicks;
      const updatedTotalImpressions = totalStats.totalImpressions + impressions;
      const updatedTotalUsers = totalStats.totalUsers + users;
      const updatedTotalCtr = (
        (updatedTotalClicks / updatedTotalImpressions) *
        100
      ).toFixed(2);

      setTotalStats({
        totalClicks: updatedTotalClicks,
        totalImpressions: updatedTotalImpressions,
        totalUsers: updatedTotalUsers,
        totalCtr: updatedTotalCtr,
      });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 3000);

    if (id) {
      const intervalId = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 5000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [fetchData, id]);

  return { recentStats, totalStats, data, isLoading, error };
};

export default useData;
