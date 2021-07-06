import React, { useState, useEffect } from "react";
import moment from "moment";
import "../../style.css";
import Calendar from "./calendar/Calendar";
import CalendarHeader from "./calendar/CalendarHeader";
import Diary from "../modals/Diary";
import {
  MainSection,
  CalendarWrapper,
  MainInnerSection,
  MainInnerWrapper,
} from "../../styles/main/Main.style";
import MainHeaderCompo from "./MainHeaderCompo";
import MyCards from "./cards/MyCards";
import OtherCards from "./cards/OtherCards";
import { connect } from "react-redux";
import axios from "axios";
import { fetchAllLoginDiary, fetchAllUnloginDiary } from "../../actions";

const Main = ({ userInfo, main, fetchAllLoginDiary, fetchAllUnloginDiary }) => {
  const [value, setValue] = useState(moment());
  const [isClick, setIsClick] = useState(false);
  const [clickmoment, setClickmoment] = useState(null);

  useEffect(() => {
    return axios(
      "https://oneul.site/O_NeulServer/main",
      {
        headers: {
          authorization: "Bearer " + userInfo.accessToken,
        },
      },
      {
        withCredentials: true,
      }
    )
      .then((data) => {
        return data.data.data;
      })
      .then((result) => {
        if (userInfo.accessToken) {
          fetchAllLoginDiary(
            result.publicDiary,
            result.myDiary,
            result.musicList
          );
        } else {
          fetchAllUnloginDiary(result.publicDiary, result.musicList);
        }
      })
      .then(() => {
        console.log(main);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <MainInnerSection>
          <MainInnerWrapper>
            <CalendarWrapper>
              <CalendarHeader value={value} next={next} before={before} />
              <Calendar value={value} modalHandle={modalHandle} />
            </CalendarWrapper>
            <div className="my-and-other-card-wrapper">
              <MyCards />
              <OtherCards />
            </div>
          </MainInnerWrapper>
        </MainInnerSection>
      </MainSection>
    </>
  );
};

const mapStateToProps = ({ loginReducer, mainReducer }) => {
  return {
    userInfo: loginReducer.login,
    main: mainReducer,
  };
};

export default connect(mapStateToProps, {
  fetchAllLoginDiary,
  fetchAllUnloginDiary,
})(Main);
