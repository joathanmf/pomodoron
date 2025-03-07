import { X } from "lucide-react";
import FieldsetThemes from "../Theme/FieldsetThemes.jsx";
import Title from "../Title/Title.jsx";

function SettingsModal({ currentTheme, setCurrentTheme }) {
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
          <div className="flex flex-row justify-around">
            <label className="flex flex-col w-34">
              Pomodoro
              <input
                type="number"
                min="1"
                className="p-2 rounded-lg bg-base-200 input input-primary"
              />
            </label>
            <label className="flex flex-col w-34">
              Parada Longa
              <input
                type="number"
                min="1"
                className="p-2 rounded-lg bg-base-200 input input-primary"
              />
            </label>
            <label className="flex flex-col w-34">
              Parada Curta
              <input
                type="number"
                min="1"
                className="p-2 rounded-lg bg-base-200 input input-primary"
              />
            </label>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default SettingsModal;
