import React, { useState, useEffect, useCallback } from "react";
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
  DiaryWrapper,
} from "../../styles/main/Main.style";
import MainHeaderCompo from "./MainHeaderCompo";
import MyCards from "./cards/MyCards";
import OtherCards from "./cards/OtherCards";
import { connect } from "react-redux";
import { fetchAllLoginDiary, fetchAllUnloginDiary } from "../../actions";
import useFetch from "./useFetch";

const Main = ({ userInfo, fetchAllLoginDiary, fetchAllUnloginDiary }) => {
  const [value, setValue] = useState(moment());
  const [isClick, setIsClick] = useState(false);
  const [clickmoment, setClickmoment] = useState(null);
  const [selectedDiaryId, setSelectedDiaryId] = useState(0);

  useFetch(
    "https://oneul.site/O_NeulServer/main",
    userInfo,
    fetchAllLoginDiary,
    fetchAllUnloginDiary
  );

  console.log(
    useFetch(
      "https://oneul.site/O_NeulServer/main",
      userInfo,
      fetchAllLoginDiary,
      fetchAllUnloginDiary
    )
  );

  useEffect(() => {
    if (clickmoment !== null) {
      return setIsClick((prev) => setIsClick(!prev));
    }
  }, [clickmoment]);

  const closeDiaryModal = () => {
    setIsClick((prev) => setIsClick(!prev));
  };

  const momentHandler = (day) => {
    setClickmoment(day);
  };

  const passDiaryId = (diaryId) => {
    setSelectedDiaryId(diaryId);
  };

  const next = useCallback(() => {
    setValue(value.add(1, "month").clone());
  }, [value]);

  const before = useCallback(() => {
    setValue(value.subtract(1, "month").clone());
  }, [value]);

  return (
    <>
      {isClick && (
        <Diary
          clickmoment={clickmoment}
          closeDiaryModal={closeDiaryModal}
          selectedDiaryId={selectedDiaryId}
          passDiaryId={passDiaryId}
        />
      )}
      <MainSection>
        <MainHeaderCompo />
        <MainInnerSection>
          <MainInnerWrapper>
            <CalendarWrapper>
              <CalendarHeader value={value} next={next} before={before} />
              <Calendar value={value} modalHandle={momentHandler} />
            </CalendarWrapper>
            <DiaryWrapper>
              <MyCards modalHandle={momentHandler} />
              <OtherCards
                closeDiaryModal={closeDiaryModal}
                passDiaryId={passDiaryId}
              />
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
