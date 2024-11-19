import { useContext, useEffect, useRef, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { SettingsContext } from "../App";
import { PauseButton } from "./PauseButton";
import { PlayButton } from "./PlayButton";
import { SettingsButton } from "./SettingsButton";
import { TasksButton } from "./TasksButton";

export function Timer() {
  const { workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes } =
    useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); //work/break
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  };

  useEffect(() => {
    const switchMode = () => {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work" ? workMinutes : breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    };

    secondsLeftRef.current = workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 10);
    return () => clearInterval(interval);
  }, [workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes]);

  const totalSeconds = mode === "work" ? workMinutes * 60 : breakMinutes * 60;
  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  //displays the right number of 0

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  // this handles the play and pause functionality in one function
  const handle = () => {
    setIsPaused(!isPaused);
    isPausedRef.current = !isPaused;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "800px",
          width: "800px",
          borderRadius: "100%",
          backgroundColor: "tomato",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgressbar
          value={percentage}
          text={minutes + ":" + seconds}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: mode === "work" ? "seagreen" : "tomato",
            trailColor: "rgba(255,255,255,.7)",
            strokeLinecap: "rounded",
          })}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        {isPaused ? (
          <PlayButton handle={handle} />
        ) : (
          <PauseButton handle={handle} />
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/settings">
          <SettingsButton />
        </Link>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link>
          <TasksButton />
        </Link>
      </div>
    </div>
  );
}
