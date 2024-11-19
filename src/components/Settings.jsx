import { Slider } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SettingsContext } from "../App";
import "../slider.css";
import { BackButton } from "./Buttons/BackButton";

export function Settings({}) {
  const { workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes } =
    useContext(SettingsContext);
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: "seagreen",
        padding: "50px",
        width: "500px",
        color: "white",
      }}
    >
      <label>Work Time: {workMinutes}:00 mins</label>
      <Slider
        className="slider1"
        color="orange"
        value={workMinutes}
        onChange={(e) => setWorkMinutes(e.target.value)}
        aria-label="Working Minutes Slider"
        step={5}
        marks
        min={5}
        max={60}
        valueLabelDisplay="auto"
      />
      <label>Break Time: {breakMinutes}:00 mins</label>
      <Slider
        className="slider2"
        color="teal"
        value={breakMinutes}
        onChange={(e) => setBreakMinutes(e.target.value)}
        aria-label="Working Minutes Slider"
        step={5}
        marks
        min={5}
        max={30}
        valueLabelDisplay="auto"
      />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link id="link" to="/">
          <BackButton />
        </Link>
      </div>
    </div>
  );
}
