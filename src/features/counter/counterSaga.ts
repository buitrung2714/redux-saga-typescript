import { PayloadAction } from "@reduxjs/toolkit";
import { takeEvery, delay, put } from "redux-saga/effects";
import { incrementSaga, incrementSuccessSaga } from "./counterSlice";

export function* increment(action: PayloadAction<number>) {
  yield delay(1000);

  yield put(incrementSuccessSaga(action.payload));
}

export default function* counterSaga() {
  console.log("counter saga!");

  yield takeEvery(incrementSaga.toString(), increment);
}
