import { Outlet } from "react-router-dom";

const AlbumContainer = () => {
  return (
    <div style={{ padding: 20, marginTop: "70px" }}>
      <Outlet />
    </div>
  );
};

export default AlbumContainer;
