const initialSettings = {
  theme: "lofi",
  time: {
    pomodoro: 0.1,
    shortBreak: 0.1,
    longBreak: 0.1,
  },
};

export function saveSettings(settings) {
  localStorage.setItem("pomodoroSettings", JSON.stringify(settings));
}

export function loadSettings() {
  const savedSettings = localStorage.getItem("pomodoroSettings");
  return savedSettings ? JSON.parse(savedSettings) : initialSettings;
}
