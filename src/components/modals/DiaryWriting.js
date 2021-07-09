import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import WeatherModal from "./Weather";
import EmojiModal from "./EmojiModal";
import "moment/locale/ko";
import MusicModal from "./MusicModal";
import Painting from "../painting/Painting";
import "./DiaryWriting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faSmile as farSmile } from "@fortawesome/free-regular-svg-icons";

const DiaryWriting = (props) => {
  const { modalHandle, clickmoment } = props;
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
  const canvasHeight = (window.innerWidth / 2) * 0.45;
  const textAreaHeight = (window.innerHeight - 135 - canvasHeight) * 0.9;

  // const [textHeight, setTextHeight] = useState();

  // const getTextAreaHeight = () => {
  //   let canvasWidth = window.innerWidth / 2;
  //   let canvasHeight = canvasWidth * 0.45;
  //   let textHeight = (window.innerHeight - 135 - canvasHeight) * 0.9;
  //   if (textHeight > canvasHeight) return canvasHeight;
  //   return textHeight;
  // };

  // const textAreaHeight = getTextAreaHeight();
  // useEffect(() => {}, []);

  console.log("윈도우", textAreaHeight);
  return (
    <>
      {/* <Body> */}
      <ModalWrapper className="modal-wrapper">
        <Header className="header">
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
            }}
          > */}
          <HeaderDate className="date">
            {clickmoment.format("LL dddd")}
          </HeaderDate>
          {/* </div> */}

          <HeaderEmoji className="emoji">
            <FontAwesomeIcon
              icon={emojiPresent ? emojiPresent.emoji : farSmile}
              onClick={(e) => {
                emojiModalOnOff();
              }}
              style={{
                fontSize: 30,
                cursor: "pointer",
                color: emojiPresent ? emojiPresent.color : "#86888a",
                backgroundColor: "transparent",
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

        <Painting musicModalOnOff={musicModalOnOff} musicOpen={musicOpen} />

        <TextArea
          className="textarea"
          textAreaHeight={textAreaHeight}
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
          <FooterClose onClick={modalHandle}>닫기</FooterClose>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span className="private" style={{ fontSize: "1.5rem" }}>
              <FooterPrivate
                type="checkbox"
                onClick={() => {
                  SetIsPrivate(!isPrivate);
                }}
              />
              글 공개
            </span>

            <FooterPost className="post">등록하기</FooterPost>
          </div>
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
    </>
  );
};

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  // border: 1px solid black;
  width: 50%;
  max-height: 95vh;
  // z-index: 50;
  border-radius: 0.5rem;

  @media screen and (max-width: 1340px) {
    & {
      width: 55%;
      height: 90%;
    }
  }

  @media screen and (max-width: 1110px) {
    & {
      width: 60%;
      height: 80%;
    }
  }

  @media screen and (max-width: 1024px) {
    & {
      width: 60%;
      height: 80%;
    }
  }

  @media screen and (max-width: 825px) {
    & {
      width: 60rem;
      height: 80%;
    }
  }
`;

const Header = styled.div`
  // border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

const HeaderDate = styled.div`
  // border: 1px solid black;
  flex: 5 1 40%;
  font-size: 1.7rem;
  text-align: center;
`;

const HeaderEmoji = styled.div`
  // border: 1px solid black;
  position: relative;
  flex: 1 1 20%;
  text-align: center;
`;

const HeaderWeather = styled.div`
  // border: 1px solid black;
  flex: 5 1 40%;
  text-align: center;
`;

const Canvas = styled.div`
  // border: 1px solid black;
  width: 100%;
  height: calc(calc(100% - 8rem) * 0.6);
`;

const TextArea = styled.textarea`
  // border: 1px solid black;
  // height: calc(calc(100% - 8rem) * 0.4);
  height: ${(props) => props.textAreaHeight}px;
  resize: none;
  // z-index: 1;
  padding: 2.5rem;
  font-size: 2rem;
  outline: none;
  background-color: white;
  color: rgb(39, 37, 37);
`;

const Footer = styled.div`
  // border: 1px solid black;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
`;

const FooterClose = styled.button`
  // border: 1px solid rgb(27, 27, 27, 0.2);
  margin: 1rem 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: 1.4rem;
  z-index: 201; //뮤직창이 200이다
  &:active {
    transform: scale(0.95);
  }
`;

const FooterPrivate = styled.input`
  display: inline-block;
  vertical-align: middle;
  margin: 0.5rem;
  font-size: 1.2rem;

  &:active {
    transform: scale(0.8);
  }
`;

const FooterPost = styled.button`
  // border: 1px solid rgb(27, 27, 27, 0.2);
  margin: 1rem 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: 1.4rem;

  &:active {
    transform: scale(0.95);
  }
`;

export default DiaryWriting;
