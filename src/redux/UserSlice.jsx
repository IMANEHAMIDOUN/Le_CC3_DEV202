import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getuser = createAsyncThunk(
    "user/getuser",
    async () => {
      const response = await axios.get("https://dummyjson.com/users");
      return response.data;
    }
  );
  

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getuser.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(getuser.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.data = action.payload;
        state.loading = "idle";
      }
    });
    builder.addCase(getuser.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Error occured";
      }
    });
  },
});

export default userSlice.reducer;
