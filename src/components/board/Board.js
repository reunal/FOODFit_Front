import React, { useEffect, useState } from "react";
import "../../styles/board/Board.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CreateIcon from "@mui/icons-material/Create";
import axios from "axios";
import { changeLikeStatus, deletePost, getBoardList } from "../controller/BoardController";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Board = () => {
  const [boardList, setBoardList] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [clickedId, setClickedId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await getBoardList();

      if (!res) navigate("/login");

      setBoardList(res);
    })();
  }, []);

  const onCheckIcon = async (idx) => {
    const boardData = boardList[idx];

    const data = {
      boardId: boardData.id,
      likeClicked: !boardData.isLike,
    };

    const res = await changeLikeStatus(data);
    if (res)
      setBoardList((prevBoardList) => {
        const updatedBoardList = [...prevBoardList]; // 이전 배열을 복사하여 새로운 배열 생성
        updatedBoardList[idx] = {
          ...updatedBoardList[idx],
          isLike: !updatedBoardList[idx].isLike,
        }; // 특정 인덱스의 객체 값 업데이트
        return updatedBoardList; // 업데이트된 배열 반환
      });
  };

  const onChangeOpenState = (id) => {
    setIsClicked(!isClicked);
    setClickedId(id);
  };

  const onUpdatePost = (boardItem) => {
    navigate("/write", { state: boardItem });
  };

  const onDeletePost = async (id) => {
    const res = await deletePost(id);
    if (!res) {
      alert("다시 클릭해 주세요");
      return;
    }
    window.location.reload();
  };

  return (
    <div className="boardContainer">
      {boardList.map((boardItem, idx) => {
        return (
          <div className="post" key={boardItem.id}>
            <div className="header">
              <div className="userProfile">
                <img className="userImg" src={boardItem.profileImg} alt="error" />
                <p className="userName">{boardItem.author}</p>
              </div>
              <MoreHorizIcon onClick={() => onChangeOpenState(boardItem.id)} />
            </div>
            {isClicked && clickedId === boardItem.id && (
              <div className="postOption boxBorder">
                <p onClick={() => onUpdatePost(boardItem)}>게시글 수정</p>
                <div className="line">""</div>
                <p onClick={() => onDeletePost(boardItem.id)}>게시글 삭제</p>
              </div>
            )}
            <div className="content">
              <img className="postImg" src={boardItem.images[0]} alt="error" />
              <p onClick={() => onCheckIcon(idx)}>
                {boardItem.isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </p>
              <p>{boardItem.description}</p>
            </div>
            <div className="tagBox">
              {boardItem.tags.map((tag, idx) => {
                return (
                  <p key={idx} className="tag">
                    {tag}
                  </p>
                );
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
