import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);

      if (isWorkTime) {
        setIsWorkTime(false);
        setTime(300); // 5 minutes break
      } else {
        setIsFinished(true); // Set as finished
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, time, isWorkTime]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsWorkTime(true);
    setIsFinished(false); // Reset finished status
    setTime(1500); // Reset to 25 minutes work
  };

  return (
    <div>
      {isFinished ? (
        <h1>Timer Finished</h1>
      ) : (
        <div>
          <h1>
            {isWorkTime ? "Work Timer:" : "Break Timer:"}{" "}
            {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, "0")}
          </h1>
          <button onClick={handleStart}>Start</button>
          <button onClick={handlePause}>Pause</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default Timer;
