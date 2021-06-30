import React from "react";
import moment from "moment";

const Day = ({ day, modalHandle }) => {
  const m = moment();

  //   const color = (day) => {
  //       if(day.format("MM") === )
  //   }

  return (
    <div
      style={{
        border: "3px solid red",
        textAlign: "center",
        cursor: "pointer",
        flexGrow: 1,
        color: day.format("L") === m.format("L") ? "red" : "black",
      }}
      onClick={() => modalHandle(day)}
    >
      {day.format("D")}
      <div>이모지</div>
    </div>
  );
};

export default Day;
