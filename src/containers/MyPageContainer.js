import React from "react";
import Profile from "../components/mypage/Profile";
import MyList from "../components/mypage/MyList";

const MyPageContainer = () => {
  const myImageList = () => {
    //..
  };
  const myItemList = () => {
    //..
  };
  return (
    <>
      <Profile myImageList={myImageList} myItemList={myItemList} />
      <MyList />
    </>
  );
};

export default MyPageContainer;
