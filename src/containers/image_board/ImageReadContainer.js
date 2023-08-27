import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImage, FETCH_IMAGE } from "../../modules/imageboard";
import ImageRead from "../../components/Image_board/ImageRead";
import { useParams } from "react-router-dom";
import { removeImageApi } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { grantCoinsToUserApi } from "../../lib/api";
import { fetchGranted } from "../../modules/coin";

const ImageReadContainer = () => {
  const { imageId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { image, categoryName, isLoading, myInfo, grantedImage } = useSelector(
    ({ image, loading, auth, coin }) => ({
      image: image.image,
      categoryName: image.categoryName,
      isLoading: loading[FETCH_IMAGE],
      myInfo: auth.myInfo,
      grantedImage: coin.grantedImage,
    })
  );

  useEffect(() => {
    dispatch(fetchImage(imageId));
    dispatch(fetchGranted(imageId));
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
      const response = await grantCoinsToUserApi(
        image.imageId,
        image.imageWriter,
        500
      );
      alert(response.data);

      dispatch(fetchGranted(imageId));
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
      grantedImage={grantedImage}
    />
  );
};
export default ImageReadContainer;
