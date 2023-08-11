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
import Posts from "./components/Posts";
import PostLists from "./components/PostLists";
import ItemListContainer from "./containers/ItemListContainer";
import ItemRegisterContainer from "./containers/ItemRegisterContainer";
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

        {/*아이템 게시판*/}
        <Route path="/item/create" element={<ItemRegisterContainer />} />
        <Route path="/items" element={<ItemListContainer />} />
        {/* 
             <Route path="/image/read" element={<ImageReadContainer />} />
        <Route path="/image/modify" element={<ImageModifyContainer />} />
        <Route path="/image/read" element={<ImageReadContainer />} />
        */}
        {/* <Route path="/items" element={<ItemListContainer />} />*/}
        {/*<Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />*/}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
