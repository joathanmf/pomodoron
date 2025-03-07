import { X } from "lucide-react";
import FieldsetThemes from "../Theme/FieldsetThemes.jsx";
import Title from "../Title/Title.jsx";
import { useEffect, useState } from "react";
import { useSettings } from "../../contexts/SettingsContext.jsx";

function SettingsModal() {
  const { settings, updateSettings } = useSettings();

  const [currentTheme, setCurrentTheme] = useState(settings.theme);
  const [pomodoroTime, setPomodoroTime] = useState(settings.time.pomodoro);
  const [shortBreakTime, setShortBreakTime] = useState(
    settings.time.shortBreak,
  );
  const [longBreakTime, setLongBreakTime] = useState(settings.time.longBreak);

  useEffect(() => {
    const updatedSettings = {
      theme: currentTheme,
      time: {
        pomodoro: pomodoroTime,
        shortBreak: shortBreakTime,
        longBreak: longBreakTime,
      },
    };

    updateSettings(updatedSettings);
  }, [currentTheme, pomodoroTime, shortBreakTime, longBreakTime]);

  return (
    <dialog id="settings_modal" className="modal">
      <div className="modal-box space-y-8 max-w-lg">
        <div className="flex justify-start">
          <h3 className="font-bold text-xl">Configurações</h3>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              <X />
            </button>
          </form>
        </div>
        <FieldsetThemes
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
        />
        <div className="space-y-2">
          <Title>Defina o tempo (minutos)</Title>
          <div className="flex flex-row justify-around items-end text-center">
            <label className="flex flex-col w-19 md:w-34 text-sm md:text-lg">
              Pomodoro
              <input
                className="p-2 rounded-lg bg-base-200 input"
                type="number"
                min="1"
                max="60"
                value={+pomodoroTime}
                onChange={(e) => {
                  setPomodoroTime(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col w-19 md:w-34 text-sm md:text-lg">
              Parada Curta
              <input
                className="p-2 rounded-lg bg-base-200 input"
                type="number"
                min="1"
                max="60"
                value={+shortBreakTime}
                onChange={(e) => {
                  setShortBreakTime(e.target.value);
                }}
              />
            </label>
            <label className="flex flex-col w-19 md:w-34 text-sm md:text-lg">
              Parada Longa
              <input
                className="p-2 rounded-lg bg-base-200 input"
                type="number"
                min="1"
                max="60"
                value={+longBreakTime}
                onChange={(e) => {
                  setLongBreakTime(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default SettingsModal;
