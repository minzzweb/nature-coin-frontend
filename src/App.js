import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Headers/Header";
import Footer from "./components/Footers/Footer";
import MainContainer from "./containers/MainContainer";
import ImageRegisterContainer from "./containers/ImageRegisterContainer";
import ImageModifyContainer from "./containers/ImageModifyContainer";
import ImageReadContainer from "./containers/ImageReadContainer";
import ImageListContainer from "./containers/ImageListContainer";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/image/list" element={<ImageListContainer />} />
        <Route path="/image/create" element={<ImageRegisterContainer />} />
        <Route path="/image/modify" element={<ImageModifyContainer />} />
        <Route path="/image/read" element={<ImageReadContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
