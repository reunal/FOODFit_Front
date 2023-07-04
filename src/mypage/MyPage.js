import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://202.31.200.86";

const MyPage = () => {
    const navigate = useNavigate();

    const [img, setImg] = useState("profile04.png");
    const fileInput = useRef(null);
    const imgChange = (e) => {
        if (e.target.files[0]) {
            setImg(e.target.files[0]);
        } else {
            setImg("profile02.png");
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImg(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    const [selectedGender, setSelectedGender] = useState(null);

    const handleSelectGender = (e) => {
        setSelectedGender(e.target.value);
    };

    const saveUserInfo = () => {
        const userData = {
            name: name,
            age: age,
            gender: gender,
            profileImage: profileImage,
        };

        axios
            .put(API_URL + "/api/user", userData)
            .then(() => {
                alert("save success");
            })
            .catch((error) => {
                console.error("save failed");
            });
    };

    const moveHomePage = () => {
        navigate("/");
    };

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [profileImage, setProfileImage] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(API_URL + "/api/user");
                const userData = await res.data;

                setName(userData.name);
                setAge(userData.age);
                setGender(userData.gender);
                setProfileImage(userData.profileImage);
            } catch (error) {
                console.log("userdata bring error");
            }
        })();
    }, []);

    return (
        <div className="mypage">
            <div className="title_group">
                <p className="title">Food Fit</p>
                <p className="small_title">마이페이지</p>
            </div>
            <div className="user_profile">
                <img
                    className="profile_img"
                    src={img}
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
                    <select
                        className="select_class"
                        onChange={handleSelectGender}
                        value={selectedGender}
                    >
                        <option disabled hidden selected>
                            gender
                        </option>
                        <option value="M">남</option>
                        <option value="W">여</option>
                    </select>
                </div>
            </div>
            <div className="button_group">
                <button className="modify_btn" onClick={saveUserInfo}>
                    저장
                </button>
                <button className="home_btn" onClick={moveHomePage}>
                    홈으로
                </button>
            </div>
        </div>
    );
};

export default MyPage;
