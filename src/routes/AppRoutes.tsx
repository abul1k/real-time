import React from "react";
import { Routes, Route } from "react-router-dom";
import Present from "../pages/present/Present";
import WorldClock from "../pages/worldClock/WorldClock";
import Timer from "../pages/timer/Timer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Present />} />
      <Route path="/world-clock" element={<WorldClock />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  );
};

export default AppRoutes;
