import { useState, useEffect } from "react";
import moment from "moment-timezone";

import "../styles/TimeDisplay.css";

interface TimeDisplayProps {
  timezone: string;
}

const TimeDisplay = ({ timezone }: TimeDisplayProps) => {
  const [time, setTime] = useState(moment.tz(timezone).format("HH:mm:ss"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment.tz(timezone).format("HH:mm:ss"));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [timezone]);

  return (
    <div className="timedisplay">
      <div className="time">{time}</div>
    </div>
  );
};

export default TimeDisplay;
