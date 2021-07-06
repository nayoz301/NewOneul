import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";
import { connect } from "react-redux";
import { login } from '../../actions';

const MainHeaderCompo = ({ login, userLogin }) => {
  const history = useHistory();

  const Logout = () => {
    return axios
      .get("https://oneul.site/O_NeulServer/user/signout")
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

  return (
    <MainHeader>
      <HeaderWrapper>
        <Link to="/main">
          <h1>오늘 ,</h1>
        </Link>
        <button onClick={Logout}>로그아웃</button>
      </HeaderWrapper>
    </MainHeader>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    userLogin: loginReducer,
  };
};

export default connect(mapStateToProps, { login })(MainHeaderCompo);