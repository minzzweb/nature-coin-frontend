import React, { useEffect } from "react";
import ProfileModifyForm from "../components/mypage/ProfileModifyForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMember, FETCH_MEMBER_ONE } from "../modules/member";
import { modifyMemberApi } from "../lib/api";

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

  const onModify = async (nickname, file) => {
    try {
      const memberObject = {
        userNo: userNo,
        nickname: nickname,
      };

      const formData = new FormData();
      formData.append("file", file);
      formData.append("member", JSON.stringify(memberObject));

      await modifyMemberApi(formData);

      alert("수정되었습니다.");
      navigate("/member/mypage/" + userNo);
    } catch (e) {
      if (e.response.status === 400) {
        alert("잘못된 요청입니다.");
      } else if (e.response.status === 401) {
        alert("로그인이 필요합니다.");
        navigate("/signin");
      } else if (e.response.status === 403) {
        alert("접근 권한이 없습니다.");
        navigate();
      } else {
        alert(e.response.data.message);
      }
    }
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
