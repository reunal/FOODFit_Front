import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://43.201.73.166:8080";

const MyPage = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [profileImage, setProfileImage] = useState("default_profile.png");

    const fileInput = useRef(null);
    const imgChange = (e) => {
        if (e.target.files[0]) {
            setProfileImage(e.target.files[0]);
        } else {
            setProfileImage("profile02.png");
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImage(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);

    };

  const handleSelectGender = (e) => {
    setGender(e.target.value);
  };

  const saveUserInfo = async () => {
    const userData = {
      name: name,
      age: age,
      gender: gender,
      profileImage: profileImage,
    };

    const moveHomePage = () => {
        navigate("/");
    };

    useEffect(() => {
        (async () => {
            try {
                let token = localStorage.getItem("accessToken");
                const res = await axios.get(`${API_URL}/api/user`, {
                    headers: {
                        "Content-Type": "application/json",
                        // Authorization: `Bearer ${localStorage.getItem(token)}`,
                        Authorization: `Bearer ${token}`,
                    },
                });
                const userData = await res.data;
                console.log(userData);
                setName(userData.name);
                setAge(userData.age);
                setGender(userData.gender);
                setProfileImage(userData.profileImage);
            } catch (error) {
                console.log("userdata bring error");
            }
        })();
    }, []);

    if (profileImage.length == 0) {
        setProfileImage("default_profile.png");
    }

  if (profileImage.length == 0) {
    setProfileImage("default_profile.png");
  }

  return (
    <div className="mypage">
      <div className="title_group">
        <p className="small_title">마이페이지</p>
      </div>
      <div className="user_profile">
        <img
          className="profile_img"
          src={profileImage}
          alt="프로필 수정"
          onClick={() => {
            fileInput.current.click();
          }}
        />
        <br />
        <input
          className="file_upload"
          type="file"
          accept="image/*"
          onChange={imgChange}
          ref={fileInput}
        />
      </div>
      <div className="user_info">
        <div className="info">
          <p>이름</p>
          <input
            type="text"
            placeholder="name"
            className="name_box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="info">
          <p>나이</p>
          <input
            type="number"
            placeholder="age"
            className="age_box"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="info">
          <p>성별</p>
          <select className="select_class" onChange={handleSelectGender} value={gender}>
            <option disabled hidden selected>
              gender
            </option>
            <option value="MALE">남</option>
            <option value="FEMALE">여</option>
          </select>
        </div>
    );
};

export default MyPage;
