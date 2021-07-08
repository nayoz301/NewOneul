import React from "react";
import { MyDiaryFrontHeader } from "../../../styles/main/cards/MyCards.style";
import {
  OtherDiary,
  OtherDiaryHeader,
  OtherDiaryInnerWrapper,
  OtherDiaryIconWrapper,
  OtherDiaryWrapper,
  NameSpan,
} from "../../../styles/main/cards/OtherCards.style";
import mypic from "../../../images/mypic.jpeg";
import { Icon } from "react-icons-kit";
import { happy } from "react-icons-kit/icomoon";
import { iosSnowy } from "react-icons-kit/ionicons";
import { heart, heartO } from "react-icons-kit/fa";

const OtherCards = () => {
  return (
    <OtherDiaryWrapper>
      <OtherDiaryHeader>타인의 오늘 .</OtherDiaryHeader>
      <OtherDiaryInnerWrapper>
        <OtherDiary>
          <MyDiaryFrontHeader>2021년 7월 1일</MyDiaryFrontHeader>
          <img src={mypic} alt="" />
          <NameSpan>name</NameSpan>
          <OtherDiaryIconWrapper>
            <div>
              <Icon icon={heartO} size={26} style={{ color: "#f06f83" }}></Icon>
            </div>
            <div>
              <Icon
                icon={iosSnowy}
                size={38}
                style={{ color: "#5488c8" }}
              ></Icon>
              <Icon icon={happy} size={26} style={{ color: "#22c0c1" }}></Icon>
            </div>
          </OtherDiaryIconWrapper>
        </OtherDiary>
        <OtherDiary>
          <MyDiaryFrontHeader>2021년 7월 1일</MyDiaryFrontHeader>
          <img src={mypic} alt="" />
          <NameSpan>name</NameSpan>
          <OtherDiaryIconWrapper>
            <div>
              <Icon icon={heartO} size={26} style={{ color: "#f06f83" }}></Icon>
            </div>
            <div>
              <Icon
                icon={iosSnowy}
                size={38}
                style={{ color: "#5488c8" }}
              ></Icon>
              <Icon icon={happy} size={26} style={{ color: "#22c0c1" }}></Icon>
            </div>
          </OtherDiaryIconWrapper>
        </OtherDiary>
        <OtherDiary>
          <MyDiaryFrontHeader>2021년 7월 1일</MyDiaryFrontHeader>
          <img src={mypic} alt="" />
          <NameSpan>name</NameSpan>
          <OtherDiaryIconWrapper>
            <div>
              <Icon icon={heartO} size={26} style={{ color: "#f06f83" }}></Icon>
            </div>
            <div>
              <Icon
                icon={iosSnowy}
                size={38}
                style={{ color: "#5488c8" }}
              ></Icon>
              <Icon icon={happy} size={26} style={{ color: "#22c0c1" }}></Icon>
            </div>
          </OtherDiaryIconWrapper>
        </OtherDiary>
        <OtherDiary>
          <MyDiaryFrontHeader>2021년 7월 1일</MyDiaryFrontHeader>
          <img src={mypic} alt="" />
          <NameSpan>name</NameSpan>
          <OtherDiaryIconWrapper>
            <div>
              <Icon icon={heartO} size={26} style={{ color: "#f06f83" }}></Icon>
            </div>
            <div>
              <Icon
                icon={iosSnowy}
                size={38}
                style={{ color: "#5488c8" }}
              ></Icon>
              <Icon icon={happy} size={26} style={{ color: "#22c0c1" }}></Icon>
            </div>
          </OtherDiaryIconWrapper>
        </OtherDiary>
        <OtherDiary>
          <MyDiaryFrontHeader>2021년 7월 1일</MyDiaryFrontHeader>
          <img src={mypic} alt="" />
          <NameSpan>name</NameSpan>
          <OtherDiaryIconWrapper>
            <div>
              <Icon icon={heartO} size={26} style={{ color: "#f06f83" }}></Icon>
            </div>
            <div>
              <Icon
                icon={iosSnowy}
                size={38}
                style={{ color: "#5488c8" }}
              ></Icon>
              <Icon icon={happy} size={26} style={{ color: "#22c0c1" }}></Icon>
            </div>
          </OtherDiaryIconWrapper>
        </OtherDiary>
      </OtherDiaryInnerWrapper>
    </OtherDiaryWrapper>
  );
};

export default OtherCards;
