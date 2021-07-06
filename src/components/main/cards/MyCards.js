import React from "react";
import Carousel from "react-elastic-carousel";
import { myDiaryArrow, diaryResponsive } from "../../landing/card/carousel";
import { Icon } from "react-icons-kit";
import { unlock } from "react-icons-kit/fa/unlock";
import { pencil } from "react-icons-kit/entypo/pencil";
import {
  MyCardWrapper,
  MyDiaryHeader,
  DiaryLogin,
} from "../../../styles/main/cards/MyCards.style";
import { connect } from "react-redux";
import MyCard from "./card/MyCard";

const MyCards = ({ userInfo }) => {
  const content =
    userInfo.myDiary.length === 0 ? (
      <DiaryLogin>
        첫 일기 남기기
        <Icon icon={pencil} />
      </DiaryLogin>
    ) : (
      <Carousel
        breakPoints={diaryResponsive}
        renderArrow={myDiaryArrow}
        pagination={false}
        itemPadding={[0, 50]}
      >
        {userInfo.myDiary.map((diary) => (
          <MyCard />
        ))}
      </Carousel>
    );
  return (
    <MyCardWrapper>
      <MyDiaryHeader>나의 오늘 .</MyDiaryHeader>
      {userInfo.login.accessToken === "" ? (
        <DiaryLogin>
          로그인
          <Icon icon={unlock} />
        </DiaryLogin>
      ) : (
        content
      )}
    </MyCardWrapper>
  );
};

const mapStateToProps = ({ loginReducer, mainReducer }) => {
  return {
    userInfo: loginReducer,
    // myDiary: mainReducer.myDiary,
  };
};

export default connect(mapStateToProps)(MyCards);
