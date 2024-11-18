import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { PauseButton } from "./PauseButton";
import { PlayButton } from "./PlayButton";
import { SettingsButton } from "./SettingsButton";

const red = "#f54e4e";
const green = "#4aec8c";

export function Timer() {
  return (
    <div>
      <CircularProgressbar
        value={60}
        text="60%"
        styles={buildStyles({
          textColor: "#fff",
          pathColor: red,
          trailColor: "rgba(255,255,255,.7)",
        })}
      />
      <div style={{ marginTop: "20px" }}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/settings">
          <SettingsButton />
        </Link>
      </div>
    </div>
  );
}
