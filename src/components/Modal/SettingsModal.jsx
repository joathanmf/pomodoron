import { X } from "lucide-react";
import FieldsetThemes from "../Theme/FieldsetThemes.jsx";

function SettingsModal({ currentTheme, setCurrentTheme }) {
  return (
    <dialog id="settings_modal" className="modal">
      <div className="modal-box space-y-4">
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
      </div>
    </dialog>
  );
}

export default SettingsModal;
