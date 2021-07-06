import React from "react";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const MainHeaderCompo = () => {
  const [isLogin, setIsLogin] = useState(false);

  const tokenRequest = () => {
    setIsLogin(true);
  };

  useEffect(() => {
    async function token() {
      await axios
        .post("https://oneul.site/O_NeulServer/user/diarys", {
          headers: {
            authorization: "accessToken",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          tokenRequest();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <MainHeader>
      <HeaderWrapper>
        <Link to="/main">
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
