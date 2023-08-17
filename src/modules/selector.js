import { createSelector } from "reselect";

//액세스토큰 전달
const getAccessToken = (state) => state.auth.accessToken;

//로그인한 사용자 정보 전달
const getMyInfo = (state) => state.auth.myInfo;

//로그인여부 확인
export const getAuthorized = createSelector(
  [getAccessToken, getMyInfo],
  (accessToken, myInfo) => accessToken.length > 0 && !!myInfo
);

//관리자인지 확인
export const isAdmin = createSelector(
  [getAuthorized, getMyInfo],
  (isAuthorized, myInfo) =>
    isAuthorized && myInfo.authList[0].auth === "ROLE_ADMIN"
);

//회원인지 확인
export const isMember = createSelector(
  [getAuthorized, getMyInfo],
  (isAuthorized, myInfo) =>
    isAuthorized && myInfo.authList[0].auth === "ROLE_MEMBER"
);
