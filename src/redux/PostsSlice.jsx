import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getposts = createAsyncThunk(
  "countries/getCountries",
  async () => {
    const response = await axios.get("https://dummyjson.com/posts");
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "countries",
  initialState: {
    data: [],
    loading: "idle",
    error: null,
    selectedposts: "",
  },
  reducers: {
    addCountry: (state, action) => {
      state.selectedposts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getposts.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    
    builder.addCase(getposts.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = "Error occured";
      }
    });
  },
});

export default postsSlice.reducer;
export const { addposts } = postsSlice.actions;
