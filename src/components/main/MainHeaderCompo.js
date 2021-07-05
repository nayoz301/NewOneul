import React from "react";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const MainHeaderCompo = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);

  const tokenRequest = () => {
    setIsLogin(true);
  };

  useEffect(() => {
    async function token() {
      await axios
        .post("https://oneul.site/O_NeulServer/user/diarys", {
          headers: {
            Authorization: "accessToken",
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

  const goHome = () => {
    history.push("/main");
  };

  // const handleMypage = () => {
  //   history.push("/mypage");
  // };

  return (
    <MainHeader>
      <HeaderWrapper>
        <h1 onClick={goHome}>오늘 ,</h1>
        <button onClick={handleMypage}>MY PAGE</button>
      </HeaderWrapper>
    </MainHeader>
  );
};

export default MainHeaderCompo;
