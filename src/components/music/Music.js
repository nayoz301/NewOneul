import React, { useRef, useEffect, useState } from "react";
import { Icon } from "react-icons-kit";
import { circle, stepBackward, stepForward } from "react-icons-kit/iconic/";
import { pause2 } from "react-icons-kit/icomoon/pause2";
import { ic_close } from "react-icons-kit/md/ic_close";
import { plus } from "react-icons-kit/feather/plus";
import axios from "axios";

import {
  volumeMedium,
  volumeMute,
  volumeMute2,
  volumeLow,
  volumeHigh,
} from "react-icons-kit/icomoon";

import "./Music.css";
import SelectBar from "./SelectBar";
import musics from "./musics";

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

const Music = (props) => {
  const { musicModalOnOff } = props;

  const [pause, setPause] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [musicList, setMusicList] = useState(music);
  const [genre, setGenre] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);

  const [volume, setVolume] = useState(0.03);
  const [muteState, setMuteState] = useState(false);

  const [genreList, setGenreList] = useState("");
  const [filtered, setFiltered] = useState(music);

  const [currentSong, setCurrentSong] = useState(musics[index]);

  let playerRef = useRef();
  let timelineRef = useRef();
  let hoverPlayheadRef = useRef();
  let playheadRef = useRef();
  let volumeControllerRef = useRef(); //볼륨 슬라이더 보임 안보임 효과 때문에 넣었음

  //실험 7월 1일 10시
  useEffect(() => {
    getGenreHandler();
  }, []);

  useEffect(() => {
    setCurrentSong(filtered[index]);
  }, [index]);

  const getGenreHandler = async () => {
    return await axios
      .get("http://localhost:4000/genre", {
        headers: { "content-type": "application/json", withCredentials: true },
      })
      .then((data) => {
        //data === musics 배열인셈
        let dataLists = genreKinds(data.data); //dataLists에 장르만 추출
        setGenreList(dataLists);
        setMusicList(data.data);
        setFiltered(data.data);
        console.log("받아온 데이터", data.data);
      })
      .catch((err) => {
        alert("장르를 받아오지 못헀습니다");
      });
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
    // console.log("셀렉바에서 선택된 장르::", selectedGenre);
  };

  const sendSongInfo = (e) => {
    setSelectedSong(e.target.title);
    console.log(e.target.title);
  };

  console.log("인덱스", index);
  console.log("커렌트 송", currentSong);

  useEffect(() => {
    playerRef.current.volume = volume;
    playerRef.current.muted = muteState;
  }, [volume, muteState]);

  useEffect(() => {
    // playerRef.current.pause();
    console.log("타임라인, 플레이어::", timelineRef.current, playerRef.current);
    playerRef.current.addEventListener("timeupdate", timeUpdate);
    playerRef.current.addEventListener("ended", nextSong, false);
    timelineRef.current.addEventListener("click", changeCurrentTime, false);
    timelineRef.current.addEventListener("mousemove", hoverTimeLine, false);
    timelineRef.current.addEventListener("mouseout", resetTimeLine, false);
    // return () => {
    //   playerRef.current.removeEventListener("timeupdate", timeUpdate);
    //   playerRef.current.removeEventListener("ended", nextSong);
    //   timelineRef.current.removeEventListener("click", changeCurrentTime);
    //   timelineRef.current.removeEventListener("mousemove", hoverTimeLine);
    //   timelineRef.current.removeEventListener("mouseout", resetTimeLine);
    // };
  }, []);

  const changeCurrentTime = (e) => {
    //재생시간바 시간 이동하기
    const duration = playerRef.current.duration; //duration 동영상의 길이
    const playheadWidth = timelineRef.current.offsetWidth; //offsetWidth CSS상으로 재생시간바의 길이
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
    // const timelineWidth =
    //   timelineRef.current.offsetWidth - playheadRef.current.offsetWidth;
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

  const formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    seconds = seconds >= 10 ? seconds : "0" + (seconds % 60);

    const formatTime = minutes + ":" + seconds;

    return formatTime;
  };

  const updatePlayer = () => {
    setCurrentSong(filtered[index]);
    // const audio = new Audio(currentSong.audio);
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
  //실험
  useEffect(() => {
    let filteredList = filterListByGenre(musicList);
    console.log("장르 바뀔 때마다 필터한 리스트", filteredList);
    // setMusicList(filteredList);
    setFiltered(filteredList);
    setIndex(0);
  }, [genre]);

  return (
    <div className="player-wrapper">
      <div className="current-song">
        <Icon
          size={18}
          className="close-btn"
          icon={ic_close}
          onClick={() => {
            playerRef.current.removeEventListener("timeupdate", timeUpdate);
            playerRef.current.removeEventListener("ended", nextSong);
            timelineRef.current.removeEventListener("click", changeCurrentTime);
            timelineRef.current.removeEventListener("mousemove", hoverTimeLine);
            timelineRef.current.removeEventListener("mouseout", resetTimeLine);
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
        {filtered.map((music, key = 0) => (
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
                title={music.id}
                onClick={(e) => {
                  console.log(e.target);
                  sendSongInfo(e);
                  e.stopPropagation(); //버튼 클릭할 때 재생 곡이 바뀌는 걸 방지해준다. 버블링 캡쳐링 금지
                }}
              >
                <Icon size={22} icon={plus} style={{ pointerEvents: "none" }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
