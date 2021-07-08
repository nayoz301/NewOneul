import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faLaughSquint as farLaughSquint,
  faGrinSquintTears as farGrinSquintTears,
  faGrinTongueWink as farGrinTongueWink,
} from "@fortawesome/free-regular-svg-icons";

const emojis = [
  { id: 1, emoji: farMeh, color: "#a1a1a4" },
  { id: 2, emoji: farSmile, color: "#ffdb00" },
  { id: 3, emoji: farLaughBeam, color: "#fdca30" },
  { id: 4, emoji: farLaughSquint, color: "#ffcb00" },
  { id: 5, emoji: farGrinSquintTears, color: "#fdbb30" },
  {
    id: 6,
    emoji: farKissWinkHeart,
    color: "#ea4c89",
  },
  { id: 7, emoji: farGrinHearts, color: "#ea4c89" },
  { id: 8, emoji: farGrinStars, color: "#6b5aed" },
  { id: 9, emoji: farGrinTongueWink, color: "#2d72d9" },
  {
    id: 10,
    emoji: farGrinBeamSweat,
    color: "#7acef4",
  },
  { id: 11, emoji: farFrown, color: "#ff8200" },
  { id: 12, emoji: farAngry, color: "#fe423f" },
  { id: 13, emoji: farGrimace, color: "#e32119" },
  { id: 14, emoji: farTired, color: "#97a2a2" },
  { id: 15, emoji: farDizzy, color: "#8a8b8c" },
  { id: 16, emoji: farSurprise, color: "#8ee000" },
  { id: 17, emoji: farFlushed, color: "#6cc24a" },
  {
    id: 18,
    emoji: farMehRollingEyes,
    color: "#8a8acb",
  },
  { id: 19, emoji: farSadTear, color: "#2bb3f3" },
  { id: 20, emoji: farSadCry, color: "#147efb" },
];

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmojiWrapper = styled.div`
  position: relative;
  background-color: white;
  width: 18rem;
  height: 15rem;
  display: flex;
  flex-direction: columm;
  border-radius: 0.5rem;
  z-index: 500;
  top: 8.5rem;
  right: 62.3rem;
  border: 1px solid red;

  &:before {
    content: "";
    position: relative;
    bottom: 100%;
    left: 50%;
    margin-left: -1rem;
    border-width: 1rem;
    border-style: solid;
    border-color: transparent transparent red transparent;
  }
`;

const EmojisHeaders = styled.div`
  border: none;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  text-align: center;
  background-color: #ffd4d4;
  padding: 0.2rem;
  margin-bottom: 0.3rem;
  font-size: 1.3rem;
`;

const EmojisBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.5rem;
`;

const EmojiUnit = styled.div`
  text-align: center;
  width: 20%;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;

const Emojis = ({ emojiModalOnOff, whatEmoji }) => {
  const [emojiChosen, setEmojiChosen] = useState(null);

  return (
    <>
      <Body>
        <EmojiWrapper className="emoji-wrapper">
          <EmojisHeaders className="emojis-header">오늘의 기분</EmojisHeaders>
          <EmojisBody className="emojis-body">
            {emojis.map((emoji, idx) => {
              return (
                <EmojiUnit
                  key={idx}
                  onClick={() => {
                    setEmojiChosen(idx);
                    whatEmoji(emoji);
                    emojiModalOnOff();
                  }}
                  style={{
                    fontSize: 25,
                    color: emoji.color,
                    // color: idx === emojiChosen ? emoji.color : "#c6d6df",
                  }}
                >
                  <FontAwesomeIcon
                    icon={emoji.emoji}
                    // size={idx === emojiChosen ? 30 : 25}
                  />
                </EmojiUnit>
              );
            })}
          </EmojisBody>
        </EmojiWrapper>
      </Body>
    </>
  );
};

export default Emojis;
