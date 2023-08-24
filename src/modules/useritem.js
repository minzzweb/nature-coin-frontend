import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
import { takeLatest, call, put } from "redux-saga/effects";
import { startLoading, endLoading } from "../modules/loading";

export const FETCH_USERITEMLIST = "useritem/FETCH_USERITEMLIST";
const FETCH_ITEMLIST_SUCCESS = "useritem/FETCH_ITEMLIST_SUCCESS";
const FETCH_ITEMLIST_FAILURE = "useritem/FETCH_ITEMLIST_FAILURE";

export const fetchUserItemList = createAction(FETCH_USERITEMLIST);
const fetchUserItemSuccess = createAction(
  FETCH_ITEMLIST_SUCCESS,
  (data) => data
);
const fetchUserItemFailure = createAction(FETCH_ITEMLIST_SUCCESS, (e) => e);

function* fetchUserItemSaga(action) {
  yield put(startLoading(FETCH_USERITEMLIST));

  try {
    const response = yield call(api.fetchMyItemList, action.payload);

    yield put(fetchUserItemSuccess(response.data));
  } catch (e) {
    yield put(fetchUserItemFailure(e));
  }
  yield put(endLoading(FETCH_USERITEMLIST));
}

export function* userItemSaga() {
  yield takeLatest(FETCH_USERITEMLIST, fetchUserItemSaga);
}

// 초기 상태
const initialState = {
  userItems: [],
  error: null,
};

const useritem = handleActions(
  {
    [FETCH_USERITEMLIST]: (state) => ({
      ...state,
      userItems: [],
    }),
    [FETCH_ITEMLIST_SUCCESS]: (state, action) => ({
      ...state,
      userItems: action.payload,
    }),
    [FETCH_ITEMLIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default useritem;
