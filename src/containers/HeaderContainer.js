import React from "react";
import { connect } from "react-redux";
import Header from "../components/Headers/Header";
import { getAuthorized } from "../modules/selector"; //로그인 여부

const HeaderContainer = ({ isAuthorized, myInfo }) => {
  return <Header myInfo={myInfo} isAuthorized={isAuthorized} />;
};

export default connect((state) => {
  return {
    isAuthorized: getAuthorized(state), //인증상태
    myInfo: state.auth.myInfo, //사용자정보
  };
})(HeaderContainer);
