import Timer from "./components/Timer/Timer.jsx";
import SettingsModal from "./components/Modal/SettingsModal.jsx";
import OpenModalButton from "./components/Modal/OpenModalButton.jsx";
import { SettingsProvider } from "./contexts/SettingsContext.jsx";

function App() {
  return (
    <SettingsProvider>
      <div className="flex justify-center items-center h-screen relative">
        <OpenModalButton />
        <SettingsModal />
        <Timer />
      </div>
    </SettingsProvider>
  );
}

export default App;
