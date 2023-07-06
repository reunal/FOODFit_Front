import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";

const API_URL = "http://43.201.73.166:8080";

const DailyCheck = () => {
    const navigate = useNavigate();

    const [progressData, setProgressData] = useState("");

    const moveHomePage = () => {
        navigate("/");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let token =
                    "eyJ0eXAiOiJBQ0NFU1NfVE9LRU4iLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNjg4NDY4MDU3LCJleHAiOjE2ODg0Njk4NTd9.l_6mjbhAyw7gz0sIHyJ-4DLoHCeWNoBPhNX49oNciLU";
                const res = await axios.get(`${API_URL}/api/analysis/daily`, {
                    headers: {
                        "Content-Type": "application/json",
                        // Authorization: `Bearer ${localStorage.getItem(token)}`,
                        Authorization: `Bearer ${token}`,
                    },
                });

                const intakeData = res.data;
                setProgressData(intakeData);
                console.log(intakeData);
            } catch (error) {
                console.error("intakeData bring Failed!");
            }
        };

        fetchData();
    }, []);

    return (
        <div className="daily_page">
            <div className="title_group">
                <p className="title">Food Fit</p>
                <p className="small_title">일일 분석</p>
            </div>
            <div className="daily_graph">
                <div className="bar">
                    <p className="element">칼로리&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <ProgressBar
                        className="progress"
                        completed={progressData.totalCaloriePerDay}
                        maxCompleted={progressData.recommendedCaloriePerDay}
                        customLabel={`${progressData.totalCaloriePerDay}kacl`}
                        labelClassName="label"
                        bgColor="#B2F7EF"
                        barContainerClassName="container1"
                    />
                </div>
                <div className="bar">
                    <p className="element">탄수화물</p>
                    <ProgressBar
                        className="progress"
                        completed={progressData.totalSaltPerDay}
                        maxCompleted={progressData.recommendedSaltPerDay}
                        customLabel={`${progressData.totalSaltPerDay}kacl`}
                        labelClassName="label"
                        bgColor="#7BDEF2"
                        barContainerClassName="container2"
                    />
                </div>
                <div className="bar">
                    <p className="element">단백질&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <ProgressBar
                        className="progress"
                        completed={progressData.totalProteinPerDay}
                        maxCompleted={progressData.recommendedProteinPerDay}
                        customLabel={`${progressData.totalProteinPerDay}g`}
                        labelClassName="label"
                        bgColor="#E7D6E0"
                        barContainerClassName="container3"
                    />
                </div>
                <div className="bar">
                    <p className="element">
                        지방&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                    <ProgressBar
                        className="progress"
                        completed={progressData.totalFatPerDay}
                        maxCompleted={progressData.recommendedFatPerDay}
                        customLabel={`${progressData.totalFatPerDay}g`}
                        labelClassName="label"
                        bgColor="#F2B5D4"
                        barContainerClassName="container4"
                    />
                </div>
            </div>
            <div className="classify_graph">
                <p className="description">
                    당신의 일일 적정 섭취량은 칼로리 2100kacl, 탄수화물
                    1300kacl, 단백질 50g, 지방 70g입니다. 현재 당신의 섭취량은
                    칼로리, 탄수화물, 단백질, 지방 모두 일일 적정량에 미달
                    상태입니다. 일일 적정량을 더 섭취하여 권장량을 맞춰주세요.
                </p>
            </div>
            <div className="button_group">
                <button className="home_btn" onClick={moveHomePage}>
                    홈으로
                </button>
            </div>
        </div>
    );
};

export default DailyCheck;
