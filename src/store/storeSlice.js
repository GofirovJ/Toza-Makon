import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categories: [],
  services: [],
  tabId: null,
  serviceId: null,
};

export const getDatas = createSlice({
  name: "getDatas",
  initialState,
  reducers: {
    //
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
    getServices: (state, action) => {
      state.services = action.payload;
    },
    tabId: (state, action) => {
      state.tabId = action.payload;
    },
    serviceId: (state, action) => {
      state.serviceId = action.payload;
    },
  },
});
export const { getCategories, getServices, tabId, serviceId } =
  getDatas.actions;
export default getDatas.reducer;
