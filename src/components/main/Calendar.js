import React from "react";
import moment from "moment";

const Calendar = () => {
  const m = moment();
  const startday = m.clone().startOf("M").startOf("week");
  const lastday = m.clone().endOf("M").endOf("week");

  const calendar = [];

  const lastdayoflastM = startday.clone().subtract(1, "day").endOf("day");

  console.log(moment("2021-07-03"));
  console.log(moment("2021-07-03").endOf("day").isSame(lastday));
  console.log(lastday);

  console.log(`startday:::${startday.format("YYYY/MM/DD")}`);
  console.log(`lastday:::${lastday.format("YYYY/MM/DD")}`);

  while (lastdayoflastM.isBefore(lastday)) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => lastdayoflastM.add(1, "day").format("L"))
    );
  }
  console.log(calendar);

  return <div></div>;
};

export default Calendar;
