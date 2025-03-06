import Timer from "./components/Timer/Timer.jsx";
import { Settings, X } from "lucide-react";

const initialSettings = {
  time: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
};

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen relative">
        <button
          className="btn btn-link absolute top-0 right-0"
          onClick={() => document.getElementById("settings_modal").showModal()}
        >
          <Settings />
        </button>
        <dialog id="settings_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <X />
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click on X button to close</p>
          </div>
        </dialog>
        <Timer initialSettings={initialSettings} />
      </div>
    </>
  );
}

export default App;
