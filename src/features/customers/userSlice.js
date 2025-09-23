import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetails: {
    username: "",
    mobile: "",
    email: "",
    role: "",
    token: "",
  },
  ticketDetails: {
    movieName: "",
    timeStamp: "",
    theatre: "",
    show: "",
    seats: [],
    transactionDetails: {
      tid: "",
      modeOfPayment: "",
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
