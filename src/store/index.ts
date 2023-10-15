import { configureStore } from "@reduxjs/toolkit";
import worldClockSlice from "./worldClock/worldClockSlice";
import layoutSlice from "./layoutConfig/layoutSlice";

export const store = configureStore({
  reducer: {
    worldClock: worldClockSlice,
    layout: layoutSlice,
  },

  devTools: true,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
