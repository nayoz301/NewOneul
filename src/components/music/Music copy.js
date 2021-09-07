import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile as farSmile } from "@fortawesome/free-regular-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import EmojiModal from "./EmojiModal";
import WeatherModal from "./Weather";

const DiaryHeader = ({
  clickmoment,
  emojiChosen,
  emojiModalOnOff,
  emojiOpen,
  musicModalOnOff,
  whatEmoji,
  weatherData,
  weatherChosen,
  setWeatherChosen,
  selectedDate,
}) => {
  const emojiModalHandler = React.useCallback(() => {
    emojiModalOnOff();
  }, [emojiModalOnOff]);

  return (
    <Header>
      <HeaderDate>{clickmoment.format("LL dddd")}</HeaderDate>

      <HeaderEmoji>
        <CurrentEmoji emojiChosen={emojiChosen}>
          <FontAwesomeIcon
            icon={emojiChosen ? emojiChosen.emoji : farSmile}
            onClick={emojiModalHandler}
          />
        </CurrentEmoji>
        <EmojiModal
          emojiModalOnOff={emojiModalOnOff}
          emojiOpen={emojiOpen}
          whatEmoji={whatEmoji}
        ></EmojiModal>
      </HeaderEmoji>

      <HeaderWeather>
        <WeatherModal weatherData={weatherData} weatherChosen={weatherChosen} />
      </HeaderWeather>

      <MusicBtn onClick={musicModalOnOff}>
        <FontAwesomeIcon icon={faMusic} />
      </MusicBtn>

      <MusicBtnUp onClick={musicModalOnOff}>
        <FontAwesomeIcon icon={faMusic} />
      </MusicBtnUp>
    </Header>
  );
};

export default React.memo(DiaryHeader);

const Header = styled.div`
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  min-height: 4.5rem;
  background-color: #f7f8e7;
  background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

const HeaderDate = styled.div`
  flex: 5 1 40%;
  font-size: 2rem;
  font-family: var(--thick-font);
  text-align: center;
  font-weight: 700;
  color: #595b5c;

  @media screen and (max-width: 570px) {
    & {
      font-size: 1.8rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 502px) {
    & {
      font-size: 1.6rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 455px) {
    & {
      font-size: 1.4rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 406px) {
    & {
      font-size: 1.2rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 340px) {
    & {
      font-size: 1.1rem;
      margin-left: 1rem;
    }
  }
`;

const HeaderEmoji = styled.div`
  position: relative;
  flex: 1 1 20%;
  text-align: center;
  padding: 0 -0.5rem;
  border-radius: 1rem;
`;
const CurrentEmoji = styled.div`
  svg {
    font-size: 4rem;
    cursor: pointer;
    color: ${(props) =>
      props.emojiChosen ? props.emojiChosen.color : "#86888a"};
    backgroundcolor: transparent;
  }
`;

const HeaderWeather = styled.div`
  flex: 5 1 40%;
  text-align: center;
  font-size: 30;
  /* background-color: white; */
  /* border-radius: 1rem; */
  /* margin-right: 1rem; */

  @media screen and (max-width: 570px) {
    & {
      margin-right: 0.2rem;
    }
  }
`;
const MusicBtn = styled.button`
  position: absolute;
  top: 4.5rem;
  right: -3.2rem;
  padding: 2.5rem 0.5rem;
  border-top-right-radius: 0.7rem;
  border-bottom-right-radius: 0.7rem;
  cursor: pointer;
  z-index: 200;
  background-color: #d3c4ae;
  border: 1px solid rgb(27, 27, 27, 0.2);

  svg {
    color: #7a706d;
    font-size: 2rem;
    border: none;
    pointer-events: none;
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (max-width: 760px) {
    & {
      display: none;
    }
  }
`;
const MusicBtnUp = styled(MusicBtn)`
  display: none;
  top: -2.85rem;
  right: 1rem;
  padding: 0.3rem 2.5rem;
  border-top-right-radius: 0.7rem;
  border-top-left-radius: 0.7rem;
  border-bottom-right-radius: 0rem;

  @media screen and (max-width: 760px) {
    & {
      display: block;
    }
  }
`;
