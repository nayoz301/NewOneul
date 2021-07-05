import React from "react";
import styled from "styled-components";
import {
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_LG_SCREEN,
} from "../../../styles/global.style";
import { MyDiaryHeader } from "../../../styles/main/cards/MyCards.style";

// 1200px에서 wrap

const OtherCards = () => {
  return (
    <OtherDiaryWrapper>
      <OtherDiaryHeader>타인의 오늘 .</OtherDiaryHeader>
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
    </OtherDiaryWrapper>
  );
};

export default OtherCards;

const OtherDiaryWrapper = styled.div`
  /* border: solid 1px #6e7491; */
  padding-top: 1.4rem;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 6px 6px; */
  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    height: 55vh;
    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #888;
    }
  }
`;

const OtherDiaryHeader = styled(MyDiaryHeader)`
  margin-top: 0;
`;
