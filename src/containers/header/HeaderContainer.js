import React, { useEffect } from "react";
import Header from "../../components/headers/Header";
import { connect, useDispatch, useSelector } from "react-redux";
import { getAuthorized, isAdmin, isMember } from "../../modules/selector"; //로그인 여부
import { setAccessToken, setMyInfo } from "../../modules/auth";
import client from "../../lib/client";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { fetchUserCoin } from "../../modules/coin";

const HeaderContainer = ({ isAuthorized, myInfo, isAdmin, isMember }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userCoin } = useSelector(({ coin }) => ({
    userCoin: coin.userCoin,
  }));

  useEffect(() => {
    dispatch(fetchUserCoin());
    //console.log("userCoin header!!!" + userCoin);
  }, [userCoin]);

  //로그아웃 함수
  const onLogout = () => {
    delete client.defaults.headers.common.Authorization;
    Cookies.remove("accessToken");
    dispatch(setAccessToken(""));
    dispatch(setMyInfo(null));

    navigate("/");
  };

  return (
    <Header
      myInfo={myInfo}
      isAuthorized={isAuthorized}
      onLogout={onLogout}
      isAdmin={isAdmin}
      isMember={isMember}
      userCoin={userCoin}
    />
  );
};

export default connect((state) => {
  return {
    isAuthorized: getAuthorized(state), //인증상태 true or false
    myInfo: state.auth.myInfo, //사용자정보
    isAdmin: isAdmin(state),
    isMember: isMember(state),
  };
})(HeaderContainer);
