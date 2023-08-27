import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignInForm from "../../components/login/SignInForm";
import { checkMyInfo, loginfailure, login } from "../../modules/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { accessToken, myInfo, error } = useSelector(({ auth }) => ({
    accessToken: auth.accessToken,
    myInfo: auth.myInfo,
    error: auth.error,
  }));

  const onSignIn = (email, password) => {
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (error) {
      if (error.response && error.response.status === 401) {
        toast.error("로그인에 실패했습니다. 다시 시도해주세요.", {
          position: "top-center",
        });
      }
      dispatch(loginfailure(null));
    } else if (accessToken) {
      dispatch(checkMyInfo()); //로그인 후 토큰 있으면 checkMyInfo보내서  사용자정보 응답받아 state에 저장
    }
  }, [accessToken, error, dispatch, navigate]);

  useEffect(() => {
    if (myInfo) {
      toast.success("로그인 되었습니다!", {
        position: "top-center",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [myInfo, navigate]);

  return <SignInForm onSignIn={onSignIn} />;
};

export default SignInContainer;
