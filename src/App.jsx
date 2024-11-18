import { createContext, useState } from "react";
import "./App.css";
import { Settings } from "./components/Settings";
import { Timer } from "./components/Timer";

export const SettingsContext = createContext();

function App() {
  const [workMinutes, setWorkMinutes] = useState(30);
  const [breakMinutes, setBreakMinutes] = useState(10);

  const contextValue = {
    workMinutes,
    breakMinutes,
    setWorkMinutes,
    setBreakMinutes,
  };

  return (
    <main>
      <SettingsContext.Provider value={contextValue}>
        <Settings />
        <Timer />
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
