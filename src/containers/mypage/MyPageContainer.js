import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMember, FETCH_MEMBER_ONE } from "../../modules/member";
import {
  fetchMyImageList,
  FETCH_MYIMAGE_LIST,
  fetchMainImageList,
} from "../../modules/imageboard";
import { getAuthorized, isAdmin, isMember } from "../../modules/selector";
import Profile from "../../components/mypage/Profile";
import MyImageList from "../../components/mypage/MyImageList";
import { fetchUserItemList, FETCH_USERITEMLIST } from "../../modules/useritem";
import { fetchGrantedList } from "../../modules/coin";
import MyItemList from "../../components/mypage/MyItemList";
import MyPageMenu from "../../components/mypage/MyPageMenu";
import BasicPagination from "../../components/common/BasicPagination";
const MyPageContainer = ({ isAuthorized, isAdmin, isMember }) => {
  const { userNo } = useParams();
  const dispatch = useDispatch();

  const {
    member,
    isLoading,
    myInfo,
    images,
    isImageListLoading,
    isUseritemListLoading,
    userItems,
    grantedImages,
    count,
    userItemCount,
  } = useSelector(({ member, loading, auth, image, useritem, coin }) => ({
    member: member.member,
    isLoading: loading[FETCH_MEMBER_ONE],
    myInfo: auth.myInfo,
    images: image.images,
    isImageListLoading: loading[FETCH_MYIMAGE_LIST],
    userItems: useritem.userItems,
    isUseritemListLoading: loading[FETCH_USERITEMLIST],
    grantedImages: coin.grantedImages,
    count: image.count,
    userItemCount: useritem.count,
  }));

  const [showImageList, setShowImageList] = useState(true);

  const [showUserItemList, setShowUserItemList] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  //내 이미지 가져오기 함수(유저)
  const myImageList = async () => {
    const imageWriter = myInfo.nickname;
    dispatch(fetchMyImageList(imageWriter, currentPage));
    setShowImageList(true);
    setShowUserItemList(false);
  };

  //전체 이미지 가져오기 함수(관리자)
  const imageListAll = async () => {
    dispatch(fetchMainImageList(currentPage));
    setShowImageList(true);
  };

  //내가 산 기프티콘 가져오기 함
  const userItemList = async () => {
    dispatch(fetchUserItemList(currentPage));
    setCurrentPage(1);
    setShowImageList(false);
    setShowUserItemList(true);
    console.log(currentPage);
  };

  useEffect(() => {
    dispatch(fetchMember(userNo));
  }, [dispatch, userNo]);

  useEffect(() => {
    if (myInfo && isMember) {
      myImageList();
    }
  }, [myInfo, isMember, currentPage]);

  useEffect(() => {
    if (myInfo && isAdmin) {
      imageListAll();
    }
  }, [myInfo, isAdmin, currentPage]);

  useEffect(() => {
    dispatch(fetchGrantedList());
  }, [dispatch]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Profile
        member={member}
        isLoading={isLoading}
        userNo={userNo}
        myInfo={myInfo}
        myImageList={myImageList}
        userItemList={userItemList}
      />
      <MyPageMenu
        isAuthorized={isAuthorized}
        isAdmin={isAdmin}
        isMember={isMember}
        imageListAll={imageListAll}
        myImageList={myImageList}
        userItemList={userItemList}
        showImageList={showImageList}
        showUserItemList={showUserItemList}
      />
      {showImageList && (
        <MyImageList
          images={images}
          isLoading={isImageListLoading}
          grantedImages={grantedImages}
          count={count}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
      {showUserItemList && isMember && (
        <MyItemList
          userItems={userItems}
          isLoading={isUseritemListLoading}
          count={userItemCount}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default connect((state) => {
  return {
    isAuthorized: getAuthorized(state),
    isAdmin: isAdmin(state),
    isMember: isMember(state),
  };
})(MyPageContainer);
