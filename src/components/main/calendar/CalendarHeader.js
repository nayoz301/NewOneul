import React from "react";
import uniqueId from "lodash/uniqueId";
import { Icon } from "react-icons-kit";
import { ic_navigate_before } from "react-icons-kit/md/ic_navigate_before";
import { ic_navigate_next } from "react-icons-kit/md/ic_navigate_next";
import styled from "styled-components";
import { flexCenter } from "../../../styles/global.style";

const CalendarHeader = ({ value, next, before }) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <>
      <CalHeader>
        <Icon
          icon={ic_navigate_before}
          size={34}
          onClick={before}
          style={{ cursor: "pointer" }}
        />
        <Year>
          {value.format("YYYY")}년 {value.format("M")}월
        </Year>
        <Icon
          icon={ic_navigate_next}
          size={34}
          onClick={next}
          style={{ cursor: "pointer" }}
        />
      </CalHeader>
      <DaysWrapper>
        {days.map((day) => (
          <Days day={day} key={uniqueId()}>
            {day}
          </Days>
        ))}
      </DaysWrapper>
    </>
  );
};

export default CalendarHeader;

const CalHeader = styled.header`
  ${flexCenter}
  justify-content: space-around;
  margin: 1rem 0;
`;

const Year = styled.h2`
  font-size: 2.7rem;
  font-family: MaruBuri-Regular;
  letter-spacing: 1px;
  font-weight: 100;
`;

const DaysWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Days = styled.h5`
  font-family: MaruBuri-Regular;
  font-size: 1.4rem;
  flex-grow: 1;
  color: ${({ day }) =>
    day === "일" ? "red" : day === "토" ? "blue" : "black"};
`;
