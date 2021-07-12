import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "moment/locale/ko";
import s3 from "../../upload/s3";
import WeatherModal from "./Weather";
import EmojiModal from "./EmojiModal";
import MusicModal from "./MusicModal";
import Painting from "../painting/Painting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile as farSmile } from "@fortawesome/free-regular-svg-icons";
import "./DiaryWriting.css";
import { connect } from "react-redux";
import { addNewPublicDiary } from "../../actions";
import { addNewPrivateDiary } from "../../actions";

const DiaryWriting = ({
  modalHandle,
  clickmoment,
  userInfo,
  addNewPublicDiary,
  addNewPrivateDiary,
}) => {
  const textRef = useRef();

  const canvasRef = useRef(null);

  const [emojiOpen, setEmojiOpen] = useState(false); //모달창 오픈 클로즈
  const [emojiChosen, SetEmojiChosen] = useState(0); //선택한 이모티콘 정보 여기 담김
  const [musicOpen, setMusicOpen] = useState(false);
  const [isPublic, SetIsPublic] = useState(false);
  const [diaryText, setDiaryText] = useState("");
  const [weatherChosen, setWeatherChosen] = useState(null);
  const [musicChosen, setMusicChosen] = useState(null);
  const [dataFromServer, setDataFromServer] = useState(null);

  const emojiModalOnOff = () => {
    //이모지 모달창 끄고 닫기
    setEmojiOpen(!emojiOpen);
  };

  const musicModalOnOff = () => {
    //뮤직 모달창 끄고 닫기
    setMusicOpen(!musicOpen);
  };

  const whatEmoji = (emoji) => {
    //이모지에서 선택한 놈 가져오는 함수
    SetEmojiChosen({ emoji: emoji.emoji, color: emoji.color, id: emoji.id });
    console.log("emoji.color", emoji.id);
  };
  const canvasHeight = (window.innerWidth / 2) * 0.4;
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

  const weatherData = (weather) => {
    setWeatherChosen(weather);
    return;
  };

  const getMusicData = (music) => {
    setMusicChosen(music);
    return;
  };

  function handleFileUpload() {
    //이건 s3에 업로드하는 경우
    return new Promise((resolve, reject) => {
      canvasRef.current.toBlob(
        (blob) => {
          const img = new FormData();
          img.append("file", blob, `${Date.now()}`.png);

          const param = {
            Bucket: "oneulfile",
            Key: "image/" + `${userInfo.userInfo.id}/` + Date.now(),
            ACL: "public-read",
            Body: blob,
            ContentType: "image/",
          };

          s3.upload(param, (err, data) => {
            if (err) {
              reject(err);
            } else {
              return resolve(data);
            }
          });
        },
        "image/jpeg",
        0.8
      );
    });
  }

  // const handleFileUpload = () => {
  //   //이건 s3에 업로드하는 경우
  //   canvasRef.current.toBlob(
  //     function (blob) {
  //       const img = new FormData();
  //       img.append("file", blob, `${Date.now()}.jpeg`);
  //       console.log(blob);

  //       const param = {
  //         Bucket: "oneulfile",
  //         Key: "image/" + `${userInfo.userInfo.id}/` + Date.now(),
  //         ACL: "public-read",
  //         Body: blob,
  //         ContentType: "image/",
  //       };

  //       s3.upload(param, function (err, data) {
  //         console.log(err);
  //         console.log(data);
  //       });
  //     },
  //     "image/jpeg",
  //     0.1
  //   );
  // };

  const completeDiary = async () => {
    if (emojiChosen.id && weatherChosen && diaryText && musicChosen) {
      await handleFileUpload().then((res) => {
        const url = res.Location;

        return axios
          .post(
            "https://oneul.site/O_NeulServer/diary/write",
            {
              date: clickmoment.format("YYYY-M-D"),
              feeling: emojiChosen.id,
              weather: weatherChosen,
              image: url,
              text: diaryText,
              isPublic: isPublic,
              musicId: Number(musicChosen),
            },
            {
              headers: {
                authorization: "Bearer " + userInfo.login.accessToken,
                "Content-Type": "application/json",
              },
            },
            {
              withCredentials: true,
            }
          )
          .then((data) => {
            console.log("data", data);
            setDataFromServer(data);
            return data.data.data;
          })
          .then((res) => {
            console.log("res::", res);
            if (res.isPublic) {
              addNewPublicDiary(res);
            } else {
              addNewPrivateDiary(res);
            }
            modalHandle(); //모달창 닫기
            alert("오늘도 수고하셨습니다");
          })
          .catch((res) => {
            console.log(res, "Error has been occured");
          });
      });
    } else {
      if (!emojiChosen.id) {
        alert("오늘의 기분을 선택해주세요");
      } else if (!weatherChosen) {
        alert("오늘의 날씨를 선택해주세요");
      } else if (!diaryText) {
        alert("일기를 입력해주세요");
      } else if (!musicChosen) {
        alert("음악을 선택해주세요");
      }
    }
  };

  console.log("text", diaryText);
  console.log("weather", weatherChosen);
  console.log("emoji", emojiChosen);
  console.log("date", clickmoment.format("YYYY-M-D"));
  console.log("private", isPublic);
  console.log("music", Number(musicChosen));
  return (
    <>
      <ModalWrapper className="modal-wrapper">
        <Header className="header">
          <HeaderDate className="date">
            <span> {clickmoment.format("LL dddd")}</span>
          </HeaderDate>

          <HeaderEmoji className="emoji">
            <FontAwesomeIcon
              icon={emojiChosen ? emojiChosen.emoji : farSmile}
              onClick={(e) => {
                emojiModalOnOff();
              }}
              style={{
                fontSize: 30,
                cursor: "pointer",
                color: emojiChosen ? emojiChosen.color : "#86888a",
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
            <WeatherModal weatherData={weatherData} />
          </HeaderWeather>
        </Header>

        <Painting canvasRef={canvasRef} musicModalOnOff={musicModalOnOff} />

        <TextArea
          className="textarea"
          textAreaHeight={textAreaHeight}
          ref={textRef}
          placeholder="오늘은 어떠셨나요?"
          onChange={(e) => {
            setDiaryText(e.target.value);
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
            {/* <button
              onClick={() => {
                const param = {
                  Bucket: "oneulfile",
                  Key: "image/" + Date.now(),
                  ACL: "public-read",
                  Body: "file",
                  ContentType: "image/",
                };

                s3.upload(param, function (err, data) {
                  console.log(err);
                  console.log(data);
                });
              }}
            >
              업로드
            </button> */}
            <span
              className="private"
              style={{
                fontSize: "1.5rem",
                color: "#605138",
                fontFamily: "var(--thick-font)",
                fontWeight: "800",
              }}
            >
              <FooterPrivate
                type="checkbox"
                onClick={() => {
                  SetIsPublic(!isPublic);
                }}
              />
              글 공개
            </span>

            <FooterPost className="post" onClick={completeDiary}>
              등록하기
            </FooterPost>
          </div>
        </Footer>
      </ModalWrapper>

      <MusicModal
        musicOpen={musicOpen}
        musicModalOnOff={musicModalOnOff}
        getMusicData={getMusicData}
        style={{ display: "flex", position: "relative" }}
      />
    </>
  );
};

const ModalWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
  max-height: 95vh;
  min-width: 50rem;
  // z-index: 50;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 1440px) {
    & {
      width: 67rem;
      height: 67rem;
    }
  }

  @media screen and (max-width: 760px) {
    & {
      width: 100%;
      height: 92%;
    }
  }

  // @media screen and (max-width: 740px) {
  //   & {
  //     width: 90%;
  //     height: 95%;
  //   }
  // }


  @media screen and (max-width: 670px) {
    & {
      width: 100%;
      height: 92%;
    }
  }

  @media screen and (max-width: 600px) {
    & {
      width: 100%;
      height: 92%;
    }
  }

  @media screen and (max-width: 570px) {
    & {
      width: 100%;
      height: 90%;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      height: 90%;
   }
`;

const Header = styled.div`
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  background-color: #f7f8e7;
  background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

const HeaderDate = styled.div`
  flex: 5 1 40%;
  font-size: 1.7rem;
  font-family: var(--thick-font);
  text-align: center;
  font-weight: 700;
  color: #595b5c;

  @media screen and (max-width: 550px) {
    & {
      font-size: 1.6rem;
      margin-left: 0.5rem;
    }
  }
`;

const HeaderEmoji = styled.div`
  // border: 1px solid black;
  position: relative;
  flex: 1 1 20%;
  text-align: center;
  // background-color: white;
  padding: 0 -0.5rem;
  border-radius: 1rem;
`;

const HeaderWeather = styled.div`
  flex: 5 1 40%;
  text-align: center;
  // background-color: white;
  // border-radius: 1rem;
  // margin-right: 1rem;
`;

const Canvas = styled.div`
  // border: 1px solid black;
  width: 100%;
  height: calc(calc(100% - 8rem) * 0.6);
`;

const TextArea = styled.textarea`
  border: none;
  // height: calc(calc(100% - 8rem) * 0.4);
  height: ${(props) => props.textAreaHeight}px;
  resize: none;
  // z-index: 1;
  // padding: 2.5rem;
  font-size: 2rem;
  outline: none;
  color: #7f7366;
  font-family: var(--thick-font);

    background-attachment: local;
    background-position: 0 0.5rem;
    background-image:
      url("https://www.transparenttextures.com/patterns/sandpaper.png"),
        linear-gradient(to right, #f2ede3 3rem, transparent 3rem), //가로
      linear-gradient(to left, #f2ede3 3rem, transparent 3rem), //가로
      repeating-linear-gradient(#f2ede3, #f2ede3 3.3rem, #d2c1aa 3.3rem, #d2c1aa 3.4rem, white 3.4rem);
    line-height: 3.4rem;
    padding: 1.2rem 3rem;
  }

  // background-attachment: local;
  // background-position: 0 1.3rem;
  // background-image:
  // url("https://www.transparenttextures.com/patterns/sandpaper.png"),
  //     linear-gradient(to right, #f2ede3 4rem, transparent 4rem), //가로
  //   linear-gradient(to left, #f2ede3 4rem, transparent 4rem), //가로
  //   repeating-linear-gradient(#f2ede3, #f2ede3 3.3rem, #b9a88c 3.3rem, #b9a88c 3.4rem, white 3.4rem);
  // line-height: 3.4rem;
  // padding: 2rem 4rem;
}
  `;

const Footer = styled.div`
  border: none;
  background-color: #d2c4adf0;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  background-image: url("https://www.transparenttextures.com/patterns/cardboard-flat.png"),
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  `;

const FooterClose = styled.button`
  margin: 1rem 1rem;
  padding: 0.5rem;
  border: none;
  background-color: #837970;
  border-radius: 0.5rem;
  font-weight: 800;
  font-family: var(--thick-font);
  font-size: 1.4rem;
  color: #d4c7b1;
  padding: 0.5rem 1.5rem;

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
  color: red;
  &:active {
    transform: scale(0.8);
  }
`;

const FooterPost = styled.button`
  color: #d4c7b1;
  border: none;
  margin: 1rem 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #837970;
  font-weight: 800;
  font-family: var(--thick-font);
  font-size: 1.4rem;
  padding: 0.5rem 1.5rem;

  &:active {
    transform: scale(0.95);
  }
`;

//이렇게 써도됌
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addNewPublicDiary: (newobj) => dispatch(addNewPublicDiary(newobj)),
//     addNewPrivateDiary: (newobj) => dispatch(addNewPublicDiary(newobj)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(DiaryWriting);

const mapStateToProps = ({ loginReducer }) => {
  return {
    userInfo: loginReducer,
  };
};

export default connect(mapStateToProps, {
  addNewPublicDiary,
  addNewPrivateDiary,
})(DiaryWriting);
