import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";
import "../../styles/dailyCheck/DailyCheck.css";
import textData from "./DailyAnalysisText";

const API_URL = "http://43.201.73.166:8080";

const DailyCheck = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [progressData, setProgressData] = useState("");

  const moveHomePage = () => {
    navigate("/");
  };

  const [analysisText, setAnalysisText] = useState({
    calorie: "",
    salt: "",
    protein: "",
    fat: "",
  });

  useEffect(() => {
    if (location.state === null) {
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
          text(intakeData);
        } catch (error) {
          console.error("intakeData bring Failed!");
        }
      };

      fetchData();
    } else {
      const getTest = async () => {
        try {
          let token = localStorage.getItem("accessToken");
          const { id } = location.state;
          const res = await axios.get(`${API_URL}/api/board/${id}/nutrient`, {
            headers: {
              "Content-Type": "application/json",
              // Authorization: `Bearer ${localStorage.getItem(token)}`,
              Authorization: `Bearer ${token}`,
            },
          });

          const intakeData = res.data;
          setProgressData(intakeData);
          console.log(intakeData);
          text(intakeData);
        } catch (error) {
          console.error("intakeData bring Failed!");
        }
      };
      getTest();
    }
  }, []);

  const text = () => {
    const nutrients = ["calorie", "protein", "fat", "salt"];

    for (let i = 0; i < nutrients.length; i++) {
      const nutrient = nutrients[i];
      const recommendedAmount =
        progressData[`recommended${nutrient.charAt(0).toUpperCase() + nutrient.slice(1)}PerDay`];
      const totalAmount =
        progressData[`total${nutrient.charAt(0).toUpperCase() + nutrient.slice(1)}PerDay`];
      const textGoodKey = `${nutrient}GoodText`;
      const textOverKey = `${nutrient}OverText`;
      const textLackKey = `${nutrient}LackText`;

      if (Math.abs(recommendedAmount - totalAmount) <= recommendedAmount * 0.1) {
        setAnalysisText((prevAnalysisText) => ({
          ...prevAnalysisText,
          [nutrient]: textData[textGoodKey],
        }));
      } else if (recommendedAmount - totalAmount < -recommendedAmount * 0.1) {
        setAnalysisText((prevAnalysisText) => ({
          ...prevAnalysisText,
          [nutrient]: textData[textOverKey],
        }));
      } else {
        setAnalysisText((prevAnalysisText) => ({
          ...prevAnalysisText,
          [nutrient]: textData[textLackKey],
        }));
      }
    }
  };

  return (
    <div className="daily_page">
      <div className="title_group">
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
      </div>
      <div className="classify_graph">
        <p className="description">
          당신의 일일 적정 섭취량은 칼로리 {progressData.recommendedCaloriePerDay}kacl, 나트륨{" "}
          {progressData.recommendedSaltPerDay}g, 단백질 {progressData.recommendedProteinPerDay}g,
          지방 {progressData.recommendedFatPerDay}g 입니다.
        </p>
        <p className="description">{analysisText.calorie}</p>
        <p className="description">{analysisText.salt}</p>
        <p className="description">{analysisText.protein}</p>
        <p className="description">{analysisText.fat}</p>
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
