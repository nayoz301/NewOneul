import styled from "styled-components";
import {
  BREAK_POINT_MOBILE,
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_LG_SCREEN,
  BREAK_POINT_16LG_SCREEN,
  flexCenter,
} from "../global.style";

export const MainWrapper = styled.main`
  width: 100%;
`;

export const MainDivForColor = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--primary-color);
`;

export const MainInnerSection = styled.section`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  ${flexCenter}
  flex-direction: column;
`;

export const MainInnerWrapper = styled.div`
  ${flexCenter}
  width: 100%;
  min-height: 80vh;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  /* 768px */
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    width: 80%;
  }
`;

export const MainInnerArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 63%;
  color: var(--black-color);
  z-index: 100;
  flex-shrink: 0;

  & h2 {
    font-size: 2rem;
    margin-bottom: 0.7em;
    line-height: 1.8;
    font-family: var(--thick-font);
  }
  & p {
    font-size: 1.6rem;
    line-height: 1.85;
    padding-bottom: 1rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    & h2 {
      font-size: 2.4rem;
    }
    & p {
      font-size: 1.7rem;
    }
  }

  /* 1200px */
  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    & h2 {
      font-size: 2.8rem;
    }
    & p {
      font-size: 1.9rem;
    }
  }

  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN + 1}px) {
    & h2 {
      font-size: 3rem;
    }
    & p {
      font-size: 2.1rem;
    }
  }
`;

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 43rem;
  & video {
    width: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    margin-left: 4rem;
    min-width: 20rem;
    max-width: 83rem;
  }
`;
