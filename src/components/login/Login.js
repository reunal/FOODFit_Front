import React from "react";
import axios from "axios";
import "../../styles/login/Login.css";

const Login = () => {
  const KAKAO_URL = ``;
  const test = async () => {
    window.location.href = "http://43.201.73.166:8080/api/login/kakao";
  };

  return (
    <div className="loginContainer">
      <button className="loginBtn boxBorder text" onClick={test}>
        카카오톡으로 5초만에 로그인
      </button>
    </div>
  );
};

export default Login;
