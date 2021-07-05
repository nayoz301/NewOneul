import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";

const MainHeaderCompo = () => {
  const history = useHistory();

  const Logout = async () => {
    await axios
      .delete("https://oneul.site/O_NeulServer/user/logout")
      .then((res) => {
        console.log("로그아웃");
        history.push("/");
        Swal.fire({
          title: "👋 로그아웃 🥲",
          showConfirmButton: true,
          timer: 5000,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const goHome = () => {
    history.push("/main");
  };

  return (
    <MainHeader>
      <HeaderWrapper>
        <h1 onClick={goHome}>오늘 ,</h1>
        <button onClick={Logout}>로그아웃</button>
      </HeaderWrapper>
    </MainHeader>
  );
};

export default MainHeaderCompo;
