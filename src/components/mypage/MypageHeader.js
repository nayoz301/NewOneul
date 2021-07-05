import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";

const MainHeaderCompo = () => {
  const [isLogout, setIsLogout] = useState(false);
  const history = useHistory();

  const Logout = () => {
    // setIsLogout(!isLogout);
    localStorage.clear();
    history.push("/");
    Swal.fire({
      title: "👋 로그아웃 🥲",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <MainHeader>
      <HeaderWrapper>
        <h1>오늘 ,</h1>
        <button onClick={Logout}>로그아웃</button>
      </HeaderWrapper>
    </MainHeader>
  );
};

export default MainHeaderCompo;
