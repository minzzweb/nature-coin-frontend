import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import imageboard, { imageSaga } from "./imageboard";
import loading from "./loading";

const rootReducer = combineReducers({
  imageboard,
  loading,
});

export function* rootSaga() {
  yield all([imageSaga()]);
}

export default rootReducer;
