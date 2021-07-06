import React from "react";
import {
  Boxcontainer,
  ListName,
  MyList,
  MySympathyList,
} from "../../styles/mypage/GetMyDiary.style";
// import MyCard from "./dummy/MyCards";

const GetMyDiary = () => {
  return (
    <Boxcontainer>
      <ListName>나의 일기</ListName>
      <MyList>{/* <MyCard /> */}</MyList>
    </Boxcontainer>
  );
};

export default GetMyDiary;
