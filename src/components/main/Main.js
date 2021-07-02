import React, { useState } from "react";
import moment from "moment";
import "../../style.css";
import Calendar from "./calendar/Calendar";
import CalendarHeader from "./calendar/CalendarHeader";
import Diary from "../modals/Diary";
// import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";
import styled from "styled-components";
import MainHeaderCompo from "./MainHeaderCompo";
import MyCards from "./cards/MyCards";
import OtherCards from "./cards/OtherCards";

const Main = () => {
  const [value, setValue] = useState(moment());
  const [isClick, setIsClick] = useState(false);
  const [clickmoment, setClickmoment] = useState(null);
  // const [isLogin, setIsLogin] = useState(!null)

  const modalHandle = (day) => {
    setIsClick((prev) => setIsClick(!prev));
    // need to check this out ↓
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
            <div className="calendar">
              <CalendarHeader value={value} next={next} before={before} />
              <Calendar value={value} modalHandle={modalHandle} />
            </div>
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

export default Main;

const MainSection = styled.section`
  min-height: 100vh;
  background: #fffdfa;
  font-family: var(--primary-font);
`;
