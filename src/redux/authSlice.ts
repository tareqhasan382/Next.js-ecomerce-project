/* eslint-disable @typescript-eslint/no-explicit-any */
// import { toast } from "react-toastify";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  token: string | null;
}
export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return null;
  }
  const storedAuthData = localStorage.getItem(key);
  return storedAuthData ? JSON.parse(storedAuthData) : null;
};
const initialState: IAuthState = {
  // token: getFromLocalStorage("auth") ,
  token: JSON.parse(localStorage.getItem("token") || "null"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<IAuthState>) => {
      // console.log("Auth:", action.payload.token);
      localStorage.setItem("auth", JSON.stringify(action.payload.token));

      state.token = action.payload.token;
    },
    removeToken: (state, action: PayloadAction<IAuthState>) => {
      // console.log("Auth:", action.payload.token);
      localStorage.removeItem("auth");

      state.token = action.payload.token;
    },
  },
});
export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
