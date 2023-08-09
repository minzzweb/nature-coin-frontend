import { Outlet } from "react-router-dom";

const AlbumContainer = () => {
  return (
    <div style={{ padding: 20, marginTop: 70 }}>
      <h2>앨범 게시판 메인</h2>
      <Outlet />
    </div>
  );
};

export default AlbumContainer;
