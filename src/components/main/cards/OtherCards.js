import React from "react";
import styled from "styled-components";
import { BREAK_POINT_LG_SCREEN } from "../../../styles/global.style";
import { MyDiaryFrontHeader } from "../../../styles/main/cards/MyCards.style";
import {
  OtherDiary,
  OtherDiaryHeader,
  OtherDiaryInnerWrapper,
  OtherDiaryIconWrapper,
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
        {/* <Card>김덕기님</Card>
        <Card>김덕기님</Card>
        <Card>김덕기님</Card>
        <Card>김덕기님</Card>
        <Card>김덕기님</Card>
        <Card>김덕기님</Card>
        <Card>김덕기님</Card>
        <Card>김덕기님</Card>
        <Card>김덕기님</Card>
        <Card>김덕기님</Card>
        <Card>김덕기님</Card>
        <Card>김덕기님</Card> */}
      </OtherDiaryInnerWrapper>
    </OtherDiaryWrapper>
  );
};

export default OtherCards;

const OtherDiaryWrapper = styled.div`
  padding-top: 1rem;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 6px 6px; */
  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    height: 45vh;
    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #888;
    }
  }
`;
