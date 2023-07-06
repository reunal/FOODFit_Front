import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const getSearchData = async (searchText) => {
  try {
    const res = await axios.get(`${SERVER_URL}/food?name=${searchText}`);
    return [...res.data.searchList];
  } catch (error) {
    return [];
  }
};
