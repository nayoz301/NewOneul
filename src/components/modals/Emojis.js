import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngry,
  faFlushed,
  faGrimace,
  faDizzy,
  faMeh,
  faFrown,
  faSmile,
  faGrinBeamSweat,
  faGrinHearts,
  faTired,
  faSadTear,
  faSadCry,
  faMehRollingEyes,
  faGrinStars,
  faSurprise,
  faLaughBeam,
  faKissWinkHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAngry as farAngry,
  faFlushed as farFlushed,
  faGrimace as farGrimace,
  faDizzy as farDizzy,
  faMeh as farMeh,
  faFrown as farFrown,
  faSmile as farSmile,
  faGrinBeamSweat as farGrinBeamSweat,
  faGrinHearts as farGrinHearts,
  faTired as farTired,
  faSadTear as farSadTear,
  faSadCry as farSadCry,
  faMehRollingEyes as farMehRollingEyes,
  faGrinStars as farGrinStars,
  faSurprise as farSurprise,
  faLaughBeam as farLaughBeam,
  faKissWinkHeart as farKissWinkHeart,
} from "@fortawesome/free-regular-svg-icons";

const emojis = [
  { id: 0, emoji: faAngry, color: "#ea3e23" },
  { id: 1, emoji: farAngry, color: "#ea3e23" },
  { id: 2, emoji: faGrimace, color: "#ea3e23" },
  { id: 3, emoji: farGrimace, color: "#ea3e23" },
  { id: 4, emoji: faFrown, color: "#ff7b00" },
  { id: 5, emoji: farFrown, color: "#ff7b00" },

  { id: 6, emoji: faGrinStars, color: "#ff9900" },
  { id: 7, emoji: farGrinStars, color: "#ff9900" },
  { id: 8, emoji: faLaughBeam, color: "#ffc845" },
  { id: 9, emoji: farLaughBeam, color: "#ffc845" },
  { id: 10, emoji: faSmile, color: "#ffc845" },
  { id: 11, emoji: farSmile, color: "#ffc845" },

  { id: 12, emoji: faDizzy, color: "#97a2a2" },
  { id: 13, emoji: farDizzy, color: "#97a2a2" },
  { id: 14, emoji: faTired, color: "#97a2a2" },
  { id: 15, emoji: farTired, color: "#97a2a2" },
  {
    id: 16,
    emoji: faMehRollingEyes,

    color: "#8a8acb",
  },
  {
    id: 17,
    emoji: farMehRollingEyes,

    color: "#8a8acb",
  },

  { id: 18, emoji: faFlushed, color: "#7cbb00" },
  { id: 19, emoji: farFlushed, color: "#7cbb00" },
  { id: 20, emoji: faSurprise, color: "#7cbb00" },
  { id: 21, emoji: farSurprise, color: "#7cbb00" },
  { id: 22, emoji: faGrinBeamSweat, color: "#7acef4" },
  {
    id: 23,
    emoji: farGrinBeamSweat,

    color: "#7acef4",
  },
  { id: 24, emoji: faGrinHearts, color: "#ea4c89" },
  { id: 25, emoji: farGrinHearts, color: "#ea4c89" },

  { id: 26, emoji: faSadTear, color: "#168de2" },
  { id: 27, emoji: farSadTear, color: "#168de2" },
  { id: 28, emoji: faSadCry, color: "#168de2" },
  { id: 29, emoji: farSadCry, color: "#168de2" },

  { id: 30, emoji: faKissWinkHeart, color: "#ea4c89" },
  {
    id: 31,
    emoji: farKissWinkHeart,

    color: "#ea4c89",
  },
  { id: 32, emoji: faMeh, color: "#1d2d3b" },
  { id: 33, emoji: farMeh, color: "#1d2d3b" },
];

const EmojiWrapper = styled.div`
  position: absolute;
  background-color: white;
  width: 13rem;
  height: 15rem;
  display: flex;
  flex-direction: columm;
  border-radius: 0.5rem;
`;

const EmojisHeaders = styled.div`
  border: none;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  text-align: center;
  background-color: #ffd4d4;
  padding: 0.2rem;
  margin-bottom: 0.3rem;
`;

const EmojisBody = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const EmojiUnit = styled.div`
  font-size: 1.5rem;
  text-align: center;
  width: 20%;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const EmojiModal = ({ ModalOnOff, whatEmoji }) => {
  const [emojiChosen, setEmojiChosen] = useState(null);
  console.log("바깥 콘솔", emojiChosen);

  return (
    <>
      <EmojiWrapper className="emoji-wrapper">
        <EmojisHeaders className="emojis-header">오늘의 기분</EmojisHeaders>
        <EmojisBody className="emojis-body">
          {emojis.map((emoji, idx) => {
            return (
              <EmojiUnit key={idx}>
                <FontAwesomeIcon
                  icon={emoji.emoji}
                  // size={idx === emojiChosen ? 30 : 25}
                  onClick={() => {
                    setEmojiChosen(idx);
                    whatEmoji(emoji);
                    ModalOnOff();
                  }}
                  style={{
                    fontSize: 25,
                    color: emoji.color,
                    // color: idx === emojiChosen ? emoji.color : "#c6d6df",
                  }}
                />
              </EmojiUnit>
            );
          })}
        </EmojisBody>
      </EmojiWrapper>
    </>
  );
};

export default EmojiModal;
