import React from "react";
import "../../styles/menu/MenuModal.css";

const MenuModal = ({ modalOpen, onChangeModalOpen, foodList, setFoodList, data }) => {
  const { name, calorie, protein, fat, salt } = data.foods;

  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) onChangeModalOpen();
  };

  const onInsertFood = () => {
    setFoodList([...foodList, name]);
    onChangeModalOpen();
  };

  return (
    <div className="modalContainer" onClick={onCloseModal}>
      <div className="modalContent">
        <div className="closeBox">
          <span className="closeBtn" onClick={onChangeModalOpen}>
            &#x00d7;
          </span>
        </div>
        <p className="title inputBox">{name}</p>
        <div className="dataInfo">
          <p>칼로리 : {calorie}</p>
          <p>단백질 : {protein}</p>
          <p>지방 : {fat}</p>
          <p>나트륨 : {salt}</p>
        </div>
        <button className="insertBtn button boxBorder text" onClick={onInsertFood}>
          추가
        </button>
      </div>
    </div>
  );
};

export default MenuModal;
