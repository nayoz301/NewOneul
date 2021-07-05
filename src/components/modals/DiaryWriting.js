import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import WeatherModal from "./Weather";
import Modal from "./Modal";
import MusicHook from "../MusicHooks/MusicHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faSmile as farSmile } from "@fortawesome/free-regular-svg-icons";

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 90vh;
  width: 50%;
  margin-top: 3rem;

  @media screen and (max-width: 1024px) {
    & {
      width: 41rem;
    }
  }
`;

const Header = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  flex: 1 1 auto;
`;

const HeaderDate = styled.div`
  border: 1px solid black;
  flex: 5 1 auto;
  text-align: center;

  margin: auto;
`;

const HeaderEmoji = styled.div`
  border: 1px solid black;
  flex: 1 1 auto;
  text-align: center;
  margin: auto;
`;

const HeaderWeather = styled.div`
  border: 1px solid black;
  flex: 5 1 auto;
  text-align: center;
  margin: auto;
`;

const Canvas = styled.div`
  border: 1px solid black;
  flex: 20 1 auto;
  width: 100%;
`;

const TextArea = styled.textarea`
  border: 1px solid black;
  flex: 10 1 auto;
  resize: none;
  font-size: 1.5rem;
  outline: none;
  background-color: white;
  color: rgb(39, 37, 37);
`;

const Footer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: center;
`;

const FooterPrivate = styled.input`
  display: inline-block;
  vertical-align: middle;
  margin: 0.5rem;
`;

const FooterPost = styled.button`
  margin: 0 1rem;
`;

const DiaryWriting = () => {
  const textRef = useRef();

  const [isOpen, setIsOpen] = useState(false); //모달창 오픈 클로즈
  const [emojiPresent, SetEmojiPresent] = useState(null); //선택한 이모티콘 정보 여기 담김
  const [isPrivate, SetIsPrivate] = useState(false);

  const ModalOnOff = () => {
    //모달창 끄고 닫기
    setIsOpen(!isOpen);
  };

  const whatEmoji = (emoji) => {
    //이모지에서 선택한 놈 가져오는 함수
    SetEmojiPresent({ emoji: emoji.emoji, color: emoji.color });
    console.log("emoji.color", emojiPresent);
  };

  console.log(isPrivate);
  return (
    <>
      <Body>
        <ModalWrapper className="modal-wrapper">
          <Header className="header">
            <HeaderDate className="date">2021년 7월 4일</HeaderDate>
            <HeaderEmoji className="emoji">
              <FontAwesomeIcon
                icon={emojiPresent ? emojiPresent.emoji : farSmile}
                onClick={(e) => {
                  ModalOnOff();
                  console.log(emojiPresent);
                }}
                style={{
                  fontSize: 30,
                  cursor: "pointer",
                  color: emojiPresent ? emojiPresent.color : "#86888a",
                }}
              />
              <Modal
                ModalOnOff={ModalOnOff}
                isOpen={isOpen}
                whatEmoji={whatEmoji}
              ></Modal>
            </HeaderEmoji>
            <HeaderWeather className="weather">
              <WeatherModal />
            </HeaderWeather>
          </Header>

          <Canvas className="canvas">
            여긴 그림판
            <FontAwesomeIcon
              icon={faMusic}
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log("music slide ");
              }}
            ></FontAwesomeIcon>
            {/* <MusicHook /> */}
          </Canvas>

          <TextArea
            className="textarea"
            ref={textRef}
            placeholder="오늘의 일기를 남겨주세요"
            onClick={(e) => {
              if (e.target.className === "textarea") {
                console.log(e.target.className);
                return (textRef.current.style.backgroundColor = "black");
              }
              return (textRef.current.style.backgroundColor = "white");
            }}
          ></TextArea>

          <Footer className="footer">
            <label>
              <FooterPrivate
                type="checkbox"
                className="private"
                onClick={() => {
                  SetIsPrivate(!isPrivate);
                }}
              />
              비밀일기
            </label>

            <FooterPost className="post">등록하기</FooterPost>
          </Footer>
        </ModalWrapper>
      </Body>
    </>
  );
};

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

export default DiaryWriting;
