import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const loginToken = localStorage.getItem("accessToken");

export const getUserData = async () => {
  console.log(loginToken);
  try {
    const res = await axios.get(`${SERVER_URL}/user`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem(token)}`,
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return res.data;
  } catch (error) {
    return false;
  }
};
