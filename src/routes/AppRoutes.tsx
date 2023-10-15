import React from "react";
import { Routes, Route } from "react-router-dom";
import Present from "../pages/present/Present";
import WorldClock from "../pages/worldClock/WorldClock";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Present />} />
      <Route path="/world-clock" element={<WorldClock />} />
    </Routes>
  );
};

export default AppRoutes;
