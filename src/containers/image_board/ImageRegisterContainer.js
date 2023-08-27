import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ImageRegisterForm from "../../components/Image_board/ImageRegisterForm";
import { registImageApi } from "../../lib/api";

const ImageRegisterContainer = () => {
  const navigate = useNavigate();

  //등록 처리
  const onRegister = async (imageTitle, imageContent, categoryId, file) => {
    try {
      //객체
      const imageObject = {
        imageTitle: imageTitle,
        imageContent: imageContent,
      };
      //FormData 객체 생성
      const formData = new FormData();
      formData.append("file", file);
      formData.append("image", JSON.stringify(imageObject));
      formData.append("categoryId", categoryId);

      const response = await registImageApi(formData);

      alert("등록이 완료되었습니다.");
      navigate("/image/read/" + response.data.imageId);
    } catch (e) {
      if (e.response.status === 400) {
        toast.error("모든 내용을 입력해주세요!.", {
          position: "top-center",
          autoClose: 1200,
        });
      } else if (e.response.status === 403) {
        toast.error("접근권환이 없습니다!.", {
          position: "top-center",
          autoClose: 1200,
        });
        navigate.goBack();
      } else {
        alert(e.response.data.message);
      }
    }
  };
  return <ImageRegisterForm onRegister={onRegister} />;
};
export default ImageRegisterContainer;
