import { Slider } from "@mui/material";
import "../slider.css";

export function Settings() {
  return (
    <div style={{ textAlign: "left" }}>
      <label>Work Minutes:</label>
      <Slider
        min={45}
        max={120}
        className="slider"
        aria-label="Working Minutes"
        valueLabelDisplay="auto"
      />
      <label>Break Minutes:</label>
      <Slider
        min={45}
        max={120}
        className="slider2"
        aria-label="Working Minutes"
        valueLabelDisplay="auto"
      />
    </div>
  );
}
