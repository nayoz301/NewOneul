import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import mypic from "../../images/mypic.jpeg";
import Carousel, { consts } from "react-elastic-carousel";
import {
  CardSection,
  Cardul,
  CardWrapper,
  CardFront,
  CardBack,
  CardFrontHeader,
  CardBackText,
  Card,
} from "../../styles/landing/LandingCard.style";
import styled from "styled-components";
import "aos/dist/aos.css";

const LandingCard = () => {
  const responsive = [
    { width: 400, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <BsChevronLeft fontSize="5rem" style={style} />
      ) : (
        <BsChevronRight fontSize="5rem" style={style} />
      );
    return (
      <Arrow onClick={onClick} disabled={isEdge}>
        {pointer}
      </Arrow>
    );
  };

  return (
    <CardSection>
      <Cardul data-aos="fade-up" data-aos-duration={"800"}>
        <CardWrapper>
          <Carousel breakPoints={responsive} renderArrow={myArrow}>
            <Card>
              <CardFront>
                <img src={mypic} alt="" />
                <CardFrontHeader>화려한 조명이 나를 감싸</CardFrontHeader>
              </CardFront>
              <CardBack>
                <CardBackText>
                  오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수
                  있어서 아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은
                  페이지를 찾고 있었느데 아주 좋은 거 같아요.
                </CardBackText>
              </CardBack>
            </Card>
            <Card>
              <CardFront>
                <img src={mypic} alt="" />
                <CardFrontHeader>취사병 1</CardFrontHeader>
              </CardFront>
              <CardBack>
                <CardBackText>
                  오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수
                  있어서 아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은
                  페이지를 찾고 있었느데 아주 좋은 거 같아요.
                </CardBackText>
              </CardBack>
            </Card>
            <Card>
              <CardFront>
                <img src={mypic} alt="" />
                <CardFrontHeader>취사병 2</CardFrontHeader>
              </CardFront>
              <CardBack>
                <CardBackText>
                  오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수
                  있어서 아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은
                  페이지를 찾고 있었느데 아주 좋은 거 같아요.
                </CardBackText>
              </CardBack>
            </Card>
            <Card>
              <CardFront>
                <img src={mypic} alt="" />
                <CardFrontHeader>부사관 1.</CardFrontHeader>
              </CardFront>
              <CardBack>
                <CardBackText>
                  오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수
                  있어서 아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은
                  페이지를 찾고 있었느데 아주 좋은 거 같아요.
                </CardBackText>
              </CardBack>
            </Card>
            <Card>
              <CardFront>
                <img src={mypic} alt="" />
                <CardFrontHeader>화려한 조명이 싸악2.</CardFrontHeader>
              </CardFront>
              <CardBack>
                <CardBackText>
                  오늘을 사용하면 일기에 노래로 넣을 수 있고 그림도 그릴 수
                  있어서 아주 편리해요. 매일 잠 자기 전에 일기 쓰기 좋은
                  페이지를 찾고 있었느데 아주 좋은 거 같아요.
                </CardBackText>
              </CardBack>
            </Card>
          </Carousel>
        </CardWrapper>
      </Cardul>
    </CardSection>
  );
};

export default LandingCard;

const style = {
  cursor: "pointer",
};

const Arrow = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-10%);
`;
