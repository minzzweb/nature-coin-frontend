import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderContainer from "./containers/header/HeaderContainer";
import Footer from "./components/footers/Footer";
import HomeContainer from "./containers/home/HomeContainer";
import ImageListContainer from "./containers/image_board/ImageListContainer";
import ImageRegisterContainer from "./containers/image_board/ImageRegisterContainer";
import ImageModifyContainer from "./containers/image_board/ImageModifyContainer";
import ImageReadContainer from "./containers/image_board/ImageReadContainer";
import AlbumContainer from "./containers/image_board/AlbumContainer";
import SignUpContainer from "./containers/signup/SignUpContainer";
import NotFound from "./components/NotFound";
import ItemListContainer from "./containers/item_board/ItemListContainer";
import CategoryContainer from "./containers/image_board/CategoryContainer";
import SignInContainer from "./containers/Signin/SignInContainer";
import AdminSetupContainer from "./containers/signup/AdminSetupContainer";
import MyPageContainer from "./containers/mypage/MyPageContainer";
import ModifyProfileContainer from "./containers/mypage/ModifyProfileContainer";

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

        {/*마이페이지*/}
        <Route path="/member/mypage/:userNo" element={<MyPageContainer />} />
        <Route
          path="/member/mypage/edit/:userNo"
          element={<ModifyProfileContainer />}
        />

        {/*관리자*/}
        <Route path="/member/setup" element={<AdminSetupContainer />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
