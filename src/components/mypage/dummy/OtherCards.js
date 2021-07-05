import React from "react";

// 1200px에서 wrap

const OtherCards = () => {
  return (
    <div className="card-wrapper">
      <h1
        // mycard 를 가져와서 그냥 쓰자
        style={{
          textAlign: "center",
          fontSize: "1.9rem",
          fontFamily: "var(--thick-font)",
        }}
      >
        남의 일기
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          className="card"
          style={{
            width: "15rem",
            height: "18rem",
            background: "tomato",
            fontSize: "1.6rem",
            border: "1px solid yellow",
            // margin: ".9rem",
          }}
        >
          김덕기님
        </div>
        <div
          className="card"
          style={{
            width: "15rem",
            height: "18rem",
            background: "tomato",
            fontSize: "1.6rem",
            border: " 1px solid yellow",
            // margin: ".9rem",
          }}
        >
          김덕기님
        </div>
      </div>
    </div>
  );
};

export default OtherCards;
