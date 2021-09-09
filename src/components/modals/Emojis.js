import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uniqueId from "lodash/uniqueId";
import emojis from "../../icons/emojis";
import {
  EmojiWrapper,
  EmojisHeaders,
  EmojisBody,
  EmojiUnit,
} from "../../styles/modals/Emojis.style";

const Emojis = ({ emojiModalOnOff, whatEmoji }) => {
  return (
    <>
      <EmojiWrapper>
        <EmojisHeaders>오늘의 나</EmojisHeaders>
        <EmojisBody>
          {emojis.map((emoji) => {
            return (
              <EmojiUnit
                key={uniqueId()}
                onClick={() => {
                  whatEmoji(emoji);
                  emojiModalOnOff();
                }}
                color={emoji.color}
              >
                <FontAwesomeIcon icon={emoji.emoji} />
              </EmojiUnit>
            );
          })}
        </EmojisBody>
      </EmojiWrapper>
    </>
  );
};

export default Emojis;
