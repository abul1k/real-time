import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorldClock } from "../../store/worldClock/worldClockSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { IWorldClockList } from "../../interfaces/worldClock";

const WorldClock = () => {
  const { clockList } = useSelector(({ worldClock }) => worldClock) as {
    clockList: IWorldClockList;
  };
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getWorldClock({ region: "Asia", city: "Tashkent" }));
      } catch (error) {
        console.error("Error fetching world clock:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="world-clock">
      <h1 className="centered-text">Coming soon</h1>
    </div>
  );
};

export default WorldClock;
