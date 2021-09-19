import { PayloadAction } from "@reduxjs/toolkit";
import { fork, take, delay, call, put } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";
import { push } from "connected-react-router";

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(500);
    localStorage.setItem("access_token", "sdasdsa");
    yield put(
      authActions.loginSuccess({
        id: 1,
        name: "tyson",
      })
    );

    //Redirect to admin page
    yield put(push("/admin"));
  } catch (error) {
    yield put(authActions.loginFailed("fail"));
  }
}

function* handleLogout() {
  yield delay(1000);
  localStorage.removeItem("access_token");
  yield put(push("/login"));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = localStorage.getItem("access_token");
    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.loginRequest.type
      );
      yield fork(handleLogin, action.payload);
    }

    yield take(authActions.logout.type);
    yield call(handleLogout);
  }
}

export default function* authSaga() {
  yield fork(watchLoginFlow);
}
