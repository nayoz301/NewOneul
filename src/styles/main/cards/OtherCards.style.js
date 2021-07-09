import styled from "styled-components";
import {
  BREAK_POINT_MOBILE,
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_LG_SCREEN,
  BREAK_POINT_16LG_SCREEN,
  flexCenter,
  flexSpaceBtw,
} from "../../global.style";
import { IconWrapper, MyDiaryHeader } from "./MyCards.style";

export const OtherDiaryHeader = styled(MyDiaryHeader)`
  font-size: 1.9rem;
  margin-top: 0;

  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN}px) {
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
    width: 13rem;
    height: 6.5rem;
    position: absolute;
    top: 18%;
  }

  &:hover {
    transform: scale(1);
  }

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    margin: 1.8rem;
    /* min-width: 18rem;
    min-height: 24.352rem; */
  }

  /* @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    min-width: 19rem;
    min-height: 25.705rem;
  } */

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
