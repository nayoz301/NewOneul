import React, { useState, useEffect } from "react";
import moment from "moment";
import "../../style.css";
import Calendar from "./calendar/Calendar";
import CalendarHeader from "./calendar/CalendarHeader";
import Diary from "../modals/Diary";
import DiaryWriting from "../modals/DiaryWriting";
import MusicModal from "../modals/MusicModal";
import {
  MainSection,
  CalendarWrapper,
  MainInnerSection,
  MainInnerWrapper,
  DiaryWrapper,
} from "../../styles/main/Main.style";
import MainHeaderCompo from "./MainHeaderCompo";
import MyCards from "./cards/MyCards";
import OtherCards from "./cards/OtherCards";
import { connect } from "react-redux";
import axios from "axios";
import { fetchAllLoginDiary, fetchAllUnloginDiary } from "../../actions";

const Main = ({ userInfo, fetchAllLoginDiary, fetchAllUnloginDiary }) => {
  const [value, setValue] = useState(moment());
  const [isClick, setIsClick] = useState(false);
  const [clickmoment, setClickmoment] = useState(null);
  //
  // const [diaryOpen, setDiaryOpen] = useState(false);

  // const DiaryModalOnOff = () => {
  //   setDiaryOpen(!diaryOpen);
  //   console.log("콘솔", diaryOpen);
  // };
  //

  useEffect(() => {
    return axios(
      "https://oneul.site/O_NeulServer/main",
      {
        headers: {
          authorization: "Bearer " + userInfo.login.accessToken,
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
        if (userInfo.login.accessToken) {
          fetchAllLoginDiary(
            result.publicDiary,
            result.myDiary,
            result.musicList
          );
        } else {
          fetchAllUnloginDiary(result.publicDiary, result.musicList);
        }
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
            <DiaryWrapper>
              <MyCards />
              <OtherCards />
            </DiaryWrapper>
          </MainInnerWrapper>
        </MainInnerSection>
      </MainSection>
    </>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    userInfo: loginReducer,
  };
};

export default connect(mapStateToProps, {
  fetchAllLoginDiary,
  fetchAllUnloginDiary,
})(Main);
