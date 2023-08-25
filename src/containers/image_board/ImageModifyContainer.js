import React, { useEffect } from "react";
import ImageModifyForm from "../../components/Image_board/ImageModifyForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchImage, FETCH_IMAGE } from "../../modules/imageboard";
import { modifyImageApi } from "../../lib/api";

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
  const onModify = async (imageTitle, imageContent, file) => {
    const imageObject = {
      imageId: imageId,
      imageTitle: imageTitle,
      imageContent: imageContent,
    };
    const formData = new FormData();

    formData.append("file", file);
    formData.append("image", JSON.stringify(imageObject));

    try {
      const response = await modifyImageApi(formData);

      alert("수정이 완료되었습니다.");
      navigate("/image/read/" + response.data.imageId);
    } catch (e) {
      if (e.response.status === 400) {
        alert("잘못된 요청입니다.");
      } else if (e.response.status === 401) {
        alert("로그인이 필요합니다.");
        navigate("/signin");
      } else if (e.response.status === 403) {
        alert("접근 권한이 없습니다.");
        navigate.goBack();
      } else {
        alert(e.response.data.message);
      }
    }
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
