import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile as farSmile } from "@fortawesome/free-regular-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import EmojiModal from "./EmojiModal";
import Weather from "./Weather";
import {
  Header,
  HeaderDate,
  HeaderEmoji,
  CurrentEmoji,
  HeaderWeather,
  MusicBtn,
  MusicBtnUp,
} from "../../styles/modals/DiaryHeader.style";

const DiaryHeader = ({
  clickmoment,
  selectedDiary,
  isEditing,
  whatEmoji,
  emojiChosen,
  emojiOpen,
  emojiModalOnOff,
  musicModalOnOff,
  weatherChosen,
  setWeatherChosen,
}) => {
  return (
    <Header>
      <HeaderDate>{clickmoment && clickmoment.format("LL dddd")}</HeaderDate>

      <HeaderEmoji>
        <CurrentEmoji emojiChosen={emojiChosen}>
          <FontAwesomeIcon
            icon={emojiChosen ? emojiChosen.emoji : farSmile}
            onClick={
              selectedDiary !== undefined && isEditing === false
                ? null
                : emojiModalOnOff
            }
          />
        </CurrentEmoji>
        <EmojiModal
          emojiModalOnOff={emojiModalOnOff}
          emojiOpen={emojiOpen}
          whatEmoji={whatEmoji}
        ></EmojiModal>
      </HeaderEmoji>

      <HeaderWeather>
        <Weather
          weatherChosen={weatherChosen}
          isEditing={isEditing}
          selectedDiary={selectedDiary}
          setWeatherChosen={setWeatherChosen}
        />
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
