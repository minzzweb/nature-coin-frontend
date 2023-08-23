import { createAction, handleActions } from "redux-actions";
import { grantCoinsToUserApi } from "../lib/api";
import { takeLatest, call, put } from "redux-saga/effects";
import { startLoading, endLoading } from "../modules/loading";

//액션타입
export const FETCH_GRANTCOIN_LIST = "coin/FETCH_GRANTCOIN_LIST";
const FETCH_GRANTCOIN_LIST_SUCCESS = "coin/FETCH_GRANTCOIN_LIST_SUCCESS";
const FETCH_GRANTCOIN_LIST_FAILURE = "coin/FETCH_GRANTCOIN_LIST_FAILURE";

//액션 생성함수
export const fetchGrantCoinList = createAction(FETCH_GRANTCOIN_LIST);

const fetchCoinListSuccess = createAction(
  FETCH_GRANTCOIN_LIST_SUCCESS,
  (data) => data
);

const fetchCoinListfailure = createAction(
  FETCH_GRANTCOIN_LIST_FAILURE,
  (e) => e
);

function* fetchCoinListSaga() {
  yield put(startLoading(FETCH_GRANTCOIN_LIST));
  try {
    const response = yield call(grantCoinsToUserApi);
    yield put(fetchCoinListSuccess(response.data));
  } catch (e) {
    yield put(fetchCoinListfailure(e));
  }
  yield put(endLoading(FETCH_GRANTCOIN_LIST));
}

export function* coinSaga() {
  yield takeLatest(FETCH_GRANTCOIN_LIST, fetchCoinListSaga);
}

const initialState = {
  chargeCoins: [],
  error: null,
};

const coin = handleActions(
  {
    [FETCH_GRANTCOIN_LIST]: (state) => ({
      ...state,
      chargeCoins: [],
    }),
    [FETCH_GRANTCOIN_LIST_SUCCESS]: (state, action) => ({
      ...state,
      chargeCoins: action.payload,
    }),
    [FETCH_GRANTCOIN_LIST_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default coin;
