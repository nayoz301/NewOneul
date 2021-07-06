import styled from "styled-components";
import { BREAK_POINT_MOBILE } from "../../global.style";
import { MyDiaryHeader } from "./MyCards.style";

export const OtherDiaryHeader = styled(MyDiaryHeader)`
  margin-top: 0;
`;

export const OtherDiaryInnerWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  width: 15rem;
  height: 18rem;
  background: tomato;
  font-size: 1.6rem;
  margin: 0.9rem;
  border-radius: 10px;

  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    min-width: 17rem;
    min-height: 23rem;
    margin: 1.8rem;
  }
`;
