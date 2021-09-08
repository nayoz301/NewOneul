import React, { useRef, useEffect, useState } from "react";
import uniqueId from "lodash/uniqueId";
import styled, { keyframes } from "styled-components";
import "./Music.css";
import SelectBar from "./SelectBar";
import { connect } from "react-redux";

import { circle, stepBackward, stepForward } from "react-icons-kit/iconic/";
import { Icon } from "react-icons-kit";
import { pause2 } from "react-icons-kit/icomoon/pause2";
import { ic_close } from "react-icons-kit/md/ic_close";
import { plus } from "react-icons-kit/feather/plus";
import {
  volumeMedium,
  volumeMute,
  volumeMute2,
  volumeLow,
  volumeHigh,
} from "react-icons-kit/icomoon";

const music = [
  {
    id: 1,
    name: "장르를 선택하고",
    author: "음악을 선택해주세요",
    img: "https://www.bensound.com/bensound-img/thejazzpiano.jpg",
    audio: "https://www.bensound.com/bensound-music/bensound-thejazzpiano.mp3",
    duration: "0:00",
    genre: { genre_name: "오늘" },
  },
];

const Music = ({
  musicOpen,
  musicModalOnOff,
  getMusicData,
  isEditing,
  selectedMusicId,
  musicList,
}) => {
  const [pause, setPause] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [musicLists, setMusicLists] = useState(music);
  const [filtered, setFiltered] = useState(music);
  const [genre, setGenre] = useState("");
  const [genreList, setGenreList] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);
  const [volume, setVolume] = useState(0.05);
  const [muteState, setMuteState] = useState(false);
  const [currentSong, setCurrentSong] = useState(musicList.musicList[index]);

  let playerRef = useRef();
  let timelineRef = useRef();
  let hoverPlayheadRef = useRef();
  let playheadRef = useRef();
  let volumeControllerRef = useRef();

  useEffect(() => {
    if (selectedMusicId) {
      return setCurrentSong(selectedMusic);
    }
  }, []);

  useEffect(() => {
    if (selectedMusic && isEditing === false) {
      setPause(true);
    }
  }, [isEditing]);

  const getSelectedMusic = () => {
    if (selectedMusicId !== undefined) {
      return musicList.musicList.filter((el) => el.id === selectedMusicId)[0];
    }
    return;
  };

  const selectedMusic = getSelectedMusic();

  useEffect(() => {
    setCurrentSong(filtered[index]);
  }, [index]);

  useEffect(() => {
    musicSetting();
  }, [musicOpen]);

  const musicSetting = () => {
    let dataLists = genreKinds(musicList.musicList);
    setGenreList(dataLists);
    setMusicLists(musicList.musicList);
    setFiltered(musicList.musicList);
  };

  const genreKinds = (data) => {
    let kinds = [];
    for (let i = 0; i < data.length; i++) {
      if (kinds.includes(data[i].genre.genre_name) === false) {
        kinds = [...kinds, data[i].genre.genre_name];
      }
      kinds = kinds;
    }
    return kinds;
  };

  const getGenre = (selectedGenre) => {
    setGenre(selectedGenre);
  };

  const sendSongInfo = (e) => {
    setSelectedSong(e.target.title);
  };

  useEffect(() => {
    if (playerRef && playerRef.current) {
      playerRef.current.volume = volume;
      playerRef.current.muted = muteState;
    }
  }, [volume, muteState]);

  useEffect(() => {
    if (playerRef.current && timelineRef.current) {
      playerRef.current.addEventListener("timeupdate", timeUpdate);
      playerRef.current.addEventListener("ended", nextSong, false);
      timelineRef.current.addEventListener("click", changeCurrentTime, false);
      timelineRef.current.addEventListener("mousemove", hoverTimeLine, false);
      timelineRef.current.addEventListener("mouseout", resetTimeLine, false);
    }
    return () => {
      if (playerRef.current && timelineRef.current) {
        playerRef.current.removeEventListener("timeupdate", timeUpdate);
        playerRef.current.removeEventListener("ended", nextSong);
        timelineRef.current.removeEventListener("click", changeCurrentTime);
        timelineRef.current.removeEventListener("mousemove", hoverTimeLine);
        timelineRef.current.removeEventListener("mouseout", resetTimeLine);
      }
    };
  });

  const changeCurrentTime = (e) => {
    const duration = playerRef.current.duration;
    const playheadWidth = timelineRef.current.offsetWidth;
    const offsetWidth = timelineRef.current.offsetLeft;
    const userClickWidth = e.clientX - offsetWidth;
    const userClickWidthInPercent = (userClickWidth * 100) / playheadWidth;

    playheadRef.current.style.width = userClickWidthInPercent + "%";
    playerRef.current.currentTime = (duration * userClickWidthInPercent) / 100;
  };

  const timeUpdate = () => {
    if (playerRef.current !== null) {
      const duration = playerRef.current.duration;
      const playPercent = 100 * (playerRef.current.currentTime / duration);
      playheadRef.current.style.width = playPercent + "%";
      const currentTime = formatTime(parseInt(playerRef.current.currentTime));
      setCurrentTime(currentTime);
      if (playheadRef.current.style.width === "100%") {
        playheadRef.current.style.width = "0%";
      }
    }
  };

  const hoverTimeLine = (e) => {
    const duration = playerRef.current.duration;
    const playheadWidth = timelineRef.current.offsetWidth;
    const offsetWidth = timelineRef.current.offsetLeft;
    const userClickWidth = e.clientX - offsetWidth;
    const userClickWidthInPercent = (userClickWidth * 100) / playheadWidth;

    if (userClickWidthInPercent <= 100) {
      hoverPlayheadRef.current.style.width = userClickWidthInPercent + "%";
    }

    const time = (duration * userClickWidthInPercent) / 100;

    if (time >= 0 && time <= duration) {
      hoverPlayheadRef.current.dataset.content = formatTime(time);
    }
  };

  const resetTimeLine = () => {
    hoverPlayheadRef.current.style.width = 0;
  };

  const formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    seconds = seconds >= 10 ? seconds : "0" + (seconds % 60);

    const formatTime = minutes + ":" + seconds;

    return formatTime;
  };

  const updatePlayer = () => {
    setCurrentSong(filtered[index]);
    playerRef.current.load();
  };

  const nextSong = () => {
    setIndex((index + 1) % filtered.length);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const prevSong = () => {
    setIndex((index + filtered.length - 1) % filtered.length);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const playOrPause = () => {
    setCurrentSong(filtered[index]);
    const audio = new Audio(currentSong.audio);
    if (!pause) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    setPause(!pause);
  };

  const clickAudio = (key) => {
    setIndex(key);

    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const filterListByGenre = (allList) => {
    let filteredList = allList.filter((el) => el.genre.genre_name === genre);
    return filteredList;
  };
  useEffect(() => {
    let filteredList = filterListByGenre(musicLists);
    setFiltered(filteredList);
    setIndex(0);
  }, [genre]);

  if (
    (selectedMusic && isEditing === false) ||
    (selectedMusic && isEditing === true)
  ) {
    return (
      <PlayerWrapper>
        <CurrentSongWrapper>
          <CloseBtn>
            <Icon
              size={18}
              icon={ic_close}
              onClick={() => {
                musicModalOnOff();
              }}
            />
          </CloseBtn>

          {currentSong && (
            <>
              <audio autoPlay loop ref={playerRef}>
                <source src={selectedMusic.audio} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>

              <SongInfo>
                <SongName>{selectedMusic.name}</SongName>
                <SongAuthor>{selectedMusic.author}</SongAuthor>
              </SongInfo>

              <Time>
                <CurrentTime>{currentTime}</CurrentTime>
                <EndTime>{currentSong.duration}</EndTime>
              </Time>
            </>
          )}
          <TimeLine ref={timelineRef}>
            <PlayHead ref={playheadRef}></PlayHead>
            <HoverPlayHead
              ref={hoverPlayheadRef}
              data-content="0:00"
            ></HoverPlayHead>
          </TimeLine>

          <BtnWrapper>
            <Btns>
              <PlayBtn onClick={playOrPause} pause={pause}>
                {!pause ? (
                  <Icon size={23} icon={circle} />
                ) : (
                  <Icon size={20} icon={pause2} />
                )}
              </PlayBtn>
            </Btns>

            <VolumeControlWrapper>
              <VolumeBtn2
                onClick={() => {
                  setMuteState(!muteState);
                }}
                onMouseOver={() => {
                  volumeControllerRef.current.style.opacity = 1;
                }}
              >
                <Icon
                  size={12}
                  icon={
                    muteState
                      ? volumeMute2
                      : volume < 0.01
                      ? volumeMute
                      : volume < 0.34
                      ? volumeLow
                      : volume < 0.67
                      ? volumeMedium
                      : volumeHigh
                  }
                />
              </VolumeBtn2>

              <VolumeController
                ref={volumeControllerRef}
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={muteState ? 0 : volume}
                onChange={(e) => {
                  if (muteState) {
                    setMuteState(false);
                  }
                  setVolume(e.target.value);
                }}
                onMouseOut={() => {
                  volumeControllerRef.current.style.opacity = 0;
                }}
              />
            </VolumeControlWrapper>
          </BtnWrapper>
        </CurrentSongWrapper>
      </PlayerWrapper>
    );
  } else {
    return (
      <PlayerWrapper>
        <CurrentSongWrapper>
          <CloseBtn>
            <Icon
              size={18}
              icon={ic_close}
              onClick={() => {
                musicModalOnOff();
              }}
            />
          </CloseBtn>

          <SelectBar getGenre={getGenre} genreList={genreList} />
          {currentSong && (
            <>
              <audio ref={playerRef}>
                <source src={currentSong.audio} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>

              <SongInfo>
                <SongName>{currentSong.name}</SongName>
                <SongAuthor>{currentSong.author}</SongAuthor>
              </SongInfo>

              <Time>
                <CurrentTime>{currentTime}</CurrentTime>
                <EndTime>{currentSong.duration}</EndTime>
              </Time>
            </>
          )}

          <TimeLine ref={timelineRef}>
            <PlayHead ref={playheadRef}></PlayHead>
            <HoverPlayHead
              ref={hoverPlayheadRef}
              data-content="0:00"
            ></HoverPlayHead>
          </TimeLine>

          <BtnWrapper>
            <Btns>
              <PrevBtn onClick={prevSong}>
                <Icon icon={stepBackward} />
              </PrevBtn>
              <PlayBtn onClick={playOrPause} pause={pause}>
                {!pause ? (
                  <Icon size={23} icon={circle} />
                ) : (
                  <Icon size={20} icon={pause2} />
                )}
              </PlayBtn>
              <NextBtn onClick={nextSong}>
                <Icon icon={stepForward} />
              </NextBtn>
            </Btns>

            <SongAlertWrapper>
              <SongAlert>
                {selectedSong &&
                  musicLists &&
                  `${musicLists[selectedSong].name} 곡이 배경음악으로 설정되었습니다`}
              </SongAlert>
            </SongAlertWrapper>

            <VolumeControlWrapper>
              <VolumeBtn
                onClick={() => {
                  setMuteState(!muteState);
                }}
                onMouseOver={() => {
                  volumeControllerRef.current.style.opacity = 1;
                }}
              >
                <Icon
                  size={12}
                  icon={
                    muteState
                      ? volumeMute2
                      : volume < 0.01
                      ? volumeMute
                      : volume < 0.34
                      ? volumeLow
                      : volume < 0.67
                      ? volumeMedium
                      : volumeHigh
                  }
                />
              </VolumeBtn>

              <VolumeController
                ref={volumeControllerRef}
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={muteState ? 0 : volume}
                onChange={(e) => {
                  if (muteState) {
                    setMuteState(false);
                  }
                  setVolume(e.target.value);
                }}
                onMouseOut={() => {
                  volumeControllerRef.current.style.opacity = 0;
                }}
              />
            </VolumeControlWrapper>
          </BtnWrapper>
        </CurrentSongWrapper>
        <PlayList>
          {filtered.map((music, arrayIndex) => (
            <EachTrack
              index={index}
              arrayIndex={arrayIndex}
              pause={pause}
              key={uniqueId()}
              onClick={() => clickAudio(arrayIndex)}
            >
              <TrackIMG
                index={index}
                arrayIndex={arrayIndex}
                pause={pause}
                src={music.img}
              />
              <TrackInfo>
                <TrackName>
                  {music.name.length >= 20
                    ? `${music.name.slice(0, 18)}...`
                    : music.name}
                </TrackName>
                <TrackAuthor>{music.author}</TrackAuthor>
              </TrackInfo>
              <TrackDuration>
                {index === music.id ? currentTime : music.duration}
              </TrackDuration>
              <TrackSelectBtn
                title={music.id}
                onClick={(e) => {
                  sendSongInfo(e);
                  getMusicData(e.target.title);
                  e.stopPropagation();
                }}
              >
                <Icon size={22} icon={plus} />
              </TrackSelectBtn>
            </EachTrack>
          ))}
        </PlayList>
      </PlayerWrapper>
    );
  }
};

const mapStateToProps = ({ mainReducer }) => {
  return {
    musicList: mainReducer,
  };
};

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 35rem;
  border-radius: 2rem;
  color: rgba(105, 97, 97, 0.555);
  font-weight: 350;
  background: #fff9ed;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media screen and (max-width: 359px) {
    & {
      width: 99%;
    }
  }
`;

const CurrentSongWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  color: #dfd5c9;
  font-weight: 600;
  background: #807a78;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  @media screen and (max-width: 359px) {
    & {
      width: 99%;
    }
  }
`;

const CloseBtn = styled.div`
  position: relative;
  right: -16rem;
  top: 1rem;
  cursor: pointer;

  &:active {
    transform: scale(0.75);
  }
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SongName = styled.span`
  margin-top: 1rem;
  font-size: 2.2rem;
`;
const SongAuthor = styled.span`
  color: #dfd5c9;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 400;
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 24rem;
  font-size: 1.3rem;
`;
const CurrentTime = styled.div``;
const EndTime = styled.div``;

const PlayHead = styled.div`
  position: relative;
  z-index: 200;
  width: 0;
  height: 5px;
  border-radius: 5px;
  background: #a9aec1; /*재생시간바 진행바 색깔*/
`;
const HoverPlayHead = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  height: 0.5rem;
  border-radius: 5px;
  background: #e3ba9a; /*재생시간 바 호버*/
  transition: opacity 0.3s;
`;
const TimeLine = styled.div`
  position: relative;
  margin: 0 auto;
  width: 24rem;
  height: 0.5rem;
  background: #dfd5c9; /*재생시간바 기본 색상*/
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    ${HoverPlayHead}::before {
      opacity: 1;
      content: attr(data-content);
      display: block;
      position: absolute;
      top: -30px;
      right: -23px;
      width: 40px;
      padding: 3px;
      text-align: center;
      color: #ffffff; /*시간 표시 화살표 위에 뜨는 재생시간 글자색*/
      background: #a9aec1; /*시간 표시 화살표 위에 뜨는 재생시간 배경색깔*/
      border-radius: calc(20px - 12px);
    }
    ${HoverPlayHead}::after {
      opacity: 1;
      content: "";
      display: block;
      position: absolute;
      top: -8px;
      right: -8px;
      border-top: 8px solid #a9aec1; /*보더바 화살표*/
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }
  }
`;

const BtnWrapper = styled.div`
  margin-top: 1rem;
`;
const Btns = styled.div`
  margin-top: 1rem;
  position: relative;
  z-index: 100; /* 뮤직 사운드바랑 겹치지 않으려고 */
`;
const Button = styled.button`
  color: #dfd5c9;
  margin: 0rem 0.5rem 0rem 0.5rem;
  font-size: 1.8rem;
  text-align: center;
  transition: 0.2s;
  cursor: pointer;
  border: none;
  background: 0;

  i {
    color: #dfd5c9;
    pointer-events: none;
    &:active {
      transform: scale(0.95);
    }
  }

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;
const PrevBtn = styled(Button)`
  width: 3.5rem;
  height: 3.5rem;
`;
const NextBtn = styled(Button)`
  width: 3.5rem;
  height: 3.5rem;
`;
const PlayBtn = styled(Button)`
  width: 5rem;
  height: 5rem;

  svg {
    size: ${(props) => (props.pause ? 20 : 23)};
  }
`;
const VolumeControlWrapper = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  right: -9rem;
  top: -3.6rem;
`;
const VolumeBtn = styled(Button)`
  position: relative;

  &:active {
    transform: scale(0.95);
  }
`;
const VolumeBtn2 = styled(VolumeBtn)`
  right: 3.8rem;
  width: 6rem;
`;
const VolumeController = styled.input`
  position: absolute;
  width: 6rem;
  height: 0.2rem;
  top: 1.1rem;
  right: 0.5rem;
  transform-origin: 1;
  border-radius: 0.5rem;
  cursor: pointer;
  -webkit-appearance: none;
  background: #dfd5c9;
  outline: none;
  opacity: 0;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #dfd5c9;
    cursor: pointer;
  }
`;

const SongAlertWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;
const SongAlertAnimation = keyframes`
0% {
  opacity: 0;
}
50% {
  opacity: 1;
}
100% {
  opacity: 0;
}
 `;
const SongAlert = styled.span`
  position: absolute;
  width: 33rem;
  top: -0.4rem;
  font-size: 1.2rem;
  animation: ${SongAlertAnimation} 3s infinite;
`;

const PlayList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem;
  height: 34vh;
  width: 100%;
  overflow-y: scroll;
  align-items: center;
  margin-left: 0.6rem;
`;
const EachTrack = styled.div`
  display: flex;
  align-items: center;
  margin: 0.7rem 0.6rem 0 0;
  border-radius: calc(2rem - 1rem);
  border: 1px solid transparent;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #f9f9f9; /*재생목록 마우스 갖다대면 호버색깔*/
    border-color: #eeeac1;
    position: relative;
    box-shadow: 0rem 0rem 1rem 0rem #274684;
  }

  ${(props) => props.index !== props.arrayIndex} {
    background: #f9f9f9;
    box-shadow: 0rem 0rem 1rem 0rem #274684;
    ${(props) => !props.pause} {
      box-shadow: 0rem 0rem 1.5rem 0.2rem #353347;
    }
  }
`;
const TrackIMG = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  filter: ${(props) =>
    props.index === props.arrayIndex && props.pause ? "opacity(60%)" : ""};
`;
const TrackInfo = styled.div`
  margin-left: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.7rem;
  min-width: 17rem;
  margin-bottom: 0.2rem;
`;
const TrackName = styled.span`
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
  overflow: hidden;
  color: rgb(19, 18, 18);
`;
const TrackAuthor = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: rgba(189, 195, 199, 1);
  overflow: hidden;
`;
const TrackDuration = styled.span`
  min-width: 3rem;
  margin-left: 1rem;
  margin-right: 0rem;
  font-weight: 500;
  font-size: 1.2rem;
`;
const TrackSelectBtn = styled.button`
  cursor: pointer;
  border: transparent;
  margin: 0 0 0 1.6rem;
  padding: 4rem 1rem;
  color: #ded4c9;
  background-color: #807a78;
  padding: 1.3rem 1.3rem;
  border-radius: 1rem;
  transition: 0.3s;

  &:hover {
    background-color: #c9c2b4; /*바꾸기전 호버색*/
    color: #786f69;
  }
  &:active {
    transform: scale(0.9);
  }
  i {
    pointer-events: none;
  }
`;
export default connect(mapStateToProps)(Music);
