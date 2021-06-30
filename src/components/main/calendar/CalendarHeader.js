import React from "react";
import uniqueId from "lodash/uniqueId";
import { Icon } from "react-icons-kit";
import { ic_navigate_before } from "react-icons-kit/md/ic_navigate_before";
import { ic_navigate_next } from "react-icons-kit/md/ic_navigate_next";

const CalendarHeader = ({ value, next, before }) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Icon icon={ic_navigate_before} size={45} onClick={before} />
        <h2>
          {value.format("YYYY")}년 {value.format("M")}월
        </h2>
        <Icon icon={ic_navigate_next} size={45} onClick={next} />
      </div>
      <div style={{ display: "flex" }}>
        {days.map((day) => (
          <h5 style={{ flexGrow: 1 }} key={uniqueId()}>
            {day}
          </h5>
        ))}
      </div>
    </>
  );
};

export default CalendarHeader;
