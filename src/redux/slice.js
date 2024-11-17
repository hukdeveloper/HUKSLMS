import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  isSidebarOpen: false,
  isLoaderLoading: false,
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
    changeSidebarMode: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    changeLoadingLoader: (state, action) => {
      state.isLoaderLoading = action.payload;
    },
  },
});

export const { changeMode, changeSidebarMode, changeLoadingLoader } =
  Slice.actions;

export default Slice.reducer;
