import styled from "styled-components";
import {
  BREAK_POINT_MOBILE,
  BREAK_POINT_MD_SCREEN,
  BREAK_POINT_16LG_SCREEN,
} from "../../global.style";
import {
  Card,
  CardBack,
  CardBackText,
  CardFront,
  CardFrontHeader,
} from "../../landing/LandingCard.style";

export const MyCardWrapper = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  min-height: 25rem;
  padding-top: 1rem;
`;

export const MyDiary = styled(Card)`
  /* border: 1px solid grey; */
  min-width: 17rem;
  min-height: 23rem;
  margin: 1.5rem;
  padding-top: 1.5rem;

  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN}px) {
    min-width: 18rem;
    min-height: 25.705rem;
  }
`;

export const MyDiaryHeader = styled.h1`
  text-align: center;
  font-size: 1.9rem;
  font-family: var(--thick-font);

  @media only screen and (min-width: ${BREAK_POINT_16LG_SCREEN}px) {
    font-size: 2.1rem;
  }
`;

export const MyDiaryFrontHeader = styled(CardFrontHeader)`
  color: var(--black-color);
  font-family: Noto Sans KR;
  font-weight: 400;
  font-size: 1.3rem;
  position: absolute;
  top: 4%;
  left: 6%;
`;

export const MyDiaryCardFront = styled(CardFront)`
  background: #eeede3d6;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & img {
    width: 13rem;
    height: 6.5rem;
  }
`;

export const MyDiaryBack = styled(CardBack)`
  background: ${({ hexcode }) => hexcode};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
`;

export const MyDiaryBackTextWrapper = styled.div`
  width: 70%;
  height: 80%;
  overflow: hidden;
`;

export const MyDiaryBackText = styled(CardBackText)`
  font-size: 1.4rem;
  width: 100%;
  height: 100%;
  line-height: 1.9;
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
