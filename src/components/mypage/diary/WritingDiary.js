import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { flexCenter } from "../../../styles/global.style";
import DiaryWriting from "../../modals/DiaryWriting";
import styled from "styled-components";
import "aos/dist/aos.css";


const WritingDiary = ({ diary, clickToday, closeDiary, diaryIdSelect, diaryIdPass }) => {

  const filteringDiary = () => {
    if (diaryIdSelect) {
      const otherDiary = diary.publicDiary.filter(
        (el) => el.id === diaryIdSelect
      )[0];
      otherDiary.isOtherDiary = true;
      return otherDiary
    } else if (clickToday) {
      return diary.myDiary.filter(
        (el) => el.date === clickToday.format("YYYY-M-D")
      )[0];
    }
  }



  const selectedDiary = filteringDiary();

  useEffect(() => {
    console.log(selectedDiary)
  })

  return (
    <Diarybackground data-aos={"zoom"} data-aos-duration={"500"}>
      <DiaryWriting
        closeDiary={closeDiary}
        clickToday={clickToday}
        selectedDiary={selectedDiary}
        diaryIdPass={diaryIdPass}
      />
    </Diarybackground>
  )
}

const mapStateToProps = ({ mainReducer }) => {
  return {
    diary: mainReducer,
  };
};

export default connect(mapStateToProps)(WritingDiary);

export const Diarybackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  ${flexCenter}
`;