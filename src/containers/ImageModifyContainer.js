import React, { useEffect } from "react";
import ImageModifyForm from "../components/Image_board/ImageModifyForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchImage, FETCH_IMAGE } from "../modules/imageboard";
import axios from "axios";

const ImageModifyContainer = () => {
  const { imageId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { image, categoryName, isLoading, myInfo } = useSelector(
    ({ image, loading, auth }) => ({
      image: image.image,
      categoryName: image.categoryName,
      isLoading: loading[FETCH_IMAGE],
      myInfo: auth.myInfo,
    })
  );

  useEffect(() => {
    dispatch(fetchImage(imageId));
  }, [dispatch, imageId]);

  //수정함수
  const onModify = (imageTitle, imageContent, file) => {
    const imageObject = {
      imageId: imageId,
      imageTitle: imageTitle,
      imageContent: imageContent,
    };
    const formData = new FormData();

    formData.append("file", file);
    formData.append("image", JSON.stringify(imageObject));

    axios
      .put("/image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("수정되었습니다.");
        navigate("/image/read/" + imageId);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  return (
    <ImageModifyForm
      imageId={imageId}
      image={image}
      isLoading={isLoading}
      categoryName={categoryName}
      onModify={onModify}
      myInfo={myInfo}
    />
  );
};
export default ImageModifyContainer;
