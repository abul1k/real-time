import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IWorldClockList } from "../../interfaces/worldClock";

interface IParams {
  region: string;
  city: string;
}

export const getWorldClock = createAsyncThunk(
  "worldclock/getWorldClock",
  async (params: IParams, thunkAPI) => {
    try {
      const res = await axios.get(
        `http://worldtimeapi.org/api/timezone/${params.region}/${params.city}`
      );
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

interface WorldClockState {
  clockList: IWorldClockList;
  isLoading: boolean;
}

const worldClockSlice = createSlice({
  name: "worldclock",
  initialState: {
    clockList: {},
    isLoading: false,
  } as WorldClockState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWorldClock.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getWorldClock.fulfilled, (state, { payload }) => {
      state.clockList = payload;
      state.isLoading = false;
    });
    builder.addCase(getWorldClock.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default worldClockSlice.reducer;
