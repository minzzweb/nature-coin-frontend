import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMember, FETCH_MEMBER_ONE } from "../modules/member";
import {
  fetchMyImageList,
  FETCH_MYIMAGE_LIST,
  fetchMainImageList,
} from "../modules/imageboard";
import { getAuthorized, isAdmin, isMember } from "../modules/selector"; //로그인 여부
import Profile from "../components/mypage/Profile";
import MyImageList from "../components/mypage/MyImageList";
import { fetchUserItemList, FETCH_USERITEMLIST } from "../modules/useritem";
import MyItemList from "../components/mypage/MyItemList";

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
  } = useSelector(({ member, loading, auth, image, useritem }) => ({
    member: member.member,
    isLoading: loading[FETCH_MEMBER_ONE],
    myInfo: auth.myInfo,
    images: image.images,
    isImageListLoading: loading[FETCH_MYIMAGE_LIST],
    userItems: useritem.userItems,
    isUseritemListLoading: loading[FETCH_USERITEMLIST],
  }));

  //내 이미지 가져오기 함수
  const myImageList = async () => {
    const imageWriter = myInfo.nickname;
    dispatch(fetchMyImageList(imageWriter));
  };

  //전체 이미지 가져오기 함수
  const imageListAll = async () => {
    dispatch(fetchMainImageList());
  };

  useEffect(() => {
    dispatch(fetchMember(userNo));
  }, [dispatch, userNo]);

  useEffect(() => {
    if (myInfo && isMember) {
      myImageList();
    }
  }, [myInfo, isMember]);

  useEffect(() => {
    if (myInfo && isAdmin) {
      imageListAll();
    }
  }, [myInfo, isAdmin]);

  //내가 산 기프티콘 가져오기 함
  const userItemList = async () => {
    dispatch(fetchUserItemList());
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
        isAuthorized={isAuthorized}
        isAdmin={isAdmin}
        isMember={isMember}
        imageListAll={imageListAll}
      />
      <MyImageList images={images} isLoading={isImageListLoading} />
      <MyItemList userItems={userItems} isLoading={isUseritemListLoading} />
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
