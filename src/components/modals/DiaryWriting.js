import React, { useState } from "react";

const DiaryWriting = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          display: "flex",
          flexFlow: "column wrap",
          flex: "1 100%",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
          width: "50%",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            backgroundColor: "ivory",
            display: "flex",
            flexFlow: "row wrap",
            flex: "0.7",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              flex: "2",
              textAlign: "center",
            }}
          >
            날짜
          </div>
          <div
            style={{
              border: "1px solid black",
              flex: "1",
              textAlign: "center",
            }}
          >
            이모지
          </div>
          <div
            style={{
              border: "1px solid black",
              flex: "2",
              textAlign: "center",
            }}
          >
            날씨
          </div>
        </div>
        <div style={{ border: "1px solid black", flex: "5", width: "100%" }}>
          여긴 그림판
        </div>
        <div style={{ border: "1px solid black", flex: "3", width: "100%" }}>
          여긴 글쓰기
        </div>
        <div
          style={{
            border: "1px solid black",
            display: "flex",
            flexFlow: "row wrap",
            flex: "0.7",
            justifyContent: "flex-end",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div style={{ border: "1px solid black" }}>공개설정</div>
          <div style={{ border: "1px solid black" }}>등록하기</div>
        </div>
      </div>
    </>
  );
};

export default DiaryWriting;
