import styled from "styled-components";
import { BREAK_POINT_MOBILE } from "../../global.style";
import {
  Card,
  CardBack,
  CardBackText,
  CardFront,
  CardFrontHeader,
} from "../../landing/LandingCard.style";

export const MyCardWrapper = styled.div`
  /* border: 1px solid grey; */
  position: relative;
  padding-top: 1.4rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  min-height: 25rem;
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
  }
`;

export const MyDiary = styled(Card)`
  min-width: 15rem;
  min-height: 18rem;
  margin: 1.5rem 0;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    min-width: 17rem;
    min-height: 23rem;
  }
`;

export const MyDiaryHeader = styled.h1`
  text-align: center;
  font-size: 2.1rem;
  font-family: var(--thick-font);
`;

export const MyDiaryFrontHeader = styled(CardFrontHeader)`
  font-family: Noto Sans KR;
  font-weight: 300;
  font-size: 1.3rem;
  position: absolute;
  top: 4%;
  left: 6%;
`;

export const MyDiaryCardFront = styled(CardFront)`
  & img {
    width: 13rem;
    height: 6.5rem;
  }
`;

export const MyDiaryBack = styled(CardBack)`
  overflow: hidden;
`;

export const MyDiaryBackTextWrapper = styled.div`
  width: 70%;
  height: 80%;
  overflow: hidden;
`;

export const MyDiaryBackText = styled(CardBackText)`
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  line-height: 1.8;
`;

export const IconWrapper = styled.div`
  position: absolute;
  bottom: 4%;
  right: 8%;

  & svg {
  }
`;

export const DiaryLogin = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 1.2rem 4rem;
  font-size: 1.7rem;
  font-family: var(--thick-font);
  border-radius: 0rem;
  outline: none;
  transition: all 0.35s;
  & svg {
    width: 19px;
    height: 19px;
    color: var(--black-color);
    margin-left: 1rem;
  }

  &:hover {
    border-radius: 3rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
