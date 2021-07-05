import React from "react";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const MainHeaderCompo = () => {
  // const history = useHistory();

  // const handleMypage = () => {
  //   history.push("/mypage");
  // };

  return (
    <MainHeader>
      <HeaderWrapper>
        <Link to="/">
          <h1>오늘 ,</h1>
        </Link>
        <Link to="/mypage">
          <button>MY PAGE</button>
        </Link>
      </HeaderWrapper>
    </MainHeader>
  );
};

export default MainHeaderCompo;
