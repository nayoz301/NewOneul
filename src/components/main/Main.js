import React, { useState } from "react";
import moment from "moment";
import "../../style.css";
import Calendar from "./calendar/Calendar";
import CalendarHeader from "./calendar/CalendarHeader";
import Diary from "../modals/Diary";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";

const Main = () => {
  const [value, setValue] = useState(moment());
  const [isClick, setIsClick] = useState(false);
  const [clickmoment, setClickmoment] = useState(null);

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
  // fffdfa
  return (
    <>
      {isClick && <Diary modalHandle={modalHandle} clickmoment={clickmoment} />}
      <section style={{ minHeight: "100vh", background: "#fffdfa" }}>
        <MainHeader>
          <HeaderWrapper>
            <h1>오늘 ,</h1>
            <button onClick={() => console.log("안녕")}>마이페이지</button>
          </HeaderWrapper>
        </MainHeader>
        <section className="main-section">
          <div
            className="wrapper"
            style={{
              border: "1px solid orange",
              margin: "0 auto",
              padding: "2px",
              height: "100%",
            }}
          >
            <div
              className="calendar"
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
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
      </section>
    </>
  );
};

export default Main;
