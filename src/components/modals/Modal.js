import React from "react";
// import "./modal.css";
import PropTypes from "prop-types";
import EmojiModal from "./Emojis";
const Modal = ({ ModalOnOff, isOpen, whatEmoji }) => {
  return isOpen ? (
    <EmojiModal ModalOnOff={ModalOnOff} whatEmoji={whatEmoji} />
  ) : null;
};
export default Modal;

// Modal.propTypes = {
//   ModalOnOff: PropTypes.func.isRequired,
//   isOpen: PropTypes.bool.isRequired,
// };
