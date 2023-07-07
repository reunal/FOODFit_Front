import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getBoardList = async () => {
  const loginToken = localStorage.getItem("accessToken");
  try {
    const res = await axios.get(`${SERVER_URL}/board`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return [...res.data.boardList];
  } catch (error) {
    return false;
  }
};

export const insertPost = async (formData) => {
  const loginToken = localStorage.getItem("accessToken");
  try {
    const res = await axios.post(`${SERVER_URL}/board`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const updatePost = async (formData) => {
  const loginToken = localStorage.getItem("accessToken");
  try {
    const res = await axios.put(`${SERVER_URL}/board`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return res;
  } catch (error) {
    return false;
  }
};

export const deletePost = async (boardId) => {
  const loginToken = localStorage.getItem("accessToken");
  try {
    const res = await axios.delete(`${SERVER_URL}/board?boardId=${boardId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return res;
  } catch (error) {
    return false;
  }
};

export const changeLikeStatus = async (data) => {
  const loginToken = localStorage.getItem("accessToken");
  try {
    const res = await axios.post(`${SERVER_URL}/board/like`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
