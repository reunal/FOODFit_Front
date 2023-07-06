import React from "react";
import "../../styles/board/Board.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CreateIcon from "@mui/icons-material/Create";
const Board = () => {
  return (
    <div className="boardContainer">
      <div className="post">
        <div className="header">
          <img className="userImg" src="/logo512.png" alt="error" />
          <p className="userName">밥 먹는 꼼시</p>
        </div>
        <div className="content">
          <img className="postImg" src="/logo512.png" alt="error" />
          <FavoriteBorderIcon />
          <p>블라라랄라ㅏ</p>
          <div className="tagBox">
            <p className="tag">라볶이</p>
            <p className="tag">치킨</p>
            <p className="tag">샐러드</p>
            <p className="tag">샐러드</p>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="header">
          <img className="userImg" src="/logo512.png" alt="error" />
          <p className="userName">밥 먹는 꼼시</p>
        </div>
        <div className="content">
          <img className="postImg" src="/logo512.png" alt="error" />
          <FavoriteBorderIcon />
          <p>블라라랄라ㅏ</p>
          <div className="tagBox">
            <p className="tag">라볶이</p>
            <p className="tag">치킨</p>
            <p className="tag">샐러드</p>
            <p className="tag">샐러드</p>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="header">
          <img className="userImg" src="/logo512.png" alt="error" />
          <p className="userName">밥 먹는 꼼시</p>
        </div>
        <div className="content">
          <img className="postImg" src="/logo512.png" alt="error" />
          <FavoriteBorderIcon />
          <p>블라라랄라ㅏ</p>
          <div className="tagBox">
            <p className="tag">라볶이</p>
            <p className="tag">치킨</p>
            <p className="tag">샐러드</p>
            <p className="tag">샐러드</p>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="header">
          <img className="userImg" src="/logo512.png" alt="error" />
          <p className="userName">밥 먹는 꼼시</p>
        </div>
        <div className="content">
          <img className="postImg" src="/logo512.png" alt="error" />
          <FavoriteBorderIcon />
          <p>블라라랄라ㅏ</p>
          <div className="tagBox">
            <p className="tag">라볶이</p>
            <p className="tag">치킨</p>
            <p className="tag">샐러드</p>
            <p className="tag">샐러드</p>
          </div>
        </div>
      </div>
      <CreateIcon />
    </div>
  );
};

export default Board;
