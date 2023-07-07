import React, { useEffect, useState } from "react";
import "../../styles/board/Board.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";
import { changeLikeStatus, getBoardList } from "../controller/BoardController";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const [boardList, setBoardList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => setBoardList(await getBoardList()))();
  }, []);

  const onCheckIcon = async (id) => {
    const loginToken = localStorage.getItem("accessToken");
    const data = {
      boardId: id,
      likeClicked: true,
    };

    const res = await changeLikeStatus(data);
  };

  return (
    <div className="boardContainer">
      {boardList.map((boardItem, idx) => {
        return (
          <div className="post">
            <div className="header">
              <img className="userImg" src={boardItem.profileImg} alt="error" />
              <p className="userName">{boardItem.author}</p>
            </div>
            <div className="content">
              <img className="postImg" src={boardItem.images[0]} alt="error" />
              <p onClick={() => onCheckIcon(boardItem.id)}>
                {boardItem.isLike === true ? <h1>클릭됨</h1> : null}
                <FavoriteBorderIcon />
              </p>
              <p>{boardItem.description}</p>
            </div>
            <div className="tagBox">
              {boardItem.tags.map((tag) => {
                return <p>tag</p>;
              })}
            </div>
          </div>
        );
      })}

      <button className="writeBtn" onClick={() => navigate("/write")}>
        <CreateIcon />
      </button>
    </div>
  );
};

export default Board;
