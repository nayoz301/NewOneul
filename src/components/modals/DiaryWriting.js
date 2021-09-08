import React, { useState, useRef, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import "moment/locale/ko";

import MusicModal from "./MusicModal";
import Painting from "../painting/Painting";
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
import { diffCheck, handleFileUpload } from "./diaryfunc";
import Text from "./Text";
import DiaryHeader from "./DiaryHeader";
import DiaryFooter from "./DiaryFooter";
import modifyAxios from "./modifyFunction";
import moment from "moment";

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
  const [isPublic, setIsPublic] = useState(() =>
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
          selectedDiary={selectedDiary}
          isEditing={isEditing}
          whatEmoji={whatEmoji}
          emojiChosen={emojiChosen}
          emojiOpen={emojiOpen}
          emojiModalOnOff={emojiModalOnOff}
          musicModalOnOff={musicModalOnOff}
          weatherChosen={weatherChosen}
          setWeatherChosen={setWeatherChosen}
        />

        <Painting
          canvasRef={canvasRef}
          selectedImage={selectedDiary && selectedDiary.image}
          isEditing={isEditing}
          paintingChangeCheck={paintingChangeCheck}
        />

        <Text
          selectedDiary={selectedDiary}
          isEditing={isEditing}
          setDiaryText={setDiaryText}
        />

        <DiaryFooter
          selectedDiary={selectedDiary}
          isEditing={isEditing}
          isPublic={isPublic}
          setIsPublic={setIsPublic}
          setIsEditing={setIsEditing}
          closeDiaryModal={closeDiaryModal}
          completeDiary={completeDiary}
          recompleteDiary={recompleteDiary}
          passDiaryId={passDiaryId}
        />
      </ModalWrapper>

      <MusicModal
        musicOpen={musicOpen}
        musicModalOnOff={musicModalOnOff}
        getMusicData={getMusicData}
        isEditing={isEditing}
        selectedMusicId={selectedDiary && selectedDiary.music.id}
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
