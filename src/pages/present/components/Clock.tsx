import React, { useState, useEffect } from "react";
import Loading from "../../../components/Loading";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h1 className="clock">{currentTime || <Loading />}</h1>;
};

export default Clock;
