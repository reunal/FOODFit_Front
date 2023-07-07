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

    useEffect(() => {
        const fetchTypeData = async () => {
            try {
                let token = localStorage.getItem("accessToken");
                const res = await axios.get(
                    `${API_URL}/api/analysis/period?startDate=${sDate}&endDate=${eDate}&nutrient=${selectedType}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const periodData = res.data;
                console.log("t:", periodData);
                setPeriodData(periodData);
            } catch {
                console.error("periodData bring Failed!");
            }
        };
        fetchTypeData();
    }, [startDate, endDate]);

    let data1,
        data2,
        data3,
        data4,
        data5,
        data6,
        data7,
        data8,
        data9,
        data10,
        data11,
        data12,
        data13,
        data14;

    if (typeof periodData === "undefined") {
        data1 = [
            {
                date: sDate,
                dailyTotal: 0,
            },
        ];
    } else if (
        (7 < periodData.amountList.length) &
        (periodData.amountList.length <= 14)
    ) {
        data1 = periodData.amountList.slice(0, 7);
        data2 = periodData.amountList.slice(7);
    } else if (
        (14 < periodData.amountList.length) &
        (periodData.amountList.length <= 21)
    ) {
        data1 = periodData.amountList.slice(0, 7);
        data2 = periodData.amountList.slice(7, 14);
        data3 = periodData.amountList.slice(14, 21);
    } else if (
        (21 < periodData.amountList.length) &
        (periodData.amountList.length <= 28)
    ) {
        data1 = periodData.amountList.slice(0, 7);
        data2 = periodData.amountList.slice(7, 14);
        data3 = periodData.amountList.slice(14, 21);
        data4 = periodData.amountList.slice(21);
    } else if (
        (28 < periodData.amountList.length) &
        (periodData.amountList.length <= 35)
    ) {
        data1 = periodData.amountList.slice(0, 7);
        data2 = periodData.amountList.slice(7, 14);
        data3 = periodData.amountList.slice(14, 21);
        data4 = periodData.amountList.slice(21, 28);
        data5 = periodData.amountList.slice(28);
    } else if (
        (35 < periodData.amountList.length) &
        (periodData.amountList.length <= 42)
    ) {
        data1 = periodData.amountList.slice(0, 7);
        data2 = periodData.amountList.slice(7, 14);
        data3 = periodData.amountList.slice(14, 21);
        data4 = periodData.amountList.slice(21, 28);
        data5 = periodData.amountList.slice(28, 35);
        data6 = periodData.amountList.slice(35);
    } else if (
        (42 < periodData.amountList.length) &
        (periodData.amountList.length <= 49)
    ) {
        data1 = periodData.amountList.slice(0, 7);
        data2 = periodData.amountList.slice(7, 14);
        data3 = periodData.amountList.slice(14, 21);
        data4 = periodData.amountList.slice(21, 28);
        data5 = periodData.amountList.slice(28, 35);
        data6 = periodData.amountList.slice(35, 42);
        data7 = periodData.amountList.slice(42);
    } else if (
        (49 < periodData.amountList.length) &
        (periodData.amountList.length <= 56)
    ) {
        data2 = periodData.amountList.slice(7, 14);
        data1 = periodData.amountList.slice(0, 7);
        data3 = periodData.amountList.slice(14, 21);
        data4 = periodData.amountList.slice(21, 28);
        data5 = periodData.amountList.slice(28, 35);
        data6 = periodData.amountList.slice(35, 42);
        data7 = periodData.amountList.slice(42, 49);
        data8 = periodData.amountList.slice(49);
    } else if (
        (56 < periodData.amountList.length) &
        (periodData.amountList.length <= 63)
    ) {
        data1 = periodData.amountList.slice(0, 7);
        data2 = periodData.amountList.slice(7, 14);
        data3 = periodData.amountList.slice(14, 21);
        data4 = periodData.amountList.slice(21, 28);
        data5 = periodData.amountList.slice(28, 35);
        data6 = periodData.amountList.slice(35, 42);
        data7 = periodData.amountList.slice(42, 49);
        data8 = periodData.amountList.slice(49, 56);
        data9 = periodData.amountList.slice(56);
    } else if (
        (63 < periodData.amountList.length) &
        (periodData.amountList.length <= 70)
    ) {
        data1 = periodData.amountList.slice(0, 7);
        data2 = periodData.amountList.slice(7, 14);
        data3 = periodData.amountList.slice(14, 21);
        data4 = periodData.amountList.slice(21, 28);
        data5 = periodData.amountList.slice(28, 35);
        data6 = periodData.amountList.slice(35, 42);
        data7 = periodData.amountList.slice(42, 49);
        data8 = periodData.amountList.slice(49, 56);
        data9 = periodData.amountList.slice(56, 63);
        data10 = periodData.amountList.slice(63);
    } else if (
        (70 < periodData.amountList.length) &
        (periodData.amountList.length <= 77)
    ) {
        data1 = periodData.amountList.slice(0, 7);
        data2 = periodData.amountList.slice(7, 14);
        data3 = periodData.amountList.slice(14, 21);
        data4 = periodData.amountList.slice(21, 28);
        data5 = periodData.amountList.slice(28, 35);
        data6 = periodData.amountList.slice(35, 42);
        data7 = periodData.amountList.slice(42, 49);
        data8 = periodData.amountList.slice(49, 56);
        data9 = periodData.amountList.slice(56, 63);
        data10 = periodData.amountList.slice(63, 70);
        data11 = periodData.amountList.slice(70);
    } else if (
        (77 < periodData.amountList.length) &
        (periodData.amountList.length <= 84)
    ) {
        data2 = periodData.amountList.slice(7, 14);
        data1 = periodData.amountList.slice(0, 7);
        data3 = periodData.amountList.slice(14, 21);
        data4 = periodData.amountList.slice(21, 28);
        data5 = periodData.amountList.slice(28, 35);
        data6 = periodData.amountList.slice(35, 42);
        data7 = periodData.amountList.slice(42, 49);
        data8 = periodData.amountList.slice(49, 56);
        data9 = periodData.amountList.slice(56, 63);
        data10 = periodData.amountList.slice(63, 70);
        data11 = periodData.amountList.slice(70, 77);
        data12 = periodData.amountList.slice(77);
    } else if (
        (84 < periodData.amountList.length) &
        (periodData.amountList.length <= 91)
    ) {
        data1 = periodData.amountList.slice(0, 7);
        data2 = periodData.amountList.slice(7, 14);
        data3 = periodData.amountList.slice(14, 21);
        data4 = periodData.amountList.slice(21, 28);
        data5 = periodData.amountList.slice(28, 35);
        data6 = periodData.amountList.slice(35, 42);
        data7 = periodData.amountList.slice(42, 49);
        data8 = periodData.amountList.slice(49, 56);
        data9 = periodData.amountList.slice(56, 63);
        data10 = periodData.amountList.slice(63, 70);
        data11 = periodData.amountList.slice(70, 77);
        data12 = periodData.amountList.slice(77, 84);
        data13 = periodData.amountList.slice(84);
    } else if (
        (91 < periodData.amountList.length) &
        (periodData.amountList.length <= 98)
    ) {
        data1 = periodData.amountList.slice(0, 7);
        data2 = periodData.amountList.slice(7, 14);
        data3 = periodData.amountList.slice(14, 21);
        data4 = periodData.amountList.slice(21, 28);
        data5 = periodData.amountList.slice(28, 35);
        data6 = periodData.amountList.slice(35, 42);
        data7 = periodData.amountList.slice(42, 49);
        data8 = periodData.amountList.slice(49, 56);
        data9 = periodData.amountList.slice(56, 63);
        data10 = periodData.amountList.slice(63, 70);
        data11 = periodData.amountList.slice(70, 77);
        data12 = periodData.amountList.slice(77, 84);
        data13 = periodData.amountList.slice(84, 91);
        data14 = periodData.amountList.slice(91);
    }

    const allData = [];
    for (let i = 1; i <= 14; i++) {
        const dataKey = `data${i}`;
        const currentData = eval(dataKey);

        if (typeof currentData !== "undefined") {
            allData.push(currentData);
        }
    }

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
                    {allData.map((item, index) => (
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
