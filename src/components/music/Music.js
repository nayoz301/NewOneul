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
  musicModalOnOff,
  musicOpen,
  getMusicData,
  musicList,
  selectedMusicId,
  isEditing,
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
  let volumeControllerRef = useRef(); //볼륨 슬라이더 보임 안보임 효과 때문에 넣었음

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
    //리덕스로 곡 불러올떄
    musicSetting();
  }, [musicOpen]);

  const musicSetting = () => {
    //리덕스로 곡 불러올떄
    let dataLists = genreKinds(musicList.musicList);
    setGenreList(dataLists);
    setMusicLists(musicList.musicList);
    setFiltered(musicList.musicList);
  };

  const genreKinds = (data) => {
    //장르 종류 추출해서 셀렉트바에 보내줘야함
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
    playerRef.current.volume = volume;
    playerRef.current.muted = muteState;
  }, [volume, muteState]);

  useEffect(() => {
    playerRef.current.addEventListener("timeupdate", timeUpdate);
    playerRef.current.addEventListener("ended", nextSong, false);
    timelineRef.current.addEventListener("click", changeCurrentTime, false);
    timelineRef.current.addEventListener("mousemove", hoverTimeLine, false);
    timelineRef.current.addEventListener("mouseout", resetTimeLine, false);
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
    //재생시간바 시간 이동하기
    const duration = playerRef.current.duration; //duration 동영상의 길이
    const playheadWidth = timelineRef.current.offsetWidth; //offsetWidth CSS상으로 재생시간바의 길이
    const offsetWidth = timelineRef.current.offsetLeft; //offsetLeft CSS상으로 body박스의 가로 길이 right은 없나봄.
    const userClickWidth = e.clientX - offsetWidth; //e.clientX(body박스 가로 길의 전체 중 내가 클릭한 좌표의 x값 - 재생시간바의 길이
    const userClickWidthInPercent = (userClickWidth * 100) / playheadWidth; //재생시간바 대비 몇 퍼센트인지 계산해서 CSS에 효과주기

    playheadRef.current.style.width = userClickWidthInPercent + "%"; //CSS style.width에 %로 나타내줌
    playerRef.current.currentTime = (duration * userClickWidthInPercent) / 100; //플레이어에도 진척도 마찬가지로 넣어줌 CSS가 보여주는 것이랑 실제랑 같게 해야하므로
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
    //스테이트 고치기
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
    //스테이트 고치기
    setIndex(key);

    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const filterListByGenre = (allList) => {
    //장르에 맞춰서 필터해주는 함수
    let filteredList = allList.filter((el) => el.genre.genre_name === genre);
    return filteredList;
  };
  useEffect(() => {
    let filteredList = filterListByGenre(musicLists);
    setFiltered(filteredList);
    setIndex(0);
  }, [genre]);

  if (selectedMusic && isEditing === false) {
    return (
      <div className="player-wrapper">
        <div className="current-song">
          <Icon
            size={18}
            className={`close-btn ${musicOpen ? "open" : null}`}
            icon={ic_close}
            onClick={() => {
              musicModalOnOff();
            }}
          />

          {selectedMusic && (
            <>
              <audio autoPlay loop ref={playerRef}>
                <source src={selectedMusic.audio} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>

              <div className="song-info">
                <span className="song-name">{selectedMusic.name}</span>
                <span className="song-author">{selectedMusic.author}</span>
              </div>

              <div className="time">
                <div className="current-time">{currentTime}</div>
                <div className="end-time">{selectedMusic.duration}</div>
              </div>
            </>
          )}
          <div ref={timelineRef} id="timeline">
            <div ref={playheadRef} id="playhead"></div>
            <div
              ref={hoverPlayheadRef}
              className="hover-playhead"
              data-content="0:00"
            ></div>
          </div>

          <div className="controls">
            <div>
              <button onClick={playOrPause} className="play current-btn">
                {!pause ? (
                  <Icon size={23} icon={circle} />
                ) : (
                  <Icon size={20} icon={pause2} />
                )}
              </button>
            </div>

            <span className="volume-controller-wrapper2">
              <button
                className="mute-btn"
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
                      : volume < 0.01 //0으로 하면 안먹음
                      ? volumeMute
                      : volume < 0.34
                      ? volumeLow
                      : volume < 0.67
                      ? volumeMedium
                      : volumeHigh
                  }
                />
              </button>

              <input
                ref={volumeControllerRef}
                className="volume-controller2"
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
            </span>
          </div>
        </div>
      </div>
    );
  } else if (selectedMusic && isEditing === true) {
    return (
      <div className="player-wrapper">
        <div className="current-song">
          <Icon
            size={18}
            className={`close-btn ${musicOpen ? "open" : null}`}
            icon={ic_close}
            onClick={() => {
              musicModalOnOff();
            }}
          />

          <SelectBar getGenre={getGenre} genreList={genreList} />
          {currentSong && (
            <>
              <audio ref={playerRef}>
                <source src={currentSong.audio} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>

              <div className="song-info">
                <span className="song-name">{currentSong.name}</span>
                <span className="song-author">{currentSong.author}</span>
              </div>

              <div className="time">
                <div className="current-time">{currentTime}</div>
                <div className="end-time">{currentSong.duration}</div>
              </div>
            </>
          )}
          <div ref={timelineRef} id="timeline">
            <div ref={playheadRef} id="playhead"></div>
            <div
              ref={hoverPlayheadRef}
              className="hover-playhead"
              data-content="0:00"
            ></div>
          </div>

          <div className="controls">
            <div>
              <button onClick={prevSong} className="prev prev-next current-btn">
                <Icon icon={stepBackward} />
              </button>

              <button onClick={playOrPause} className="play current-btn">
                {!pause ? (
                  <Icon size={23} icon={circle} />
                ) : (
                  <Icon size={20} icon={pause2} />
                )}
              </button>
              <button onClick={nextSong} className="next prev-next current-btn">
                <Icon icon={stepForward} />
              </button>
            </div>

            <div className="song_alert_wrapper">
              <span className="song_alert">
                {selectedSong &&
                  musicLists &&
                  `${musicLists[selectedSong].name} 곡이 배경음악으로 설정되었습니다`}
              </span>
            </div>

            <span className="volume-controller-wrapper">
              <button
                className="mute-btn"
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
                      : volume < 0.01 //0으로 하면 안먹음
                      ? volumeMute
                      : volume < 0.34
                      ? volumeLow
                      : volume < 0.67
                      ? volumeMedium
                      : volumeHigh
                  }
                />
              </button>

              <input
                ref={volumeControllerRef}
                className="volume-controller"
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
            </span>
          </div>
        </div>
        <div className="play-list">
          {filtered.map((music, arrayIndex) => (
            <div className="play-list-one" key={uniqueId()}>
              <div
                onClick={() => clickAudio(arrayIndex)}
                className={
                  "track " +
                  (index === arrayIndex && !pause ? "current-audio" : "") +
                  (index === arrayIndex && pause ? "play-now" : "")
                }
              >
                <img className="track-img" src={music.img} />
                <div className="track-info">
                  <span className="track-name">
                    {music.name.length >= 20
                      ? `${music.name.slice(0, 18)}...`
                      : music.name}
                  </span>
                  <span className="track-author">{music.author}</span>
                </div>
                <span className="track-duration">
                  {index === music.id ? currentTime : music.duration}
                </span>
                <button
                  className="track-select"
                  title={music.id}
                  onClick={(e) => {
                    sendSongInfo(e);
                    getMusicData(e.target.title);
                    e.stopPropagation(); //버튼 클릭할 때 재생 곡이 바뀌는 걸 방지해준다. 버블링 캡쳐링 금지
                  }}
                >
                  <Icon
                    size={22}
                    icon={plus}
                    style={{ pointerEvents: "none" }}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="player-wrapper">
        <div className="current-song">
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
                className="volume-controller"
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
        </div>
        <div className="play-list">
          {filtered.map((music, arrayIndex) => (
            <div className="play-list-one" key={uniqueId()}>
              <div
                onClick={() => clickAudio(arrayIndex)}
                className={
                  "track " +
                  (index === arrayIndex && !pause ? "current-audio" : "") +
                  (index === arrayIndex && pause ? "play-now" : "")
                }
              >
                <img className="track-img" src={music.img} />
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
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ mainReducer }) => {
  return {
    musicList: mainReducer,
  };
};

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
const VolumeController = styled.input`
  position: absolute;
  width: 6rem;
  height: 0.2rem;
  top: 1rem;
  right: 0.6rem;
  transform-origin: 1;
  border-radius: 5px;
  cursor: pointer;
  /* transform: rotate(-90deg); */
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
    /* appearance: none; */
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
