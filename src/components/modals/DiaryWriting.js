import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import "moment/locale/ko";
import WeatherModal from "./Weather";
import EmojiModal from "./EmojiModal";
import MusicModal from "./MusicModal";
import Painting from "../painting/Painting";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DiaryWriting.css";
import { connect } from "react-redux";
import emojis from "../../icons/emojis";
import {
  addNewPublicDiary,
  addNewPrivateDiary,
  modifyDiary,
  modifyPublicDiary,
  changeToPublic,
  changeToPrivate,
} from "../../actions";
import LoadingModal from "./LoadingModal";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { diffCheck, handleFileUpload } from "./diaryfunc";
import Text from "./Text";
import DiaryHeader from "./DiaryHeader";
import DiaryFooter from "./DiaryFooter";
import modifyAxios from "./modifyFunction";
import moment from "moment";
import DiaryFooterCheckBox from "./DiaryFooterCheckBox";

const DiaryWriting = ({
  clickmoment,
  closeDiaryModal,
  userInfo,
  addNewPublicDiary,
  addNewPrivateDiary,
  selectedDiary,
  passDiaryId,
  modifyDiary,
  modifyPublicDiary,
  changeToPrivate,
  changeToPublic,
}) => {
  const canvasRef = useRef(null);
  const canvasHeight = (window.innerWidth / 2) * 0.4;
  // const textAreaHeight = window.innerHeight - 135 - canvasHeight;

  const [emojiOpen, setEmojiOpen] = useState(false);
  const [emojiChosen, setEmojiChosen] = useState(() => {
    if (selectedDiary) {
      return emojis.filter((el) => el.id === selectedDiary.feeling)[0];
    } else {
      return 0;
    }
  });
  const [musicOpen, setMusicOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isPublic, SetIsPublic] = useState(() =>
    selectedDiary ? selectedDiary.isPublic : false
  );
  const [diaryText, setDiaryText] = useState("");
  const [weatherChosen, setWeatherChosen] = useState(() =>
    selectedDiary ? selectedDiary.weather : null
  );
  const [musicChosen, setMusicChosen] = useState(null);
  const [loadingModalOpen, setLoadingModalOpen] = useState(false);
  const [paintingChange, setPaintingChange] = useState(false);

  const paintingChangeCheck = useCallback(() => {
    if (paintingChange) {
      return;
    }
    setPaintingChange(true);
  }, [paintingChange]);

  const emojiModalOnOff = () => {
    setEmojiOpen(!emojiOpen);
  };

  const musicModalOnOff = () => {
    setMusicOpen(!musicOpen);
  };

  const whatEmoji = (emoji) => {
    setEmojiChosen({ emoji: emoji.emoji, color: emoji.color, id: emoji.id });
  };

  const getMusicData = (music) => {
    setMusicChosen(music);
  };

  const completeDiary = async () => {
    if (emojiChosen.id && weatherChosen && diaryText && musicChosen) {
      setLoadingModalOpen(true);
      await handleFileUpload(canvasRef, userInfo).then((res) => {
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
            return data.data.data;
          })
          .then((res) => {
            if (res.isPublic) {
              addNewPublicDiary(res);
            } else {
              addNewPrivateDiary(res);
            }
            setLoadingModalOpen(false);
            closeDiaryModal();
          })
          .catch((res) => {
            setLoadingModalOpen(false);
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

  const recompleteDiary = async () => {
    const url = "https://oneul.site/O_NeulServer/diary/edit";

    const diffObj = diffCheck(
      selectedDiary,
      diaryText,
      weatherChosen,
      musicChosen,
      emojiChosen,
      isPublic
    );

    setLoadingModalOpen(true);
    let uploadUrl =
      paintingChange && (await handleFileUpload(canvasRef, userInfo));
    if (!uploadUrl && !diffObj) {
      setLoadingModalOpen(false);
      return setIsEditing(false);
    } else if (uploadUrl && !diffObj) {
      return modifyAxios(
        url,
        { image: uploadUrl.Location, diaryId: selectedDiary.id },
        userInfo
      )
        .then((res) => res.data.data)
        .then((data) => {
          if (data.isPublic) {
            modifyPublicDiary(data.id, data);
          } else {
            modifyDiary(data.id, data);
          }
          setLoadingModalOpen(false);
          setIsEditing(false);
        })
        .catch((err) => {
          setLoadingModalOpen(false);
        });
    } else if (!uploadUrl && diffObj) {
      return modifyAxios(
        url,
        { ...diffObj, diaryId: selectedDiary.id },
        userInfo
      )
        .then((res) => res.data.data)
        .then((data) => {
          if (selectedDiary.isPublic && !data.isPublic) {
            modifyDiary(data.id, data);
            changeToPrivate(data.id);
          } else if (!selectedDiary.isPublic && data.isPublic) {
            modifyPublicDiary(data.id, data);
            changeToPublic(data);
          } else if (data.isPublic) {
            modifyPublicDiary(data.id, data);
          } else {
            modifyDiary(data.id, data);
          }
          setLoadingModalOpen(false);
          setIsEditing(false);
        })
        .catch((err) => {
          setLoadingModalOpen(false);
        });
    } else {
      return modifyAxios(
        url,
        { image: uploadUrl.Location, ...diffObj, diaryId: selectedDiary.id },
        userInfo
      )
        .then((res) => res.data.data)
        .then((data) => {
          if (selectedDiary.isPublic && !data.isPublic) {
            modifyDiary(data.id, data);
            changeToPrivate(data.id);
          } else if (!selectedDiary.isPublic && data.isPublic) {
            modifyPublicDiary(data.id, data);
            changeToPublic(data);
          } else if (data.isPublic) {
            modifyPublicDiary(data.id, data);
          } else {
            modifyDiary(data.id, data);
          }
          setLoadingModalOpen(false);
          setIsEditing(false);
        })
        .catch((err) => {
          setLoadingModalOpen(false);
        });
    }
  };
  return (
    <>
      <ModalWrapper>
        <DiaryHeader
          clickmoment={selectedDiary ? moment(selectedDiary.date) : clickmoment}
          emojiChosen={emojiChosen}
          emojiModalOnOff={emojiModalOnOff}
          emojiOpen={emojiOpen}
          musicModalOnOff={musicModalOnOff}
          whatEmoji={whatEmoji}
          weatherChosen={weatherChosen}
          isEditing={isEditing}
          setWeatherChosen={setWeatherChosen}
          selectedDate={selectedDiary ? selectedDiary.date : null}
          emojiChosen={emojiChosen}
          selectedDiary={selectedDiary}
        />

        <Painting canvasRef={canvasRef} musicModalOnOff={musicModalOnOff} />
        <Text setDiaryText={setDiaryText} />
        <DiaryFooter
          isPublic={isPublic}
          SetIsPublic={SetIsPublic}
          closeDiaryModal={closeDiaryModal}
          completeDiary={completeDiary}
        />
      </ModalWrapper>

      <MusicModal
        musicOpen={musicOpen}
        musicModalOnOff={musicModalOnOff}
        getMusicData={getMusicData}
        style={{ display: "flex", position: "relative" }}
      />
      <LoadingModal loadingModalOpen={loadingModalOpen} />
    </>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    userInfo: loginReducer,
  };
};

export default connect(mapStateToProps, {
  addNewPublicDiary,
  addNewPrivateDiary,
  modifyDiary,
  modifyPublicDiary,
  changeToPrivate,
  changeToPublic,
})(DiaryWriting);

const ModalWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 50%;
  max-height: 95vh;
  // min-width: 50rem;
  /* z-index: 50; */
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
      width: 98%;
      height: 92%;
    }
  }
  @media screen and (max-width: 670px) {
    & {
      width: 98%;
      height: 92%;
    }
  }
  @media screen and (max-width: 600px) {
    & {
      width: 98%;
      height: 92%;
    }
  }
  @media screen and (max-width: 570px) {
    & {
      width: 98%;
      height: 92%;
    }
  }
  @media screen and (max-width: 500px) {
    & {
      width: 98%;
      height: 92%;
    }
  }

  @media screen and (max-width: 412px) {
    & {
      width: 98%;
      height: 80%;
    }
  }
`;

const Header = styled.div`
  border: none;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  min-height: 4.5rem;
  background-color: #f7f8e7;
  background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

const HeaderDate = styled.div`
  flex: 5 1 40%;
  font-size: 2rem;
  font-family: var(--thick-font);
  text-align: center;
  font-weight: 700;
  color: #595b5c;

  @media screen and (max-width: 570px) {
    & {
      font-size: 1.8rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 507px) {
    & {
      font-size: 1.6rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 451px) {
    & {
      font-size: 1.3rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 406px) {
    & {
      font-size: 1.1rem;
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 340px) {
    & {
      font-size: 1rem;
      margin-left: 1rem;
    }
  }
`;

const HeaderEmoji = styled.div`
  /* border: 1px solid black; */
  position: relative;
  flex: 1 1 20%;
  text-align: center;
  /* background-color: white; */
  padding: 0 -0.5rem;
  border-radius: 1rem;
`;

const HeaderWeather = styled.div`
  flex: 5 1 40%;
  text-align: center;
  font-size: 30;
  /* background-color: white; */
  /* border-radius: 1rem; */
  /* margin-right: 1rem; */
  @media screen and (max-width: 570px) {
    & {
      margin-right: 0.2rem;
    }
  }
`;

const TextArea = styled.textarea`
  border: none;
  height: ${(props) => props.textAreaHeight}px;
  resize: none;
  /* z-index: 1; */
  /* padding: 2.5rem; */
  border: none;
  font-size: 1.7rem;
  outline: none;
  color: #7f7366;
  font-family: var(--thick-font);
  background-attachment: local;
  background-position: 0 0.5rem;
  background-image: url("https://www.transparenttextures.com/patterns/sandpaper.png"),
    linear-gradient(to right, #f2ede3 0.5rem, transparent 0.5rem),
    //가로
    linear-gradient(to left, #f2ede3 0.5rem, transparent 0.5rem),
    //가로
    repeating-linear-gradient(
        #f2ede3,
        #f2ede3 3.3rem,
        #d2c1aa 3.3rem,
        #d2c1aa 3.4rem,
        white 3.4rem
      );
  line-height: 3.4rem;
  letter-spacing: 0.5px;
  padding: 0.6rem 4.5rem;
`;

const Footer = styled.div`
  border: none;
  background-color: #d2c4adf0;
  display: flex;
  min-height: 4.5rem;
  justify-content: space-between;
  align-items: center;
  background-image: url("https://www.transparenttextures.com/patterns/cardboard-flat.png");
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

const FooterClose = styled.button`
  font-family: var(--thick-font);
  margin: 1rem 1rem;
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
  padding: 0.6rem 1.5rem;
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

const FooterHide = styled.div`
  color: rgba(255, 0, 0, 0);
  border: none;
  margin: 1rem 1rem;
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 0, 0, 0);
  font-weight: 800;
  font-family: var(--thick-font);
  font-size: 1.4rem;
  padding: 0.5rem 1.5rem;
  &:active {
    transform: scale(0.95);
  }
`;
