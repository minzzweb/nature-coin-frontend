import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImageRegisterForm from "../components/Image_board/ImageRegisterForm";

const ImageRegisterContainer = () => {
  const navigete = useNavigate();

  //등록 처리
  const onRegister = (imageTitle, imageContent, categoryId, file) => {
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
    axios
      .post("/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("등록되었습니다.");
        //navigete("/read/" + res.data.itemId);
        console.log(imageObject);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <ImageRegisterForm onRegister={onRegister} />;
};
export default ImageRegisterContainer;
