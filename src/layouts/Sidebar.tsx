import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CgCalendarToday } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "../assets/styles/layout.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/layoutConfig/layoutSlice";
const Sidebar = () => {
  const { isSidebarOpen } = useSelector(({ layout }) => layout);
  const dispatch = useDispatch();

  return (
    <div className={isSidebarOpen ? "sidebar open" : "sidebar"}>
      <button
        type="button"
        className="toggler"
        onClick={() => dispatch(toggleSidebar())}
      >
        {isSidebarOpen ? <FiChevronRight size="20" /> : <FiChevronLeft size="20" />}
      </button>
      <div className="routes">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active-link route" : "route"
          }
        >
          <CgCalendarToday size="20" />
          <span>Real Time</span>
        </NavLink>
        <NavLink
          to="/world-clock"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active-link route" : "route"
          }
        >
          <BiWorld size="20" />
          <span>World Clock</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
