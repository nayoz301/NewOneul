import React from "react";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const MainHeaderCompo = () => {
  const history = useHistory();

  const handleMypage = () => {
    history.push("/mypage");
  }

  return (
    <MainHeader>
      <HeaderWrapper>
        <h1>오늘 ,</h1>
        <button onClick={handleMypage}>MY PAGE</button>
      </HeaderWrapper>
    </MainHeader>
  );
};

export default MainHeaderCompo;
