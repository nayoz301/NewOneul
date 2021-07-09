import React from "react";
import styled from 'styled-components';
import MyCard from '../dummy/MyCard';
import { Link } from "react-router-dom";

const DiaryPost = () => {

  return (
    <BoxContainer>
      <Div>
        <select style={{ height: "20px" }}>
          <option value="">
            선택
          </option>
          <option value="1">전체</option>
          <option value="2">공개</option>
          <option value="3">비공개</option>
        </select>
        <Link to='/mypage/diarywrite'>
          <Button>일기쓰기</Button>
        </Link>
      </Div>
      <DiaryContainer>
        <MyCard />
      </DiaryContainer>

    </BoxContainer >
  )
}

export default DiaryPost

export const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  flex-wrap: wrap;
  jutify-content: center;
  font-family: var(--thick-font);
`;

export const DiaryContainer = styled.div`
  min-width: 20%;
  height: 70vh;
  overflow-y: auto;
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-item: center;
  font-family: var(--thick-font);
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
`;

export const Button = styled.button`
font-family: var(--thick-font);
font-size: 1.2rem;
font-weight: 500;
width: 6rem;
height: auto;
background-color: #DB7DC5;
color: #fff;
padding: .5rem;
border: none;
border-radius: .7rem;

&:hover {
  background: #DB18B1;
}
`;