import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";

const API_URL = "http://202.31.200.86";

const DailyCheck = () => {
    const navigate = useNavigate();

    const [progressData, setProgressData] = useState({
        recommended: {
            calories: 0,
            salt: 0,
            protein: 0,
            fat: 0,
        },
        total: {
            calories: 0,
            salt: 0,
            protein: 0,
            fat: 0,
        },
    });

    const moveHomePage = () => {
        navigate("/");
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(API_URL + "/api/analysis/daily");
                const intakeData = res.data;
                setProgressData(intakeData);
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
                        completed={progressData.total.calories}
                        maxCompleted={progressData.recommended.calories}
                        customLabel={`${progressData.total.calories}kacl`}
                        labelClassName="label"
                        bgColor="#B2F7EF"
                        barContainerClassName="container1"
                    />
                </div>
                <div className="bar">
                    <p className="element">탄수화물</p>
                    <ProgressBar
                        className="progress"
                        completed={progressData.total.salt}
                        maxCompleted={progressData.recommended.salt}
                        customLabel={`${progressData.total.salt}kacl`}
                        labelClassName="label"
                        bgColor="#7BDEF2"
                        barContainerClassName="container2"
                    />
                </div>
                <div className="bar">
                    <p className="element">단백질&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <ProgressBar
                        className="progress"
                        completed={progressData.total.protein}
                        maxCompleted={progressData.recommended.protein}
                        customLabel={`${progressData.total.protein}g`}
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
                        completed={progressData.total.fat}
                        maxCompleted={progressData.recommended.fat}
                        customLabel={`${progressData.total.fat}g`}
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
