import React from "react";
import AdminSetupForm from "../../components/signup/AdminSetupForm";
import "react-toastify/dist/ReactToastify.css";
import { adminSetup } from "../../lib/api";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminSetupContainer = () => {
  const navigate = useNavigate();

  //등록처리
  const onRegister = async (values) => {
    const { email, nickname, password } = values;

    console.log("reegister");
    try {
      await adminSetup(email, nickname, password);

      toast.success(<h3>등록이 완료되었습니다.</h3>, {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);

      navigate("/signin");
    } catch (e) {
      toast.error(e.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <AdminSetupForm onRegister={onRegister} />
    </>
  );
};

export default AdminSetupContainer;
