import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const loginToken = localStorage.getItem("accessToken");

export const insertPost = async (formData) => {
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

export const getBoardList = async () => {
  try {
    const res = await axios.get(`${SERVER_URL}/board`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return [...res.data.boardList];
  } catch (error) {
    return [];
  }
};

export const changeLikeStatus = async (data) => {
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
