import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageRegisterForm from "../components/Image_board/ImageRegisterForm";
import { registImageApi } from "../lib/api";

const ImageRegisterContainer = () => {
  const navigete = useNavigate();

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
      navigete("/image/read/" + response.data.imageId);
    } catch (e) {
      if (e.response.status === 400) {
        alert("잘못된 요청입니다.");
      } else if (e.response.status === 401) {
        alert("로그인이 필요합니다.");
        navigete("/signin");
      } else if (e.response.status === 403) {
        alert("접근 권한이 없습니다.");
        navigete();
      } else {
        alert(e.response.data.message);
      }
    }
  };
  return <ImageRegisterForm onRegister={onRegister} />;
};
export default ImageRegisterContainer;
