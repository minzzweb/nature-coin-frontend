import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import SignInForm from "../components/Login/SignInForm";
import { login } from "../modules/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignInContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { accessToken } = useSelector(({ auth }) => ({
    accessToken: auth.accessToken,
  }));

  const onSignIn = (email, password) => {
    console.log("notencodedEmail" + email);
    console.log("notencodedPassword" + password);

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
      alert("로그인 되었습니다.");
      navigate("/");
    }
  }, [accessToken, dispatch, navigate]);

  return <SignInForm onSignIn={onSignIn} />;
};

export default SignInContainer;
