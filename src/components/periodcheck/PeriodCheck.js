import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    ReferenceLine,
} from "recharts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";

const API_URL = "http://43.201.73.166:8080";

const PeriodCheck = () => {
    const navigate = useNavigate();

    const moveHomePage = () => {
        navigate("/");
    };

    const [selectedType, setSelectedType] = useState("caloroie");
    const handleSelectType = (e) => {
        setSelectedType(e.target.value);
    };

    const currentDate = moment();

    const sixDaysAgo = moment().subtract(6, "days").toDate();
    const [startDate, setStartDate] = useState(sixDaysAgo);
    const [endDate, setEndDate] = useState(new Date());

    const [periodData, setPeriodData] = useState("");
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        const fetchTypeData = async () => {
            try {
                setDataList([]);
                let token = localStorage.getItem("accessToken");
                const res = await axios.get(
                    `${API_URL}/api/analysis/period?startDate=${moment(
                        startDate
                    ).format("YYYY-MM-DD")}&endDate=${moment(endDate).format(
                        "YYYY-MM-DD"
                    )}&nutrient=${selectedType}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const periodData = res.data;
                setPeriodData(() => periodData);
                period(periodData);
            } catch {
                console.error("periodData bring Failed!");
            }
        };
        fetchTypeData();
    }, [startDate, endDate, selectedType]);

    const period = (periodData) => {
        setDataList([]);
        let periodDataLength = Math.min(periodData.amountList.length, 90);

        const t = Math.ceil(periodDataLength / 7);
        for (let i = 0; i < t; i++) {
            const start = i * 7;
            const end = Math.min((i + 1) * 7, periodDataLength);

            setDataList((prevDataList) => [
                ...prevDataList,
                periodData.amountList.slice(start, end),
            ]);
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
    };

    const nutrientKey = {
        caloroie: 2000,
        salt: 5,
        protein: 50,
        fat: 70,
    };

    return (
        <div className="period_page">
            <div className="title_group">
                <p className="title">Food Fit</p>
                <p className="small_title">기간 분석</p>
            </div>
            <div className="period_select">
                <div className="period">
                    <label>시작일:&nbsp;&nbsp;</label>
                    <DatePicker
                        className="date_picker"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>

                <div className="period">
                    <label>종료일:&nbsp;&nbsp;</label>
                    <DatePicker
                        className="date_picker"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>
            </div>
            <div className="select_div">
                <select
                    className="select_type"
                    onChange={handleSelectType}
                    value={selectedType}
                >
                    <option value="caloroie">칼로리</option>
                    <option value="salt">나트륨</option>
                    <option value="protein">단백질</option>
                    <option value="fat">지방</option>
                </select>
            </div>
            <div className="period_graph">
                <Slider {...settings} className="slider">
                    {dataList.map((item, index) => (
                        <div className="graph_data">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={150}
                                    height={40}
                                    border_radius={"10px"}
                                    data={item}
                                >
                                    <ReferenceLine
                                        y={nutrientKey[selectedType]}
                                        label={selectedType}
                                        stroke="red"
                                        strokeDasharray="3 3"
                                    />
                                    <Bar dataKey="dailyTotal" fill="#B8E0D2" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="button_group">
                <button className="home_btn" onClick={moveHomePage}>
                    홈으로
                </button>
            </div>
        </div>
    );
};

export default PeriodCheck;
