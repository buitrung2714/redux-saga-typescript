import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/user";

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state, action: PayloadAction<LoginPayload>) => {
      state.logging = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.logging = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.logging = false;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.logging = false;
      state.currentUser = undefined;
    },
  },
});

//Actions
export const authActions = authSlice.actions;

//Selector
export const loggedSelector = (state: any) => state.auth.isLoggedIn;
export const loggingSelector = (state: any) => state.auth.logging;

//Reducer
const authReducer = authSlice.reducer;
export default authReducer;