import styled from "styled-components";
import {
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_LG_SCREEN,
  flexCenter,
} from "../../../styles/global.style";

export const CardSection = styled.section`
  width: 80%;
  ${flexCenter}
`;

export const Cardul = styled.ul`
  width: 50rem;
  height: 33.3rem;
  overflow: scroll;

  @media only screen and (min-width: ${BREAK_POINT_MD_SCREEN}px) {
    width: 75rem;
  }

  @media only screen and (min-width: ${BREAK_POINT_LG_SCREEN}px) {
    width: 100rem;
  }
`;

export const CardWrapper = styled.section`
  position: relative;
  display: flex;
  width: 40%;
`;

export const CardFace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 80%;
  transform-style: preserve-3d;
  ${flexCenter}
  transition: 1s all ease-out;
  backface-visibility: hidden;
  border-radius: 5px;
  // flex-direction: column;
`;

export const CardFront = styled(CardFace)`
  background: var(--primary-color);
  display: flex;
  flex-direction: row;

  & img {
    clip-path: circle();
    object-fit: cover;
    width: 27rem;
    height: 13rem;
    position: absolute;
    top: 18%;
  }
`;

export const CardBack = styled(CardFace)`
  background: var(--point-color);
  color: var(--primary-color);
  transform: rotateY(180deg);
`;

export const CardFrontHeader = styled.h1`
  font-size: 1.8rem;
  position: absolute;
  bottom: 18%;
`;

export const CardBackText = styled.h2`
  width: 60%;
  height: 75%;
  line-height: 1.8;
  font-size: 1.6rem;
  color: var(--black-color);
  font-family: var(--thick-font);
`;

export const Card = styled.div`
  min-width: 25rem;
  min-height: 33.3rem;
  transform-style: preserve-3d;
  &:not(:first-child) {
    margin-left: 3rem;
  }

  &:hover ${CardFront} {
    transform: rotateY(180deg);
  }

  &:hover ${CardBack} {
    transform: rotateY(360deg);
  }
`;
