import React from "react";
import { Diarybackground } from "./Diary";

const ModifyDiary = ({ clickedDayDiary }) => {
  console.log(clickedDayDiary);
  return (
    <>
      <Diarybackground
        data-aos="zoom"
        data-aos-duration={"500"}
      ></Diarybackground>
    </>
  );
};

export default ModifyDiary;
