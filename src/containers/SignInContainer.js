import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignInForm from "../components/Login/SignInForm";
import { checkMyInfo, login } from "../modules/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { accessToken, myInfo } = useSelector(({ auth }) => ({
    accessToken: auth.accessToken,
    myInfo: auth.myInfo,
  }));

  const onSignIn = (email, password) => {
    try {
      dispatch(login({ email, password }));

      toast.success(<h3>로그인 성공</h3>, {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (e) {
      toast.error("비밀번호를 다시 확인해주세요!", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    if (accessToken) {
      dispatch(checkMyInfo()); //로그인 후 토큰 있으면 checkMyInfo보내서  사용자정보 응답받아 state에 저장
    }
  }, [accessToken, dispatch, navigate]);

  useEffect(() => {
    if (myInfo) {
      alert("로그인 되었습니다.");

      navigate("/");
    }
  }, [myInfo, navigate]);

  return <SignInForm onSignIn={onSignIn} />;
};

export default SignInContainer;
