import React from "react";
import AdminSetupForm from "../../components/signup/AdminSetupForm";
import "react-toastify/dist/ReactToastify.css";
import { adminSetup, checkNicknameApi } from "../../lib/api";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminSetupContainer = () => {
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
  const onRegister = async (values) => {
    const { email, nickname, password } = values;

    try {
      await adminSetup(email, nickname, password);

      toast.success(<h3>등록이 완료되었습니다.</h3>, {
        position: "top-center",
        autoClose: 1000,
      });

      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (e) {
      toast.error(e.response.data, {
        position: "top-center",
        autoClose: 10,
      });
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <AdminSetupForm
        onRegister={onRegister}
        handleCheckDuplicate={handleCheckDuplicate}
      />
    </>
  );
};

export default AdminSetupContainer;
