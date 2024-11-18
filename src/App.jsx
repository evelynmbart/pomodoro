import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      <BrowserRouter>
        <SettingsContext.Provider value={contextValue}>
          <Routes>
            <Route exact path="/" element={<Timer />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </SettingsContext.Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
