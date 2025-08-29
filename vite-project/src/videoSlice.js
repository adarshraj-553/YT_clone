import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
  name: "video",
  initialState: {
    videos: [],
    category: "All",
  },
  reducers: {
    addVideos: (state, action) => {
      state.videos = action.payload;
    },
    addCategory: (state, action) => {
      state.category = action.payload;  
    },
  },
});


export const { addVideos, addCategory } = videoSlice.actions;
export default videoSlice.reducer;