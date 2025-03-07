const initialSettings = {
  theme: "lofi",
  time: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
};

export function saveSettings(settings) {
  localStorage.setItem("pomodoroSettings", JSON.stringify(settings));
}

export function loadSettings() {
  const savedSettings = localStorage.getItem("pomodoroSettings");
  return savedSettings ? JSON.parse(savedSettings) : initialSettings;
}
