import { Slider } from "@mui/material";
import "../slider.css";

export function Settings() {
  return (
    <div style={{ textAlign: "left" }}>
      <label>Work Minutes:</label>
      <Slider
        className="slider1"
        defaultValue={30}
        color="orange"
        aria-label="Working Minutes Slider"
        step={5}
        marks
        min={5}
        max={60}
        valueLabelDisplay="auto"
      />
      <label>Break Minutes:</label>
      <Slider
        className="slider2"
        defaultValue={30}
        color="teal"
        aria-label="Working Minutes Slider"
        step={5}
        marks
        min={5}
        max={60}
        valueLabelDisplay="auto"
      />
    </div>
  );
}
