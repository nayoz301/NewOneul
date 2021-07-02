import React from "react";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";

const MainHeaderCompo = () => {
  return (
    <MainHeader>
      <HeaderWrapper>
        <h1>오늘 ,</h1>
        <button onClick={() => console.log("안녕")}>MY PAGE</button>
      </HeaderWrapper>
    </MainHeader>
  );
};

export default MainHeaderCompo;
