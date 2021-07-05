import React, { useState, useEffect } from "react";
import moment from "moment";
import "../../style.css";
import Calendar from "./calendar/Calendar";
import CalendarHeader from "./calendar/CalendarHeader";
import Diary from "../modals/Diary";
import { MainSection, CalendarWrapper } from "../../styles/main/Main.style";
import MainHeaderCompo from "./MainHeaderCompo";
import MyCards from "./cards/MyCards";
import OtherCards from "./cards/OtherCards";
import { connect } from "react-redux";
import { login, logout, modifyAccessToken } from "../../actions";
import axios from "axios";

const Main = ({ userInfo }) => {
  const [value, setValue] = useState(moment());
  const [isClick, setIsClick] = useState(false);
  const [clickmoment, setClickmoment] = useState(null);
  // const [isLogin, setIsLogin] = useState(!null)

  // useEffect(async () => {
  //   const result = await axios.get(
  //     "https://oneul.site/O_NeulServer/user/renewToken",
  //     {
  //       headers: { "Content-Type": "application/json" },
  //       withCredentials: true,
  //     }
  //   );

  //   console.log(result);
  // }, []);

  const modalHandle = (day) => {
    setIsClick((prev) => setIsClick(!prev));
    setClickmoment(day);
  };

  const next = () => {
    setValue(value.add(1, "month").clone());
  };

  const before = () => {
    setValue(value.subtract(1, "month").clone());
  };

  return (
    <>
      {isClick && <Diary modalHandle={modalHandle} clickmoment={clickmoment} />}
      <MainSection>
        <MainHeaderCompo />
        <section className="main-section">
          <div className="wrapper">
            <CalendarWrapper>
              <CalendarHeader value={value} next={next} before={before} />
              <Calendar value={value} modalHandle={modalHandle} />
            </CalendarWrapper>
            <div className="my-and-other-card-wrapper">
              <MyCards />
              <OtherCards />
            </div>
          </div>
        </section>
      </MainSection>
    </>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    userInfo: loginReducer.login,
  };
};

export default connect(mapStateToProps, { login, logout, modifyAccessToken })(
  Main
);
