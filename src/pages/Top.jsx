import React from "react";
import topData from "../json/data/top.json";
import "../style/main.scss";

const Top = () => {
  return (
    <div className="page tops">
      <h1>상의</h1>
      <div className="outBox">
        {topData.map((item) => {
          return (
            <div key={item.id} className="inbox">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <h2>{item.price}원</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Top;
