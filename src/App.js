import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import HeaderContainer from "./containers/HeaderContainer";
import Footer from "./components/Footers/Footer";
import HomeContainer from "./containers/HomeContainer";
import ImageListContainer from "./containers/ImageListContainer";
import ImageRegisterContainer from "./containers/ImageRegisterContainer";
import ImageModifyContainer from "./containers/ImageModifyContainer";
import ImageReadContainer from "./containers/ImageReadContainer";
import AlbumContainer from "./containers/AlbumContainer";
import SignUpContainer from "./containers/SignUpContainer";
import NotFound from "./components/NotFound";
import ItemListContainer from "./containers/ItemListContainer";
import CategoryContainer from "./containers/CategoryContainer";
import SignInContainer from "./containers/SignInContainer";
import AdminSetupContainer from "./containers/AdminSetupContainer";

function App() {
  return (
    <Router>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        {/*이미지 게시판*/}
        <Route path="/image/create" element={<ImageRegisterContainer />} />
        <Route path="/image/list" element={<AlbumContainer />}>
          <Route index element={<ImageListContainer />} />
          <Route path=":category" element={<CategoryContainer />} />
        </Route>
        <Route path="/image/read/:imageId" element={<ImageReadContainer />} />
        <Route path="/image/edit/:imageId" element={<ImageModifyContainer />} />

        {/*아이템 게시판*/}
        <Route path="/items" element={<ItemListContainer />} />

        {/*로그인, 회원가입*/}
        <Route path="/signin" element={<SignInContainer />} />
        <Route path="/signup" element={<SignUpContainer />} />

        {/*관리자*/}
        <Route path="/member/setup" element={<AdminSetupContainer />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
