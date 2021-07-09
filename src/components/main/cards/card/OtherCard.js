import React, { useCallback } from "react";
import { MyDiaryFrontHeader } from "../../../../styles/main/cards/MyCards.style";
import {
  NameSpan,
  OtherDiary,
  OtherDiaryIconWrapper,
} from "../../../../styles/main/cards/OtherCards.style";
import mypic from "../../../../images/mypic.jpeg";
import { Icon } from "react-icons-kit";
import { heart, heartO } from "react-icons-kit/fa";
import { splitDate, findEmj, checkEmpha } from "./cardfunction";
import { connect } from "react-redux";
import { icons } from "../../../../icons/icons";
import styled from "styled-components";

const OtherCard = ({ diary, userInfo }) => {
  const { faceIcons, weatherIcons } = icons;
  const { id } = userInfo.userInfo;

  const { date, image, feeling, user, weather, emphathies } = diary;

  const heartCheck = (e) => {
    // stop Bubbling of Event
    e.stopPropagation();
    console.log("YEAHEEEE");
  };

  return (
    <OtherDiary
      onClick={() => {
        console.log("clicked");
      }}
    >
      <MyDiaryFrontHeader>
        {splitDate(date)[0]}년 {splitDate(date)[1]}월 {splitDate(date)[2]}일
      </MyDiaryFrontHeader>
      <img src={mypic} alt="" />
      <NameSpan>{user && user.nickname}</NameSpan>
      <OtherDiaryIconWrapper>
        <Heart>
          {checkEmpha(emphathies, id) ? (
            <Icon
              icon={heart}
              size={26}
              style={{ color: "#f06f83", cursor: "pointer" }}
              onClick={(e) => heartCheck(e)}
            ></Icon>
          ) : (
            <Icon
              icon={heartO}
              size={26}
              style={{ color: "#f06f83", cursor: "pointer" }}
              onClick={(e) => heartCheck(e)}
            ></Icon>
          )}
        </Heart>
        <FaceWeather>
          {weather && findEmj(weatherIcons, weather).icon}
          {feeling && findEmj(faceIcons, feeling).icon}
        </FaceWeather>
      </OtherDiaryIconWrapper>
    </OtherDiary>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return { userInfo: loginReducer };
};

export default connect(mapStateToProps)(OtherCard);

const FaceWeather = styled.div`
  display: flex;
  align-items: center;
  & svg {
    width: 4rem;
    height: 4rem;
  }

  font-size: 2.5rem;
`;

const Heart = styled.div`
  transform: scale(0.9);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;
