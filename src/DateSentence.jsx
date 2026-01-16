import React from "react";

export default function DateSentence(props) {
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
  let day = days[props.day];
  let hour = props.hour;
  let minutes = props.minutes;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hour}:{minutes}
    </div>
  );
}
