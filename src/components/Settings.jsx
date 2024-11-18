import Slider from "rc-slider";
import "../slider.css";

export function Settings() {
  return (
    <div style={{ textAlign: "left" }}>
      <label>Work Minutes:</label>
      <Slider
        className="slider"
        thumbClassName="thumb"
        trackClassName="track"
        value={45}
        min={1}
        max={120}
      />
      <label>Break Minutes:</label>
    </div>
  );
}
