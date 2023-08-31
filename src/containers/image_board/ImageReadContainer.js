import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchImage, FETCH_IMAGE } from "../../modules/imageboard";
import ImageRead from "../../components/Image_board/ImageRead";
import { useParams, useLocation } from "react-router-dom";
import { removeImageApi } from "../../lib/api";
import { useNavigate } from "react-router-dom";
import { grantCoinsToUserApi } from "../../lib/api";
import { fetchGranted } from "../../modules/coin";
import member, { fetchMember } from "../../modules/member";

const ImageReadContainer = () => {
  const { userNo, imageId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = queryParams.get("page");
  const isMypage = location.pathname.includes("member");

  const { image, categoryName, isLoading, grantedImage, myInfo, member } =
    useSelector(({ auth, image, loading, coin, member }) => ({
      image: image.image,
      categoryName: image.categoryName,
      isLoading: loading[FETCH_IMAGE],
      myInfo: auth.myInfo,
      member: member.member,
      grantedImage: coin.grantedImage,
    }));

  useEffect(() => {
    dispatch(fetchImage(imageId));
    dispatch(fetchGranted(imageId));
  }, [dispatch, imageId]);

  useEffect(() => {
    dispatch(fetchMember(userNo));
  }, [dispatch]);

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
      currentPage={currentPage}
      isMypage={isMypage}
      member={member}
    />
  );
};
export default ImageReadContainer;
