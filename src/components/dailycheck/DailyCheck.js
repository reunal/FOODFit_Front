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
                let token = localStorage.getItem("accessToken");
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
            customLabel={`${progressData.totalCaloriePerDay}`}
            labelClassName="label"
            bgColor="#B2F7EF"
            barContainerClassName="container1"
          />
        </div>
        <div className="bar">
          <p className="element">나트륨&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <ProgressBar
            className="progress"
            completed={progressData.totalSaltPerDay}
            maxCompleted={progressData.recommendedSaltPerDay}
            customLabel={`${progressData.totalSaltPerDay}`}
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
            customLabel={`${progressData.totalProteinPerDay}`}
            labelClassName="label"
            bgColor="#E7D6E0"
            barContainerClassName="container3"
          />
        </div>
        <div className="bar">
          <p className="element">지방&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <ProgressBar
            className="progress"
            completed={progressData.totalFatPerDay}
            maxCompleted={progressData.recommendedFatPerDay}
            customLabel={`${progressData.totalFatPerDay}`}
            labelClassName="label"
            bgColor="#F2B5D4"
            barContainerClassName="container4"
          />
        </div>
    );
};

export default DailyCheck;
