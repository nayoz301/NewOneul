import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import {
  Card,
  CardFront,
  CardFrontHeader,
  CardBack,
  CardBackText,
} from "../../../styles/landing/LandingCard.style";
import { myDiaryArrow, diaryResponsive } from "../../landing/card/carousel";
import mypic from "../../../images/mypic.jpeg";
import { BREAK_POINT_MOBILE } from "../../../styles/global.style";
import { Icon } from "react-icons-kit";
import { u1F506 } from "react-icons-kit/noto_emoji_regular/u1F506";
import { cool } from "react-icons-kit/icomoon/cool";

const MyCards = () => {
  return (
    <Scroll>
      <div className="mycard">
        <h1
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "1.9rem",
            fontFamily: "var(--thick-font)",
          }}
        >
          나의 일기
        </h1>
        {/* <Carousel
          breakPoints={diaryResponsive}
          renderArrow={myDiaryArrow}
          pagination={false}
          outerSpacing={20}
          itemPadding={[0, 50]}
        > */}
        <MyDiary>
          <MyDiaryCardFront>
            <MyDiaryFrontHeader>2021-07-01</MyDiaryFrontHeader>
            <img src={mypic} alt="" />
            <div
              style={{
                position: "absolute",
                bottom: "30%",
                fontSize: "1.5rem",
              }}
            >
              name or what
            </div>
            <div style={{ position: "absolute", bottom: "4%", right: "6%" }}>
              <Icon icon={u1F506} size={27} style={{ color: "#f6a102" }}></Icon>
              <Icon
                icon={cool}
                size={20}
                style={{ color: "cornflowerblue" }}
              ></Icon>
            </div>
          </MyDiaryCardFront>
          <MyDiaryBack>
            <MyDiaryBackText>
              오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수 있어서
              아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은 페이지를 찾고
              있었느데 아주 좋은 거 같아요.
            </MyDiaryBackText>
          </MyDiaryBack>
        </MyDiary>
        <MyDiary>
          <MyDiaryCardFront>
            <MyDiaryFrontHeader>2021-07-01</MyDiaryFrontHeader>
            <img src={mypic} alt="" />
          </MyDiaryCardFront>
          <CardBack>
            <MyDiaryBackText>
              {/* 오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수 있어서
                아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은 페이지를 찾고
                있었느데 아주 좋은 거 같아요. */}
            </MyDiaryBackText>
          </CardBack>
        </MyDiary>
        <MyDiary>
          <MyDiaryCardFront>
            <MyDiaryFrontHeader>2021년 7월 1일</MyDiaryFrontHeader>
            <img src={mypic} alt="" />
          </MyDiaryCardFront>
          <CardBack>
            <CardBackText>
              {/* 오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수 있어서
                아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은 페이지를 찾고
                있었느데 아주 좋은 거 같아요. */}
            </CardBackText>
          </CardBack>
        </MyDiary>
        {/* </Carousel> */}
      </div >
    </Scroll >

  );
};

export default MyCards;

const MyDiary = styled(Card)`
  min-width: 15rem;
  min-height: 18rem;
  margin: 1.5rem 0;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    min-width: 17rem;
    min-height: 23rem;
  }
`;

const MyDiaryFrontHeader = styled(CardFrontHeader)`
  font-family: Noto Sans KR;
  font-weight: 300;
  font-size: 1.3rem;
  position: absolute;
  top: 4%;
  left: 6%;
`;

const MyDiaryCardFront = styled(CardFront)`
  & img {
    width: 13rem;
    height: 6.5rem;
  }
`;

const MyDiaryBack = styled(CardBack)`
  overflow: hidden;
`;

const MyDiaryBackText = styled(CardBackText)`
  font-size: 1.2rem;
  width: 70%;
  height: 90%;
  line-height: 1.8;
`;


const Scroll = styled.div`
overflow: scroll;
height: 100%;
border: 1px solid black;
`;