import React, { useState, useEffect } from "react";
import "../../styles/board/Write.css";
import axios from "axios";
import { getSearchData } from "../controller/MenuController";
import SearchIcon from "@mui/icons-material/Search";
import { insertPost, updatePost } from "../controller/BoardController";
import { useNavigate, useLocation } from "react-router-dom";

const Write = () => {
  const [postId, setPostId] = useState(0);
  const [content, setContent] = useState("");
  const [uploadImage, setUploadImage] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [tagText, setTagText] = useState("");
  const [preloadImages, setPreloadImages] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const onUpdateSearchData = async () => {
    const res = await getSearchData(tagText);
    setSearchData(res.slice(0, 5));
  };

  useEffect(() => {
    if (location.state === null) return;
    const { id, description, images, tags } = location.state;

    setPostId(id);
    setContent(description);
    // setUploadImage(images);
    setTagList(tags);
  }, []);

  useEffect(() => {
    if (tagText === "") {
      setSearchData("");
      return;
    }

    const debounce = setTimeout(() => {
      if (tagText) onUpdateSearchData();
    }, 300);

    return () => clearTimeout(debounce);
  }, [tagText]);

  const onInsertPost = async () => {
    try {
      const tagIdList = tagList.map((tag) => tag.id);

      const formData = new FormData();
      console.log(uploadImage);

      formData.append("content", content);
      formData.append("images", uploadImage);
      formData.append("tags", tagIdList);

      const res = await insertPost(formData);

      if (!res) {
        alert("다시 등록해 주세요!");
        return;
      }
      navigate("/board");
    } catch (err) {
      alert("다시 등록해 주세요!");
    }
  };

  const onUpdatePost = async (idx) => {
    try {
      const tagIdList = tagList.map((tag) => tag.id);
      console.log(tagIdList);

      const formData = new FormData();

      formData.append("boardId", postId);
      formData.append("content", content);
      formData.append("images", preloadImages);
      formData.append("tags", tagIdList);

      const res = await updatePost(formData);

      if (!res) {
        alert("다시 등록해 주세요!");
        return;
      }
      navigate("/board");
    } catch (err) {
      alert("다시 등록해 주세요!");
    }
  };

  /*
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
  };*/

  const onUpload = (e) => {
    const files = [...e.target.files];
    files.forEach((file) => {
      setUploadImage([...uploadImage, file]);
    });
    console.log(files);
    console.log(location.state);
  };

  const onInsertTag = (idx) => {
    setTagList([...tagList, searchData[idx].foods]);
    setSearchData("");
    setTagText("");
  };

  const onDeleteItem = (idx) => {
    const newFoodList = tagList.filter((item, index) => index !== idx);
    setTagList(newFoodList);
  };

  return (
    <div className="WriteContainer">
      <textarea
        className="content inputBox"
        value={content}
        multiple
        onChange={(e) => setContent(e.target.value)}
      />
      <section className="tagSection">
        <input
          className="inputBox"
          placeholder="태그입력"
          value={tagText}
          onChange={(e) => setTagText(e.target.value)}
        />
        {searchData.length !== 0 ? (
          <div className="searchData boxBorder">
            {searchData.map((data, idx) => {
              return (
                <p key={data.id} onClick={() => onInsertTag(idx)}>
                  <SearchIcon />
                  {data.foods.name}
                </p>
              );
            })}
          </div>
        ) : null}
        <div className="tagListBox">
          {tagList.map((tagItem, idx) => {
            return (
              <div className="foodItem boxBorder" key={tagItem.id}>
                <p className="text" key={tagItem.id}>
                  {tagItem.name}
                </p>
                <span className="closeBtn" key={idx} onClick={() => onDeleteItem(idx)}>
                  &#x00d7;
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <input accept="image/*" multiple type="file" onChange={(e) => onUpload(e)} />
      {preloadImages.map((preloadImage, idx) => {
        return <img key={idx} src={preloadImage} style={{ width: "100%" }} />;
      })}

      {postId === 0 ? (
        <button className="insertBtn button boxBorder text" onClick={onInsertPost}>
          작성하기
        </button>
      ) : (
        <button className="insertBtn button boxBorder text" onClick={onUpdatePost}>
          수정하기
        </button>
      )}
    </div>
  );
};

export default Write;
