import React from "react";
import Day from "./Day";
import uniqueId from "lodash/uniqueId";

const Week = ({ week, modalHandle }) => {
  return (
    <div
      style={{
        display: "flex",
        border: "4px solid green",
        flexGrow: 1,
      }}
    >
      {week.map((day) => (
        <Day day={day} modalHandle={modalHandle} key={uniqueId()} />
      ))}
    </div>
  );
};

export default Week;
