import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchMember, FETCH_MEMBER_ONE } from "../modules/member";
import Profile from "../components/mypage/Profile";
import MyList from "../components/mypage/MyList";

const MyPageContainer = () => {
  const { userNo } = useParams();
  const dispatch = useDispatch();

  const { member, isLoading, myInfo } = useSelector(
    ({ member, loading, auth }) => ({
      member: member.member,
      isLoading: loading[FETCH_MEMBER_ONE],
      myInfo: auth.myInfo,
    })
  );

  useEffect(() => {
    dispatch(fetchMember(userNo));
  }, [dispatch, userNo]);

  //내 이미지 가져오기 함수
  const myImageList = () => {
    //..
  };

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
        myImageList={myImageList}
        myInfo={myInfo}
        myItemList={myItemList}
      />
      <MyList />
    </>
  );
};

export default MyPageContainer;
