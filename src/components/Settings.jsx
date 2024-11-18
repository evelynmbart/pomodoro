import { Slider } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SettingsContext } from "../App";
import "../slider.css";
import { BackButton } from "./BackButton";

export function Settings({}) {
  const { workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes } =
    useContext(SettingsContext);
  return (
    <div style={{ textAlign: "left" }}>
      <label>Work Time: {workMinutes}:00 mins</label>
      <Slider
        className="slider1"
        color="orange"
        defaultValue={30}
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
        defaultValue={10}
        onChange={(e) => setBreakMinutes(e.target.value)}
        aria-label="Working Minutes Slider"
        step={5}
        marks
        min={5}
        max={30}
        valueLabelDisplay="auto"
      />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/">
          <BackButton />
        </Link>
      </div>
    </div>
  );
}
