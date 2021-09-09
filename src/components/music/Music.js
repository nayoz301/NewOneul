import React, { useRef, useEffect, useState } from "react";
import uniqueId from "lodash/uniqueId";
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
import {
  music,
  PlayerWrapper,
  CurrentSongWrapper,
  CloseBtn,
  SongInfo,
  SongName,
  SongAuthor,
  Time,
  CurrentTime,
  EndTime,
  PlayHead,
  HoverPlayHead,
  TimeLine,
  BtnWrapper,
  Btns,
  PrevBtn,
  NextBtn,
  PlayBtn,
  VolumeControlWrapper,
  VolumeBtn,
  VolumeBtn2,
  VolumeController,
  SongAlertWrapper,
  SongAlert,
  PlayList,
  EachTrack,
  TrackIMG,
  TrackInfo,
  TrackName,
  TrackAuthor,
  TrackDuration,
  TrackSelectBtn,
} from "../../styles/music/Music.style";

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

export default connect(mapStateToProps)(Music);
