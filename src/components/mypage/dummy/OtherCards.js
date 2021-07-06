import React from "react";
import styled from 'styled-components';


const Scroll = styled.div`
overflow: scroll;
height: 100%;
border: 1px solid black;
`;

// 1200px에서 wrap

const OtherCards = () => {
  return (
    <Scroll>
      <h1
        // mycard 를 가져와서 그냥 쓰자
        style={{
          textAlign: "center",
          fontSize: "1.9rem",
          fontFamily: "var(--thick-font)",
        }}
      >
        나의 공감일기
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
            width: "11rem",
            height: "14rem",
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
            width: "10rem",
            height: "14rem",
            background: "tomato",
            fontSize: "1.6rem",
            border: " 1px solid yellow",
            // margin: ".9rem",
          }}
        >
          김덕기님
        </div>
      </div>
    </Scroll>
  );
};

export default OtherCards;
