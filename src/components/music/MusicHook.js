import React, { useRef, useEffect, useState } from "react";
import { Icon } from "react-icons-kit";
import { circle, stepBackward, stepForward } from "react-icons-kit/iconic/";
import { pause2 } from "react-icons-kit/icomoon/pause2";
import { ic_close } from "react-icons-kit/md/ic_close";
import { download, filePlus } from "react-icons-kit/feather";
import { square_add } from "react-icons-kit/ikons/square_add";
import { plus } from "react-icons-kit/feather/plus";
import { mediaRecordOutline } from "react-icons-kit/typicons/mediaRecordOutline";

import {
  volumeMedium,
  volumeMute,
  volumeMute2,
  volumeLow,
  volumeHigh,
} from "react-icons-kit/icomoon";

// import "./Music.css";
import SelectBar from "./SelectBar";
import musics from "./musics";

const MusicHook = () => {
  const [pause, setPause] = useState(false);
  const [index, setIndex] = useState(1);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [musicList, setMusicList] = useState(musics);
  const [genre, setGenre] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);

  const [volume, setVolume] = useState(0.2);

  const [muteState, setMuteState] = useState(false);

  let playerRef = useRef();
  let timelineRef = useRef();
  let hoverPlayheadRef = useRef();
  let playheadRef = useRef();

  let volumeControllerRef = useRef(); //볼륨 슬라이더 보임 안보임 효과 때문에 넣었음

  const getGenre = (genreFromSelectBar) => {
    setGenre(genreFromSelectBar);
    console.log("셀렉바에서 받아온 장르::", genre);
    // return genre;
  };

  const songSelectedWithGenre = (e) => {
    console.log("콘솔", e.target.title);
    setSelectedSong(e.target.title);
  };
  // console.log("해당 장르 몇번째 곡?::", selectedSong, genre);

  useEffect(() => {
    playerRef.current.volume = volume;
    playerRef.current.muted = muteState;
  }, [volume, muteState]);

  useEffect(() => {
    playerRef.current.addEventListener("timeupdate", timeUpdate, false);
    playerRef.current.addEventListener("ended", nextSong, false);
    timelineRef.current.addEventListener("click", changeCurrentTime, false);
    timelineRef.current.addEventListener("mousemove", hoverTimeLine, false);
    timelineRef.current.addEventListener("mouseout", resetTimeLine, false);
    return () => {
      playerRef.current.removeEventListener("timeupdate", timeUpdate);
      playerRef.current.removeEventListener("ended", nextSong);
      timelineRef.current.removeEventListener("click", changeCurrentTime);
      timelineRef.current.removeEventListener("mousemove", hoverTimeLine);
      timelineRef.current.removeEventListener("mouseout", resetTimeLine);
    };
  }, []);

  console.log(timelineRef.current);

  const changeCurrentTime = (e) => {
    //재생시간바 시간 이동하기
    const duration = playerRef.current.duration; //duration 동영상의 길이
    const playheadWidth = timelineRef.current.offsetWidth; //offsetWidth CSS상으로 재생시간바의 길이
    // console.log(offsetWidth);
    const offsetWidth = timelineRef.current.offsetLeft; //offsetLeft CSS상으로 body박스의 가로 길이 right은 없나봄.
    const userClickWidth = e.clientX - offsetWidth; //e.clientX(body박스 가로 길의 전체 중 내가 클릭한 좌표의 x값 - 재생시간바의 길이
    console.log("e.clientX", e.clientX);
    console.log("offsetWidth", offsetWidth);
    console.log(
      "timelineRef.current.offsetLeft",
      timelineRef.current.offsetLeft
    );
    const userClickWidthInPercent = (userClickWidth * 100) / playheadWidth; //재생시간바 대비 몇 퍼센트인지 계산해서 CSS에 효과주기

    playheadRef.current.style.width = userClickWidthInPercent + "%"; //CSS style.width에 %로 나타내줌

    playerRef.current.currentTime = (duration * userClickWidthInPercent) / 100; //플레이어에도 진척도 마찬가지로 넣어줌 CSS가 보여주는 것이랑 실제랑 같게 해야하므로
  };

  const timeUpdate = () => {
    const duration = playerRef.current.duration;
    const timelineWidth =
      timelineRef.current.offsetWidth - playheadRef.current.offsetWidth;
    const playPercent = 100 * (playerRef.current.currentTime / duration);
    playheadRef.current.style.width = playPercent + "%";
    const currentTime = formatTime(parseInt(playerRef.current.currentTime));
    setCurrentTime(currentTime);
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

  const timeUpdate = () => {
    const duration = playerRef.current.duration;
    const timelineWidth =
      timelineRef.current.offsetWidth - playheadRef.current.offsetWidth;
    const playPercent = 100 * (playerRef.current.currentTime / duration);
    playheadRef.current.style.width = playPercent + "%";
    const currentTime = formatTime(parseInt(playerRef.current.currentTime));
    setCurrentTime(currentTime);
  };

  const formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    seconds = seconds >= 10 ? seconds : "0" + (seconds % 60);

    const formatTime = minutes + ":" + seconds;

    return formatTime;
  };

  const updatePlayer = () => {
    const currentSong = musicList[index];
    const audio = new Audio(currentSong.audio);
    playerRef.current.load();
  };

  const nextSong = () => {
    setIndex((index + 1) % musicList.length);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const prevSong = () => {
    setIndex((index + musicList.length - 1) % musicList.length);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const playOrPause = () => {
    //스테이트 고치기
    const currentSong = musicList[index];
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

  const currentSong = musicList[index];

  return (
    <div className="player-wrapper">
      <div className="current-song">
        <Icon className="close-btn" icon={ic_close} />

        <SelectBar getGenre={getGenre} />

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
        {musicList.map((music, key = 0) => (
          <div className="play-list-one" key={key}>
            <div
              key={key}
              onClick={() => clickAudio(key)}
              className={
                "track " +
                (index === key && !pause ? "current-audio" : "") +
                (index === key && pause ? "play-now" : "")
              }
            >
              <img className="track-img" src={music.img} />
              <div className="track-info">
                <span className="track-name">{music.name}</span>
                <span className="track-author">{music.author}</span>
              </div>
              <span className="track-duration">
                {index === key ? currentTime : music.duration}
              </span>
              <button
                className="track-select"
                onClick={(e) => {
                  e.stopPropagation(); //버튼 클릭할 때 재생 곡이 바뀌는 걸 방지해준다. 버블링 캡쳐링 금지
                  songSelectedWithGenre(e);
                }}
                title={key}
              >
                <Icon size={22} icon={plus} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicHook;
