import axios from "axios";
import { GOOGLE_SHEETS_TOKEN } from "react-native-dotenv";
const googleSheets = axios.create({
  baseURL: "https://sheets.googleapis.com/v4/spreadsheets",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${GOOGLE_SHEETS_TOKEN}`
  }
});

function googlesheets_get_spreadsheetId_read(payload) {
  return googleSheets.get(`/${payload.spreadsheetId}`);
}

export const apiService = {
  googlesheets_get_spreadsheetId_read
};