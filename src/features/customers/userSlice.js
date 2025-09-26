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
  reducers: {
    updateUserDetails: (state, action) => {
      state.userDetails = { ...action.payload };
    },
    logout: (state) => {
      state.userDetails = { ...initialState.userDetails };
    },
  },
});
export const { updateUserDetails, logout } = userSlice.actions;
var userReducer = userSlice.reducer;
export default userReducer;
