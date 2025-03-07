import { createContext, useContext, useState } from "react";
import * as storage from "../utils/settings.js";

const SettingsContext = createContext();

export function useSettings() {
  return useContext(SettingsContext);
}

export function SettingsProvider({ children }) {
  const savedSettings = storage.loadSettings();
  const [settings, setSettings] = useState(savedSettings);

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    storage.saveSettings(newSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
