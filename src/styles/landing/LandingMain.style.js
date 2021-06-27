import styled from "styled-components";
import {
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_LG_SCREEN,
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
  width: 75%;
  height: 100vh;
  margin: 0 auto;
  ${flexCenter}
`;

export const MainInnerWrapper = styled.div`
  ${flexCenter}
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MainInnerArticle = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  color: var(--black-color);
  z-index: 100;
  flex-shrink: 0;
  & h2 {
    font-size: 3.7rem;
    margin-bottom: 3rem;
    line-height: 1.6;
    font-family: var(--thick-font);
  }
  & p {
    font-size: 1.8rem;
    line-height: 2;
    position: relative;
    z-index: 1;
    margin-bottom: 3rem;
  }
  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    & h2 {
      font-size: 4.3rem;
    }
    & p {
      font-size: 2rem;
    }
  }
`;

export const VideoContainer = styled.div`
  min-width: 40rem;
  max-width: 83rem;
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
