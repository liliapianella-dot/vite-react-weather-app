import React from "react";

export default function DateSentence(props) {
  let currentDate = props.time.currentDate;
  let day = currentDate.getDay();
  let hour = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  day = days[day];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hour}:{minutes}
    </div>
  );
}
