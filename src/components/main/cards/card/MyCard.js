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
import { findEmj, splitDate } from "./cardfunction";
// import { icons } from "../../../../../../../../../컴퓨터/codestates/oneul/im28project02-client/src/icons/icons";
// import { FaceWeather } from "../../../../styles/main/cards/OtherCards.style";
import { makeHexCode } from "./makehex";

const MyCard = ({ diary }) => {
  // const { faceIcons, weatherIcons } = icons;
  const { date, feeling, text, weather } = diary;

  const makeBackground = () => {
    return makeHexCode();
  };

  return (
    <MyDiary>
      <MyDiaryCardFront>
        <MyDiaryFrontHeader>
          {splitDate(date)[0]}년 {splitDate(date)[1]}월 {splitDate(date)[2]}일
        </MyDiaryFrontHeader>
        <img src={mypic} alt="" />
        <IconWrapper>
          {/* <FaceWeather> */}
          {/* {weather && findEmj(weatherIcons, weather).icon}
            {feeling && findEmj(faceIcons, feeling).icon} */}
          {/* </FaceWeather> */}
        </IconWrapper>
      </MyDiaryCardFront>
      <MyDiaryBack hexcode={makeBackground}>
        <MyDiaryBackTextWrapper>
          <MyDiaryBackText>{text}</MyDiaryBackText>
        </MyDiaryBackTextWrapper>
      </MyDiaryBack>
    </MyDiary>
  );
};

export default MyCard;
