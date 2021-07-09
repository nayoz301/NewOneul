import React, { useEffect } from "react";
import styled from "styled-components";
import { flexCenter } from "../../styles/global.style";
import DiaryWriting from "../modals/DiaryWriting";
const Diary = ({ modalHandle, clickmoment }) => {
  console.log(clickmoment.format("L"));
  return (
    <Diarybackground>
      <DiaryWriting modalHandle={modalHandle} clickmoment={clickmoment} />
    </Diarybackground>
  );
};

export default Diary;

const Diarybackground = styled.div`
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

const Button = styled.button`
  padding: 5rem;
  color: #000;
  background: #fff;
  border: 5px solid cornflowerblue;
`;
