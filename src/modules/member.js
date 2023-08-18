import { handleActions, createAction } from "redux-actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { fetchMemberApi, modifyMemberApi } from "../lib/api";
import { startLoading, endLoading } from "../modules/loading";

//액션타입
//조회
export const FETCH_MEMBER_ONE = "member/FETCH_ONE";
const FETCH_MEMBER_SUCCESS = "member/FETCH_ONE_SUCCESS";
const FETCH_MEMBER_FAILURE = "member/FETCH_ONE_FAILURE";

//수정
//.................

//액션 함수
//조회
export const fetchMember = createAction(FETCH_MEMBER_ONE, (userNo) => userNo);
const fetchMemberSuccess = createAction(FETCH_MEMBER_SUCCESS, (data) => data);
const fetchMemberFailure = createAction(FETCH_MEMBER_FAILURE, (e) => e);

//수정
//....................

//saga
function* fetchMemberSage(action) {
  yield put(startLoading(FETCH_MEMBER_ONE));

  try {
    const response = yield call(fetchMemberApi, action.payload);

    yield put(fetchMemberSuccess(response.data));
  } catch (e) {
    yield put(fetchMemberFailure(e));
  }
  yield put(endLoading(FETCH_MEMBER_ONE));
}

export function* memberSaga() {
  yield takeLatest(FETCH_MEMBER_ONE, fetchMemberSage);
}

const initialState = {
  member: null,
  error: null,
};

//리듀서
const member = handleActions(
  {
    [FETCH_MEMBER_SUCCESS]: (state, action) => ({
      ...state,
      member: action.payload,
    }),
    [FETCH_MEMBER_FAILURE]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  initialState
);

export default member;
