import React from "react";
import Emojis from "./Emojis";
const EmojiModal = ({ emojiModalOnOff, emojiOpen, whatEmoji }) => {
  return emojiOpen ? (
    <Emojis emojiModalOnOff={emojiModalOnOff} whatEmoji={whatEmoji} />
  ) : null;
};
export default EmojiModal;
