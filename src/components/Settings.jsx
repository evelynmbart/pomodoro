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
        borderRadius: "25px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        margin: "50px auto",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <label style={{ fontFamily: "monospace", fontSize: "2.2rem" }}>
        Work Time: {workMinutes}:00 mins
      </label>
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
      <label style={{ fontFamily: "monospace", fontSize: "2.2rem" }}>
        Break Time: {breakMinutes}:00 mins
      </label>
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
