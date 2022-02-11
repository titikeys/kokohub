import React from "react";
import "../component/Timer/timer.css";

const CountDown = ({ hoursMinSecs }) => {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([
    hours,
    minutes,
    seconds,
  ]);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs === 0) {
      <h1>finiah</h1>;
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  const reset = () =>
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div className="countdown">
      <div className="container-hour">
        <p className="hour">{`${hrs.toString().padStart(2, "0")} `}</p>
        <h3>Hrs</h3>
      </div>
      :
      <div className="container-minute">
        <p className="minute">{`${mins.toString().padStart(2, "0")} `}</p>
        <h3>Mins</h3>
      </div>
      :
      <div className="container-second">
        <p className="seconds">{`${secs.toString().padStart(2, "0")}`}</p>
        <h3>Secs</h3>
      </div>
    </div>
  );
};
export default CountDown;
