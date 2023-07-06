import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [periodData, setPeriodData] = useState("");

    const month = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
    };

    let sDate = String(startDate);
    sDate = sDate.split(" ");
    sDate = `${sDate[3]}-${month[sDate[1]]}-${sDate[2]}`;

    let eDate = String(endDate);
    eDate = eDate.split(" ");
    eDate = `${eDate[3]}-${month[eDate[1]]}-${eDate[2]}`;

    console.log(selectedType);

    // useEffect(() => {
    //     const fetchTypeData = async () => {
    //         try {
    //             let token =
    //                 "eyJ0eXAiOiJBQ0NFU1NfVE9LRU4iLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3IiwiaWF0IjoxNjg4NDY4MDU3LCJleHAiOjE2ODg0Njk4NTd9.l_6mjbhAyw7gz0sIHyJ-4DLoHCeWNoBPhNX49oNciLU";

    //             const res = await axios.get(
    //                 `${API_URL}/api/analysis/period?startDate=${sDate}&endDate=${eDate}&nutrient=${selectedType}`,
    //                 {
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                         Authorization: `Bearer ${token}`,
    //                     },
    //                 }
    //             );

    //             const data = res.data;
    //             setPeriodData(data);
    //             console.log(data);
    //         } catch {
    //             console.error("periodData bring Failed!");
    //         }
    //     };
    //     fetchTypeData();
    // }, []);

    const data = [
        {
            date: "1",
            dailyTotal: 5,
        },
        {
            date: "2",
            dailyTotal: 8,
        },
        {
            date: "3",
            dailyTotal: 4,
        },
        {
            date: "4",
            dailyTotal: 5,
        },
        {
            date: "5",
            dailyTotal: 3,
        },
        {
            date: "6",
            dailyTotal: 1,
        },
        {
            date: "7",
            dailyTotal: 9,
        },
        {
            date: "8",
            dailyTotal: 3,
        },
        {
            date: "9",
            dailyTotal: 7,
        },
        {
            date: "10",
            dailyTotal: 5,
        },
        {
            date: "11",
            dailyTotal: 2,
        },
        {
            date: "12",
            dailyTotal: 1,
        },
        {
            date: "13",
            dailyTotal: 4,
        },
        {
            date: "14",
            dailyTotal: 8,
        },
        {
            date: "15",
            dailyTotal: 6,
        },
        {
            date: "16",
            dailyTotal: 9,
        },
    ];

    console.log(data.length);

    if ((7 < data.length) & (data.length <= 14)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7);
    } else if ((14 < data.length) & (data.length <= 21)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
    } else if ((21 < data.length) & (data.length <= 28)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
        const data4 = data.slice(21);
    } else if ((28 < data.length) & (data.length <= 35)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
        const data4 = data.slice(21, 28);
        const data5 = data.slice(28);
    } else if ((35 < data.length) & (data.length <= 42)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
        const data4 = data.slice(21, 28);
        const data5 = data.slice(28, 35);
        const data6 = data.slice(35);
    } else if ((42 < data.length) & (data.length <= 49)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
        const data4 = data.slice(21, 28);
        const data5 = data.slice(28, 35);
        const data6 = data.slice(35, 42);
        const data7 = data.slice(42);
    } else if ((49 < data.length) & (data.length <= 56)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
        const data4 = data.slice(21, 28);
        const data5 = data.slice(28, 35);
        const data6 = data.slice(35, 42);
        const data7 = data.slice(42, 49);
        const data8 = data.slice(49);
    } else if ((56 < data.length) & (data.length <= 63)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
        const data4 = data.slice(21, 28);
        const data5 = data.slice(28, 35);
        const data6 = data.slice(35, 42);
        const data7 = data.slice(42, 49);
        const data8 = data.slice(49, 56);
        const data9 = data.slice(56);
    } else if ((63 < data.length) & (data.length <= 70)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
        const data4 = data.slice(21, 28);
        const data5 = data.slice(28, 35);
        const data6 = data.slice(35, 42);
        const data7 = data.slice(42, 49);
        const data8 = data.slice(49, 56);
        const data9 = data.slice(56, 63);
        const data10 = data.slice(63);
    } else if ((70 < data.length) & (data.length <= 77)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
        const data4 = data.slice(21, 28);
        const data5 = data.slice(28, 35);
        const data6 = data.slice(35, 42);
        const data7 = data.slice(42, 49);
        const data8 = data.slice(49, 56);
        const data9 = data.slice(56, 63);
        const data10 = data.slice(63, 70);
        const data11 = data.slice(70);
    } else if ((77 < data.length) & (data.length <= 84)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
        const data4 = data.slice(21, 28);
        const data5 = data.slice(28, 35);
        const data6 = data.slice(35, 42);
        const data7 = data.slice(42, 49);
        const data8 = data.slice(49, 56);
        const data9 = data.slice(56, 63);
        const data10 = data.slice(63, 70);
        const data11 = data.slice(70, 77);
        const data12 = data.slice(77);
    } else if ((84 < data.length) & (data.length <= 91)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
        const data4 = data.slice(21, 28);
        const data5 = data.slice(28, 35);
        const data6 = data.slice(35, 42);
        const data7 = data.slice(42, 49);
        const data8 = data.slice(49, 56);
        const data9 = data.slice(56, 63);
        const data10 = data.slice(63, 70);
        const data11 = data.slice(70, 77);
        const data12 = data.slice(77, 84);
        const data13 = data.slice(84);
    } else if ((91 < data.length) & (data.length <= 98)) {
        const data1 = data.slice(0, 7);
        const data2 = data.slice(7, 14);
        const data3 = data.slice(14, 21);
        const data4 = data.slice(21, 28);
        const data5 = data.slice(28, 35);
        const data6 = data.slice(35, 42);
        const data7 = data.slice(42, 49);
        const data8 = data.slice(49, 56);
        const data9 = data.slice(56, 63);
        const data10 = data.slice(63, 70);
        const data11 = data.slice(70, 77);
        const data12 = data.slice(77, 84);
        const data13 = data.slice(84, 91);
        const data14 = data.slice(91);
    }

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
            <div className="period_graph">
                <select
                    className="select_type"
                    onChange={handleSelectType}
                    value={selectedType}
                >
                    <option value="caloroie">칼로리</option>
                    <option value="salt">탄수화물</option>
                    <option value="protein">단백질</option>
                    <option value="fat">지방</option>
                </select>
                <div className="graph_data">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={150}
                            height={40}
                            border_radius={"10px"}
                            data={data}
                        >
                            <Bar dataKey="dailyTotal" fill="#B8E0D2" />
                            <XAxis dataKey="date" />
                            <YAxis />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
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
