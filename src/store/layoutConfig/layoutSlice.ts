import { createSlice } from "@reduxjs/toolkit";

interface LayoutState {
  isSidebarOpen: boolean;
}

const initialState: LayoutState = {
  isSidebarOpen: JSON.parse(localStorage.getItem("isSidebarOpen") || "false"),
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
      localStorage.setItem(
        "isSidebarOpen",
        JSON.stringify(state.isSidebarOpen)
      );
    },
  },
});

export const { toggleSidebar } = layoutSlice.actions;

export default layoutSlice.reducer;
