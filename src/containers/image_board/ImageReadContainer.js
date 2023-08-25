import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImage, FETCH_IMAGE } from "../../modules/imageboard";
import ImageRead from "../../components/Image_board/ImageRead";
import { useParams } from "react-router-dom";
import { removeImageApi } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { grantCoinsToUserApi } from "../../lib/api";

const ImageReadContainer = () => {
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

  //삭제 함수
  const onRemove = async () => {
    try {
      await removeImageApi(imageId);
      alert("삭제되었습니다.");
      navigate("/image/list/" + categoryName);
    } catch (e) {
      console.log(e);
    }
  };

  //코인 적립 함수
  const onGrantCoin = async () => {
    try {
      await grantCoinsToUserApi(image.imageId, image.imageWriter, 500);
      alert("코인이 적립되었습니다.");
    } catch (error) {
      console.log("Error granting coins:", error);
    }
  };

  return (
    <ImageRead
      imageId={imageId}
      image={image}
      isLoading={isLoading}
      categoryName={categoryName}
      onRemove={onRemove}
      myInfo={myInfo}
      onGrantCoin={onGrantCoin}
    />
  );
};
export default ImageReadContainer;
