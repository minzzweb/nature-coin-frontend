import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "./components/Headers/Header";
import Footer from "./components/Footers/Footer";
import HomeContainer from "./containers/HomeContainer";
import ImageListContainer from "./containers/ImageListContainer";
import ImageRegisterContainer from "./containers/ImageRegisterContainer";
import ImageModifyContainer from "./containers/ImageModifyContainer";
import ImageReadContainer from "./containers/ImageReadContainer";
import AlbumContainer from "./containers/AlbumContainer";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import NotFound from "./components/NotFound";
import ItemListContainer from "./containers/ItemListContainer";
import CategoryContainer from "./containers/CategoryContainer";
function App() {
  return (
    <Router>
      <Header />
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

        {/*<Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />*/}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
