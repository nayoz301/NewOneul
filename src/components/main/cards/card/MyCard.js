import React from "react";
import {
  MyDiary,
  MyDiaryFrontHeader,
  MyDiaryCardFront,
  MyDiaryBack,
  MyDiaryBackTextWrapper,
  MyDiaryBackText,
  IconWrapper,
} from "../../../../styles/main/cards/MyCards.style";
import mypic from "../../../../images/mypic.jpeg";
import { Icon } from "react-icons-kit";
import { happy } from "react-icons-kit/icomoon";
import { iosSnowy } from "react-icons-kit/ionicons";

const MyCard = () => {
  return (
    <MyDiary>
      <MyDiaryCardFront>
        <MyDiaryFrontHeader>2021년 7월 1일</MyDiaryFrontHeader>
        <img src={mypic} alt="" />
        <IconWrapper>
          <Icon icon={iosSnowy} size={38} style={{ color: "#5488c8" }}></Icon>
          <Icon icon={happy} size={26} style={{ color: "#22c0c1" }}></Icon>
        </IconWrapper>
      </MyDiaryCardFront>
      <MyDiaryBack>
        <MyDiaryBackTextWrapper>
          <MyDiaryBackText>
            오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수 있어서
            아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은 페이지를 찾고
            있었느데 아주 좋은 거 같아요.
          </MyDiaryBackText>
        </MyDiaryBackTextWrapper>
      </MyDiaryBack>
    </MyDiary>
  );
};

export default MyCard;
