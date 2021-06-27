import styled from "styled-components";
import {
  flexSpaceBtw,
  translateY,
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_LG_SCREEN,
} from "../global.style";

export const SecondDivForColor = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--third-color);
`;

export const MainSecondInnerSection = styled.section`
  height: 100vh;
  margin: 0 auto;
  ${flexSpaceBtw}
  flex-direction: column;
  position: relative;
`;

export const MainSecondHeader = styled.h2`
  font-size: 3rem;
  font-family: var(--thick-font);
  color: var(--black-color);
  position: relative;
  top: 13%;
  margin-bottom: 9rem;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 15%;
  ${flexSpaceBtw}
  justify-content: space-around;
  background-color: var(--primary-color);
`;

export const ScrollTop = styled.button`
  position: absolute;
  right: 4%;
  bottom: 18%;
  padding: 5px 0.7rem;
  font-size: 2.5rem;
  border: none;
  border-radius: 50%;
  background-color: var(--primary-color);
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  animation: ${translateY} 2s infinite;

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    font-size: 3.7rem;
  }
`;

export const LinkDiv = styled.div`
  font-size: 1.4rem;
`;

export const FooterBtnDiv = styled.div`
  & button {
    padding: 0.9rem;
    border: 1px solid black;
    font-size: 1.6rem;
    font-family: var(--primary-font);
    border-radius: 4px;
    transition: 0.5s all ease-out;
  }
`;
