import { Slider } from "@mui/material";
import { useContext } from "react";
import { SettingsContext } from "../App";
import "../slider.css";

export function Settings({}) {
  const { workMinutes, breakMinutes } = useContext(SettingsContext);
  return (
    <div style={{ textAlign: "left" }}>
      <label>Work Time: {workMinutes}:00 mins</label>
      <Slider
        className="slider1"
        color="orange"
        defaultValue={30}
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
        aria-label="Working Minutes Slider"
        step={5}
        marks
        min={5}
        max={30}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
