import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMember, FETCH_MEMBER_ONE } from "../modules/member";
import {
  fetchMyImageList,
  FETCH_MYIMAGE_LIST,
  fetchMainImageList,
  FETCH_MAINIMAGE_LIST,
} from "../modules/imageboard";
import { getAuthorized, isAdmin, isMember } from "../modules/selector"; //로그인 여부
import Profile from "../components/mypage/Profile";
import MyList from "../components/mypage/MyList";
import loading from "../modules/loading";
import axios from "axios";

const MyPageContainer = ({ isAuthorized, isAdmin, isMember }) => {
  const { userNo } = useParams();
  const dispatch = useDispatch();

  const { member, isLoading, myInfo, images, isImageListLoading } = useSelector(
    ({ member, loading, auth, image }) => ({
      member: member.member,
      isLoading: loading[FETCH_MEMBER_ONE],
      myInfo: auth.myInfo,
      images: image.images,
      isImageListLoading: loading[FETCH_MYIMAGE_LIST],
    })
  );

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
    if (myInfo && isMember) {
      myImageList();
    }
    if (myInfo && isAdmin) {
      imageListAll();
    }
  }, [dispatch, userNo]);

  //내가 산 기프티콘 가져오기 함수
  const myItemList = () => {
    //..
  };

  return (
    <>
      <Profile
        member={member}
        isLoading={isLoading}
        userNo={userNo}
        myInfo={myInfo}
        myImageList={myImageList}
        myItemList={myItemList}
        isAuthorized={isAuthorized}
        isAdmin={isAdmin}
        isMember={isMember}
        imageListAll={imageListAll}
      />

      <MyList images={images} isLoading={isImageListLoading} />
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
