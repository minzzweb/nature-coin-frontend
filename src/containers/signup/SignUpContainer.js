import React from "react";
import SignUpForm from "../../components/signup/SignUpForm";
import "react-toastify/dist/ReactToastify.css";
import { signUp, checkNicknameApi } from "../../lib/api";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUpContainer = () => {
  const navigate = useNavigate();

  //닉네임 중복 체크
  const handleCheckDuplicate = async (values) => {
    const { nickname } = values;

    try {
      const response = await checkNicknameApi(nickname);
      toast.success(response.data, {
        position: "top-center",
        autoClose: 1000,
      });
    } catch (e) {
      toast.error(e.response.data, {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  //등록처리
  const onSignUp = async (values) => {
    const { email, nickname, password } = values;

    console.log("onSignUp");
    try {
      await signUp(email, nickname, password);

      toast.success(<h3>회원가입이 완료되었습니다.</h3>, {
        position: "top-center",
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (e) {
      if (e.response && e.response.data && e.response.data.message) {
        if (e.response.data.message.includes("Duplicate entry")) {
          toast.error(<h3>이미 사용 중인 이메일 또는 닉네임입니다.</h3>, {
            position: "top-center",
            autoClose: 1000,
          });
        }
      } else if (e.response && e.response.status === 500) {
        toast.error(<h3>회원가입 에러</h3>, {
          position: "top-center",
          autoClose: 1000,
        });
      }
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <SignUpForm
        onSignUp={onSignUp}
        handleCheckDuplicate={handleCheckDuplicate}
      />
    </>
  );
};

export default SignUpContainer;
