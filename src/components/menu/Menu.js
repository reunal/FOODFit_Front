import React, { useEffect, useState } from "react";
import "../../styles/menu/Menu.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import MenuModal from "./MenuModal";
import { getSearchData, insertMenu } from "../controller/MenuController";

const data = [
  {
    id: 446,
    name: "크림 떡볶이",
    calorie: 144.0,
    protein: 3.51,
    fat: 2.96,
    salt: 25.96,
  },
  {
    id: 6754,
    name: "짜장 떡볶이",
    calorie: 167.0,
    protein: 5.27,
    fat: 5.54,
    salt: 24.0,
  },
  {
    id: 6755,
    name: "로제 떡볶이",
    calorie: 161.0,
    protein: 3.9,
    fat: 4.36,
    salt: 26.45,
  },
  {
    id: 67567,
    name: "김밥",
    calorie: 461.0,
    protein: 3.9,
    fat: 4.36,
    salt: 26.45,
  },
  {
    id: 67569,
    name: "수원 왕갈비 통닭",
    calorie: 471.0,
    protein: 3.9,
    fat: 4.36,
    salt: 26.45,
  },
];

const Menu = () => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [dataIdx, setDataIdx] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const onUpdateSearchData = async () => {
    const res = await getSearchData(searchText);
    setSearchData(res.slice(0, 5));
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchText) onUpdateSearchData();
    }, 300);

    return () => clearTimeout(debounce);
  }, [searchText]);

  const onChangeSearchText = async (e) => {
    setSearchText(() => e.target.value);
  };

  const onChangeModalOpen = (key) => {
    setModalOpen(!modalOpen);
    setDataIdx(key);
  };

  const onDeleteItem = (idx) => {
    const newFoodList = foodList.filter((item, index) => index !== idx);
    setFoodList(newFoodList);
  };

  const onInsertMenu = async () => {
    const listt = foodList.map((foodItem) => ({
      foodid: foodItem.id,
      weight: 100,
    }));

    const list2 = { list: listt };

    console.log(list2);
    const res = await insertMenu(list2);
    console.log(res);
  };

  return (
    <div className="menuContainer">
      <section className="searchSection">
        <div className="searchBox boxBorder">
          <input type="search" value={searchText} onChange={onChangeSearchText} />
          <button className="searchBtn" type="button" onClick={onUpdateSearchData}>
            <SearchIcon color="disabled" />
          </button>
        </div>
        {searchData.length !== 0 ? (
          <div className="searchData boxBorder">
            {searchData.map((data, idx) => {
              return (
                <p key={idx} onClick={() => onChangeModalOpen(idx)}>
                  <SearchIcon />
                  {data.foods.name}
                </p>
              );
            })}
          </div>
        ) : null}
        {modalOpen ? (
          <MenuModal
            modalOpen={modalOpen}
            onChangeModalOpen={onChangeModalOpen}
            foodList={foodList}
            setFoodList={setFoodList}
            data={searchData[dataIdx]}
          />
        ) : null}
      </section>
      <div className="foodListBox">
        {foodList.map((foodItem, idx) => {
          return (
            <div className="foodItem boxBorder">
              <p className="text" key={foodItem.id}>
                {foodItem.name}
              </p>
              <span className="closeBtn" key={idx} onClick={() => onDeleteItem(idx)}>
                &#x00d7;
              </span>
            </div>
          );
        })}
      </div>
      <button className="nextBtn button boxBorder text" onClick={onInsertMenu}>
        다음
      </button>
    </div>
  );
};

export default Menu;
