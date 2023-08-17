import React from "react";
import Header from "../components/Headers/Header";
import { connect, useDispatch } from "react-redux";
import { getAuthorized } from "../modules/selector"; //로그인 여부
import { setAccessToken, setMyInfo } from "../modules/auth";
import client from "../lib/client";
import Cookies from "js-cookie";

const HeaderContainer = ({ isAuthorized, myInfo }) => {
  const dispatch = useDispatch();

  //로그아웃 함수
  const onLogout = () => {
    delete client.defaults.headers.common.Authorization;
    Cookies.remove("accessToken");
    dispatch(setAccessToken(""));
    dispatch(setMyInfo(null));
  };

  return (
    <Header myInfo={myInfo} isAuthorized={isAuthorized} onLogout={onLogout} />
  );
};

export default connect((state) => {
  return {
    isAuthorized: getAuthorized(state), //인증상태 true or false
    myInfo: state.auth.myInfo, //사용자정보
  };
})(HeaderContainer);
