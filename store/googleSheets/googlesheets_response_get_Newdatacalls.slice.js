import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const googlesheets_get_spreadsheetId_read = createAsyncThunk("googlesheets_response_get_Newdatacalls/googlesheets_get_spreadsheetId_read", async payload => {
  const response = await apiService.googlesheets_get_spreadsheetId_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const googlesheets_response_get_NewdatacallsSlice = createSlice({
  name: "googlesheets_response_get_Newdatacalls",
  initialState,
  reducers: {},
  extraReducers: {
    [googlesheets_get_spreadsheetId_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [googlesheets_get_spreadsheetId_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [googlesheets_get_spreadsheetId_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  googlesheets_get_spreadsheetId_read,
  slice: googlesheets_response_get_NewdatacallsSlice
};