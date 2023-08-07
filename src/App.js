import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Headers/Header";
import Footer from "./components/Footers/Footer";

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
