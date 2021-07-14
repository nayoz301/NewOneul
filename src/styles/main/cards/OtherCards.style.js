import styled from "styled-components";
import {
  BREAK_POINT_MOBILE,
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_LG_SCREEN,
  BREAK_POINT_16LG_SCREEN,
  flexCenter,
  flexSpaceBtw,
  emojiModalShow,
} from "../../global.style";
import { IconWrapper, MyDiaryHeader } from "./MyCards.style";

export const OtherDiaryHeader = styled(MyDiaryHeader)`
  font-size: 1.9rem;

  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN}px) {
    margin-top: 0.2em;
    font-size: 2.1rem;
  }
`;

export const OtherDiaryInnerWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const OtherDiary = styled.div`
  position: relative;
  ${flexCenter}
  width: 17rem;
  margin: 0.9rem;
  height: 23rem;
  font-size: 1.6rem;
  border-radius: 6px;
  transition: transform 0.15s ease-in;
  transform: scale(0.97);
  background: #8ca4c159;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;

  & img {
    clip-path: circle();
    object-fit: cover;
    object-position: top;
    width: 8rem;
    height: 7rem;
    position: absolute;
    top: 18%;
  }

  &:hover {
    transform: scale(1);
  }

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    margin: 1.8rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN}px) {
    min-width: 19rem;
    min-height: 25.705rem;
  }
`;

export const OtherDiaryIconWrapper = styled(IconWrapper)`
  ${flexSpaceBtw}
  left: 8%;
  right: 8%;
`;

export const NameSpan = styled.span`
  padding-top: 1.5em;
`;

export const OtherDiaryWrapper = styled.div`
  padding-top: 1rem;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 7px;
  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    height: 45vh;
    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #888;
    }
  }
`;

export const FaceWeather = styled.div`
  display: flex;
  align-items: center;
  & svg {
    width: 4rem;
    height: 4rem;
  }

  font-size: 2.5rem;
`;

export const Heart = styled.div`
  transform: scale(0.95);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.8);
  }
`;
