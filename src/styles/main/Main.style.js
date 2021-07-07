import styled from "styled-components";
import {
  BREAK_POINT_MOBILE,
  flexSpaceBtw,
  BREAK_POINT_LG_SCREEN,
  BREAK_POINT_MD_SCREEN,
} from "../global.style";

export const MainHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 6rem;
  background: white;
  z-index: 200;
  background: #fffdfa;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);
`;

export const HeaderWrapper = styled.div`
  ${flexSpaceBtw}
  width: 80%;
  min-height: 100%;
  margin: 0 auto;
  font-family: var(--thick-font);

  & a {
    color: black;
  }

  & h1 {
    font-size: 2.4rem;
  }

  & button {
    padding: 0.8rem 1.4rem;
    font-family: var(--thick-font);
    font-size: 1.5rem;
    border-radius: 3px;
    border-color: grey;
  }
`;

export const MainSection = styled.section`
  min-height: 100vh;
  background: #fffdfa;
  font-family: var(--primary-font);
`;

export const MainInnerSection = styled.section`
  padding-top: 60px;
  z-index: 100;

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    min-height: 100vh;
  }
`;

export const MainInnerWrapper = styled.div`
  margin: 4rem auto;
  width: 80%;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: 75%;
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    display: flex;
  }
`;

export const CalendarWrapper = styled.div`
  height: 50rem;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;
  border-top: solid 2px #666;
  border-right: solid 2px #666;
  border-left: solid 2px #666;
  /* border-bottom: solid 1px #666; */
  box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  margin-bottom: 3rem;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    min-width: 55rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    min-height: calc(54.6vh + 25rem);
  }
`;
