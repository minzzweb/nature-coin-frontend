import React, { useEffect } from "react";
import ProfileModifyForm from "../components/mypage/ProfileModifyForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMember, FETCH_MEMBER_ONE } from "../modules/member";
import axios from "axios";

const ModifyProfileContainer = () => {
  const { userNo } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { member, isLoading } = useSelector(({ member, loading }) => ({
    member: member.member,
    isLoading: loading[FETCH_MEMBER_ONE],
  }));

  useEffect(() => {
    dispatch(fetchMember(userNo));
  }, [dispatch, userNo]);

  const onModify = (nickname, file) => {
    const memberObject = {
      userNo: userNo,
      nickname: nickname,
    };
    const formData = new FormData();
    formData.append("file", file);
    formData.append("member", JSON.stringify(memberObject));
    axios
      .put("/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert("수정되었습니다.");
        navigate("/member/mypage/" + userNo);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  return (
    <ProfileModifyForm
      userNo={userNo}
      member={member}
      isLoading={isLoading}
      onModify={onModify}
    />
  );
};
export default ModifyProfileContainer;
