import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const loginToken = localStorage.getItem("accessToken");

export const getSearchData = async (searchText) => {
  try {
    const res = await axios.get(`${SERVER_URL}/food?name=${searchText}`);
    return [...res.data.searchList];
  } catch (error) {
    return [];
  }
};

export const insertMenu = async (list) => {
  try {
    const res = await axios.post(`${SERVER_URL}/foods`, list, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
