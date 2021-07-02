import React, { useState } from "react";
import moment from "moment";
import "../../style.css";
import Calendar from "./calendar/Calendar";
import CalendarHeader from "./calendar/CalendarHeader";
import Diary from "../modals/Diary";
// import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";
import styled from "styled-components";
import MainHeaderCompo from "./MainHeaderCompo";

const Main = () => {
  const [value, setValue] = useState(moment());
  const [isClick, setIsClick] = useState(false);
  const [clickmoment, setClickmoment] = useState(null);
  // const [isLogin, setIsLogin] = useState(!null)

  const modalHandle = (day) => {
    setIsClick((prev) => setIsClick(!prev));
    setClickmoment(day);
  };

  const next = () => {
    setValue(value.add(1, "month").clone());
    console.log(value.format("M"));
  };

  const before = () => {
    setValue(value.subtract(1, "month").clone());
    console.log(value.format("M"));
  };

  return (
    <>
      {isClick && <Diary modalHandle={modalHandle} clickmoment={clickmoment} />}
      <MainSection>
        <MainHeaderCompo />
        <section className="main-section">
          <div
            className="wrapper"
            style={{
              // border: "1px solid orange",
              margin: "4rem auto",
              height: "100%",
            }}
          >
            <div className="calendar">
              <CalendarHeader value={value} next={next} before={before} />
              <Calendar value={value} modalHandle={modalHandle} />
            </div>

            <div className="my-and-other-card-wrapper">
              <div
                className="mycard"
                style={{ border: "1px solid green", height: "17rem" }}
              >
                <h1 style={{ textAlign: "center" }}>나의 일기</h1>
              </div>
              <div
                className="card-wrapper"
                style={{ border: "1px solid blue" }}
              >
                <h1 style={{ textAlign: "center" }}>남의 일기</h1>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: "1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "15rem",
                      height: "18rem",
                      background: "tomato",
                      fontSize: "1.6rem",
                      border: " 1px solid yellow",
                      // margin: ".9rem",
                    }}
                  >
                    김덕기님
                  </div>
                </div>
              </div>
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
