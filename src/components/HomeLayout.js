import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/HomeLayout.css";
import { getUserData } from "./controller/UseController";

const HomeLayout = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [userData, setUserData] = useState([]);

  const getUser = async () => {
    const res = await getUserData();
    if (!res) navigate("/login");
    setUserData(res);
  };

  useEffect(() => {
    const accessToken = searchParams.get("token");
    const isCheck = searchParams.get("additional-info");

    localStorage.setItem("accessToken", accessToken);
    console.log("tettt:L ", localStorage.getItem("accessToken"));
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }

    getUser();

    if (isCheck && window.confirm("넘어가겠습니까?")) navigate("/mypage");
  }, []);

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  return (
    <div className="mainLayout">
      <div className="profileImg">
        <img src={userData.profileImage ? userData.profileImage : "/default_profile.png"} />
      </div>
      <div className="info">
        {userData.name}님 환영합니다.
        <div
          className="my"
          onClick={() => {
            navigate("/mypage");
          }}
        >
          마이페이지
        </div>
        <div className="logout" onClick={onLogout}>
          로그아웃
        </div>
      </div>
      <button
        className="btn"
        onClick={() => {
          navigate("/menu");
        }}
      >
        식단 추가
      </button>
      <button
        className="btn"
        onClick={() => {
          navigate("/daily");
        }}
      >
        일일 분석
      </button>
      <button
        className="btn"
        onClick={() => {
          navigate("/period");
        }}
      >
        기간 분석
      </button>
      <button
        className="btn"
        onClick={() => {
          navigate("/board");
        }}
      >
        게시판
      </button>
    </div>
  );
};

export default HomeLayout;
