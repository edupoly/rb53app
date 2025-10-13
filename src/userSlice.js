import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    login: (state, action) => {
      var localUsers = JSON.parse(window.localStorage.getItem("users")) || [];
      if (localUsers.length == 0) {
        alert("Register First User");
      } else {
        var user = localUsers.find((usr) => {
          if (
            usr.username === action.payload.username &&
            usr.password === action.payload.password
          ) {
            return true;
          }
        });
        if (user) {
          state.user = user;
          alert("login success indi");
        } else {
          alert("login failed indi");
        }
      }
    },
    signup: (state, action) => {
      let localUsers = JSON.parse(window.localStorage.getItem("users")) || [];
      localUsers.push(action.payload);
      window.localStorage.setItem("users", JSON.stringify(localUsers));
    },
    logout: (state) => {
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, signup, logout } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
