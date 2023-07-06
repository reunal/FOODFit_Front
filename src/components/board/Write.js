import React, { useState } from "react";
import "../../styles/board/Write.css";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);

  const onInsertPost = () => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    try {
      const data = {
        content,
        images,
        tags,
      };

      const res = axios.post(`${SERVER_URL}/board`, data);
    } catch (err) {}
  };

  return (
    <div className="WriteContainer">
      <input className="title inputBox" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea
        className="content inputBox"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="insertBtn button boxBorder text" onClick={onInsertPost}>
        작성하기
      </button>
    </div>
  );
};

export default Write;
