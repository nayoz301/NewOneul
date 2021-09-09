import styled, { keyframes } from "styled-components";

export const music = [
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

export const PlayerWrapper = styled.div`
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

export const CurrentSongWrapper = styled.div`
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

export const CloseBtn = styled.div`
  position: relative;
  right: -16rem;
  top: 1rem;
  cursor: pointer;

  &:active {
    transform: scale(0.75);
  }
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SongName = styled.span`
  margin-top: 1rem;
  font-size: 2.2rem;
`;
export const SongAuthor = styled.span`
  color: #dfd5c9;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Time = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 24rem;
  font-size: 1.3rem;
`;
export const CurrentTime = styled.div``;
export const EndTime = styled.div``;

export const PlayHead = styled.div`
  position: relative;
  z-index: 200;
  width: 0;
  height: 5px;
  border-radius: 5px;
  background: #a9aec1; /*재생시간바 진행바 색깔*/
`;
export const HoverPlayHead = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  height: 0.5rem;
  border-radius: 5px;
  background: #e3ba9a; /*재생시간 바 호버*/
  transition: opacity 0.3s;
`;
export const TimeLine = styled.div`
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

export const BtnWrapper = styled.div`
  margin-top: 1rem;
`;
export const Btns = styled.div`
  margin-top: 1rem;
  position: relative;
  z-index: 100; /* 뮤직 사운드바랑 겹치지 않으려고 */
`;
export const Button = styled.button`
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
export const PrevBtn = styled(Button)`
  width: 3.5rem;
  height: 3.5rem;
`;
export const NextBtn = styled(Button)`
  width: 3.5rem;
  height: 3.5rem;
`;
export const PlayBtn = styled(Button)`
  width: 5rem;
  height: 5rem;

  svg {
    size: ${(props) => (props.pause ? 20 : 23)};
  }
`;
export const VolumeControlWrapper = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  right: -9rem;
  top: -3.6rem;
`;
export const VolumeBtn = styled(Button)`
  position: relative;

  &:active {
    transform: scale(0.95);
  }
`;
export const VolumeBtn2 = styled(VolumeBtn)`
  right: 3.8rem;
  width: 6rem;
`;
export const VolumeController = styled.input`
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

export const SongAlertWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`;
export const SongAlertAnimation = keyframes`
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
export const SongAlert = styled.span`
  position: absolute;
  width: 33rem;
  top: -0.4rem;
  font-size: 1.2rem;
  animation: ${SongAlertAnimation} 3s infinite;
`;

export const PlayList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem;
  height: 34vh;
  width: 100%;
  overflow-y: scroll;
  align-items: center;
  margin-left: 0.6rem;
`;
export const EachTrack = styled.div`
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
export const TrackIMG = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  filter: ${(props) =>
    props.index === props.arrayIndex && props.pause ? "opacity(60%)" : ""};
`;
export const TrackInfo = styled.div`
  margin-left: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1.7rem;
  min-width: 17rem;
  margin-bottom: 0.2rem;
`;
export const TrackName = styled.span`
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
  overflow: hidden;
  color: rgb(19, 18, 18);
`;
export const TrackAuthor = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: rgba(189, 195, 199, 1);
  overflow: hidden;
`;
export const TrackDuration = styled.span`
  min-width: 3rem;
  margin-left: 1rem;
  margin-right: 0rem;
  font-weight: 500;
  font-size: 1.2rem;
`;
export const TrackSelectBtn = styled.button`
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
