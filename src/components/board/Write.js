import React, { useState } from "react";
import "../../styles/board/Write.css";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagText, setTagText] = useState("");
  const [preloadImages, setPreloadImages] = useState([]);

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

  const readImageDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (event) {
        resolve(event.target.result);
      };

      reader.onerror = function (error) {
        reject(error);
      };
    });
  };

  const onChangeText = () => {};

  const onUpload = async (e) => {
    const files = [...e.target.files];
    const filePromises = files.map(async (file) => {
      return await readImageDataUrl(file);
    });

    try {
      const results = await Promise.all(filePromises);
      const newPreloadImages = [...preloadImages, ...results];
      setPreloadImages(() => newPreloadImages);
      console.log("case: ", preloadImages);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="WriteContainer">
      <input className="title inputBox" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea
        className="content inputBox"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input value={tagText} onChange={onChangeText} />
      <input accept="image/*" multiple type="file" onChange={(e) => onUpload(e)} />
      {preloadImages.map((preloadImage, idx) => {
        return <img key={idx} src={preloadImage} style={{ width: "100%" }} />;
      })}
      <button className="insertBtn button boxBorder text" onClick={onInsertPost}>
        작성하기
      </button>
    </div>
  );
};

export default Write;
