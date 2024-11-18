import { createContext, useState } from "react";
import "./App.css";
import { Settings } from "./components/Settings";

export const SettingsContext = createContext();

function App() {
  const [workMinutes, setWorkMinutes] = useState(30);
  const [breakMinutes, setBreakMinutes] = useState(10);

  const contextValue = {
    workMinutes,
    breakMinutes,
  };

  return (
    <main>
      <SettingsContext.Provider value={contextValue}>
        <Settings />
        {/* <Timer /> */}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
