import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import WeatherModal from "./Weather";
import EmojiModal from "./EmojiModal";
import Music from "../music/Music";
import MusicModal from "./MusicModal";
import Painting from "../painting/Painting";
import { flexCenter } from "../../styles/global.style";
import "./DiaryWriting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faSmile as farSmile } from "@fortawesome/free-regular-svg-icons";

const Diarybackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 50%;
  height: 90vh;

  @media screen and (max-width: 1400px) {
    & {
      width: 50%;
      height: 90%;
    }
  }

  @media screen and (max-width: 1220px) {
    & {
      width: 50%;
      height: 85%;
    }
  }

  @media screen and (max-width: 1024px) {
    & {
      width: 50%;
      height: 80%;
    }
  }

  @media screen and (max-width: 825px) {
    & {
      width: 40rem;
      height: 80%;
    }
  }
`;

const ModalBtn = styled.button`
  border: 1px solid black;
  position: absolute;
  width: 4rem;
  height: 4rem;
  right: 31.7rem;
`;

const Header = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  flex: 1 1 auto;
  margin: 0.5rem;
`;

const HeaderDate = styled.div`
  // border: 1px solid black;
  flex: 4 1 40%;
  text-align: center;
  font-size: 1.7rem;
`;

const HeaderEmoji = styled.div`
  // border: 1px solid black;
  flex: 1 1 20%;
  text-align: center;
  margin: auto;
`;

const HeaderWeather = styled.div`
  // border: 1px solid black;
  flex: 4 1 40%;
  text-align: center;
  margin: auto;
`;

const Canvas = styled.div`
  border: 1px solid black;
  flex: 20 1 auto;
  width: 100%;
  height: 50%;
`;

const TextArea = styled.textarea`
  // border: 1px solid black;
  flex: 10 1 auto;
  height: ${window.innerWidth / 7}px;
  // height: 15vh;
  resize: none;
  font-size: 2rem;
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
  font-size: 1.2rem;
`;

const FooterPost = styled.button`
  margin: 1rem 1rem;
`;

const DiaryWriting = () => {
  const textRef = useRef();

  const [emojiOpen, setEmojiOpen] = useState(false); //모달창 오픈 클로즈
  const [emojiPresent, SetEmojiPresent] = useState(null); //선택한 이모티콘 정보 여기 담김

  const [musicOpen, setMusicOpen] = useState(false);

  const [isPrivate, SetIsPrivate] = useState(false);
  const [writing, setWriting] = useState("");

  const emojiModalOnOff = () => {
    //이모지 모달창 끄고 닫기
    setEmojiOpen(!emojiOpen);
  };

  const musicModalOnOff = () => {
    //뮤직 모달창 끄고 닫기
    console.log("일기장에서 뮤직모달 온오프 실험", musicOpen);
    setMusicOpen(!musicOpen);
  };

  const whatEmoji = (emoji) => {
    //이모지에서 선택한 놈 가져오는 함수
    SetEmojiPresent({ emoji: emoji.emoji, color: emoji.color });
    console.log("emoji.color", emojiPresent);
  };

  return (
    <>
      <Diarybackground>
        {/* <Body style={{ display: "flex", flexDirection: "row" }}> */}
        <ModalWrapper className="modal-wrapper">
          <Header className="header">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "40%",
              }}
            >
              <HeaderDate className="date">2021년 7월 4일 월요일</HeaderDate>
            </div>

            <HeaderEmoji className="emoji">
              <FontAwesomeIcon
                icon={emojiPresent ? emojiPresent.emoji : farSmile}
                onClick={(e) => {
                  emojiModalOnOff();
                  console.log(emojiPresent);
                }}
                style={{
                  fontSize: 30,
                  cursor: "pointer",
                  color: emojiPresent ? emojiPresent.color : "#86888a",
                }}
              />
              <EmojiModal
                emojiModalOnOff={emojiModalOnOff}
                emojiOpen={emojiOpen}
                whatEmoji={whatEmoji}
              ></EmojiModal>
            </HeaderEmoji>
            <HeaderWeather className="weather">
              <WeatherModal />
            </HeaderWeather>
          </Header>

          <Canvas
            className="canvas"
            //  style={{ display: "none" }}
          >
            <Painting musicModalOnOff={musicModalOnOff} musicOpen={musicOpen} />
            {/* <FontAwesomeIcon
              icon={faMusic}
              style={{ cursor: "pointer", fontSize: 20 }}
              onClick={() => {
                console.log("music slide ");
              }}
            /> */}
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
            onChange={(e) => {
              setWriting(e.target.value);
            }}
          ></TextArea>

          <Footer className="footer">
            <span className="private">
              <FooterPrivate
                type="checkbox"
                onClick={() => {
                  SetIsPrivate(!isPrivate);
                }}
              />
              공개하기
            </span>

            <FooterPost className="post">등록하기</FooterPost>
          </Footer>
        </ModalWrapper>

        {/* <ModalBtn
          onClick={() => {
            console.log("모달시험");
          }}
        >
          <FontAwesomeIcon
            icon={faMusic}
            style={{
              fontSize: "20",
              cursor: "pointer",
            }}
          />
        </ModalBtn> */}
        <MusicModal
          musicOpen={musicOpen}
          musicModalOnOff={musicModalOnOff}
          style={{ display: "flex", position: "relative" }}
        />
        {/* </Body> */}
      </Diarybackground>
      <div className="asdsd"></div>
    </>
  );
};

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DiaryWriting;
