import authSaga from "features/auth/authSaga";
import { all } from "redux-saga/effects";
import counterSaga from "../features/counter/counterSaga";

export default function* rootSaga() {
  console.log("Root saga!");

  yield all([counterSaga(), authSaga()]);
}
