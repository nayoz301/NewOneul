import styled, { css } from "styled-components";
import {
  BREAK_POINT_MOBILE,
  BREAK_POINT_MD_SCREEN,
  flexCenter,
} from "../global.style";

export const HeaderSection = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  color: white;
  /* for the swing background */
  /* background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.25)); */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
`;

export const Overlay = styled.div`
  position: absolute;
  z-index: -1;

  & video {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    position: fixed;
  }
`;

export const LandingNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 11rem;
  margin: 0 auto;
  z-index: 5;

  & h1 {
    font-size: 4.4rem;
  }

  & span {
    font-size: 1.7rem;
    border: 1px solid var(--primary-color);
    padding: 0.5rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.45s all;
  }

  & span:hover {
    color: #222;
    background-color: var(--primary-color);
  }

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    & span {
      font-size: 2rem;
    }
  }
`;

export const LdInnerSection = styled.section`
  height: calc(100vh - 11rem);
  overflow: hidden;
  ${flexCenter}
  flex-direction: column;
`;

export const LdInnerSpanWrapper = styled.div`
  margin-top: -10rem;
`;

export const LdInnerSpan = styled.span`
  font-size: ${(props) => (props.first ? "5.5rem" : "2.5rem")};
  line-height: ${(props) => (props.first ? "2.1" : "1.4")};
  letter-spacing: 0.2rem;
  position: ${(props) => props.first && "relative"};
  font-family: ${(props) => props.first && "var(--thick-font)"};

  ${({ first }) =>
    first &&
    css`
      &::before {
        content: "";
        width: 0rem;
        height: 3px;
        background-color: var(--primary-color);
        position: absolute;
        bottom: -13%;
        transition: 0.45s all;
      }

      &:hover {
        &::before {
          width: 13rem;
        }
      }
    `}

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    font-size: ${(props) => (props.first ? "6rem" : "3rem")};
  }

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    font-size: ${(props) => (props.first ? "8.5rem" : "4rem")};
  }
`;

export const LdBtnWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-around;
`;

export const LdBtn = styled.button`
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  font-size: 2rem;
  padding: 0.9rem 4rem;
  font-family: var(--primary-font);
  border-radius: 4px;
  transition: 0.5s all ease-out;
  margin-right: ${({ first }) => first && "3rem"};

  &:hover {
    color: #222;
    background-color: var(--primary-color);
  }

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    font-size: 2.3rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    font-size: 2.6rem;
  }
`;
