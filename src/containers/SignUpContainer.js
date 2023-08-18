import React from "react";
import SignUpForm from "../components/SignUp/SignUpForm";
import "react-toastify/dist/ReactToastify.css";
import { signUp } from "../lib/api";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUpContainer = () => {
  const navigate = useNavigate();

  //등록처리
  const onSignUp = async (values) => {
    const { email, nickname, password } = values;

    console.log("onSignUp");
    try {
      await signUp(email, nickname, password);

      toast.success(<h3>회원가입이 완료되었습니다.</h3>, {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (e) {
      toast.error(e.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <SignUpForm onSignUp={onSignUp} />
    </>
  );
};

export default SignUpContainer;
