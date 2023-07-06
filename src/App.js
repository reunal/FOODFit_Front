import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import NotFounded from "./components/NotFounded";
import Header from "./components/Layout/Header";
import Login from "./components/login/Login";
import HomeLayout from "./components/HomeLayout";
import Board from "./components/board/Board";
import Write from "./components/board/Write";
import "./styles/Common.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/board" element={<Board />} />
        <Route path="/write" element={<Write />} />
        <Route exact path="/*" element={<NotFounded />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
