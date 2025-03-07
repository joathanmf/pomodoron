import { useEffect, useState } from "react";
import { loadSettings, saveSettings } from "./utils/settings.js";
import Timer from "./components/Timer/Timer.jsx";
import SettingsModal from "./components/Modal/SettingsModal.jsx";
import OpenModalButton from "./components/Modal/OpenModalButton.jsx";

function App() {
  const savedSettings = loadSettings();
  const [currentTheme, setCurrentTheme] = useState(savedSettings.theme);

  useEffect(() => {
    savedSettings.theme = currentTheme;
    saveSettings(savedSettings);
  }, [currentTheme, savedSettings]);

  return (
    <div>
      <div className="flex justify-center items-center h-screen relative">
        <OpenModalButton />
        <SettingsModal
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
        <Timer />
      </div>
    </div>
  );
}

export default App;
