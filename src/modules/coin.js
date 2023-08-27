import { createAction, handleActions } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { startLoading, endLoading } from "../modules/loading";
import * as api from "../lib/api";

//액션타입
//코인지급된 게시판 목록
export const FETCH_GRANTED_LIST = "coin/FETCH_GRANTCOIN_LIST";
const FETCH_GRANTED_LIST_SUCCESS = "coin/FETCH_GRANTCOIN_LIST_SUCCESS";
const FETCH_GRANTED_LIST_FAILURE = "coin/FETCH_GRANTCOIN_LIST_FAILURE";

//코인지급된 게시판
export const FETCH_GRANTED = "coin/FETCH_GRANTED";
const FETCH_GRANTED_SUCCESS = "coin/FETCH_GRANTED_SUCCESS";
const FETCH_GRANTED_FAILURE = "coin/FETCH_GRANTED_FAILURE";

//액션 생성함수
export const fetchGrantedList = createAction(FETCH_GRANTED_LIST);
export const fetchGranted = createAction(FETCH_GRANTED, (imageId) => imageId);

const fetchGrantedListSuccess = createAction(
  FETCH_GRANTED_LIST_SUCCESS,
  (data) => data
);

const fetchGrantedListfailure = createAction(
  FETCH_GRANTED_LIST_FAILURE,
  (e) => e
);

const fetchGrantedSuccess = createAction(FETCH_GRANTED_SUCCESS, (data) => data);

const fetchGrantedfailure = createAction(FETCH_GRANTED_FAILURE, (e) => e);

function* fetchGrantedListSaga() {
  yield put(startLoading(FETCH_GRANTED_LIST));
  try {
    const response = yield call(api.grantCoinsListApi);
    yield put(fetchGrantedListSuccess(response.data));
  } catch (e) {
    yield put(fetchGrantedListfailure(e));
  }
  yield put(endLoading(FETCH_GRANTED_LIST));
}

function* fetchGrantedSaga(action) {
  try {
    const response = yield call(api.grantedImageApi, action.payload);
    yield put(fetchGrantedSuccess(response.data));
  } catch (e) {
    yield put(fetchGrantedfailure(e));
  }
}

export function* coinSaga() {
  yield takeLatest(FETCH_GRANTED_LIST, fetchGrantedListSaga);
  yield takeLatest(FETCH_GRANTED, fetchGrantedSaga);
}

const initialState = {
  grantedImage: null,
  grantedImages: [],
  error: null,
};

const coin = handleActions(
  {
    [FETCH_GRANTED_LIST_SUCCESS]: (state, action) => ({
      ...state,
      grantedImages: action.payload,
    }),
    [FETCH_GRANTED_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [FETCH_GRANTED_SUCCESS]: (state, action) => ({
      ...state,
      grantedImage: action.payload,
    }),
    [FETCH_GRANTED_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default coin;
