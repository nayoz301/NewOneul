import React from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/global.style";
import DiaryWriting from "../modals/DiaryWriting";

const Diary = ({ clickmoment, closeDiaryModal }) => {
  return (
    <Diarybackground data-aos="zoom" data-aos-duration={"500"}>
      <DiaryWriting
        clickmoment={clickmoment}
        closeDiaryModal={closeDiaryModal}
      />
    </Diarybackground>
  );
};

export default Diary;

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
