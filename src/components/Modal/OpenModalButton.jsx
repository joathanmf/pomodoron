import { Settings } from "lucide-react";

function OpenModalButton() {
  return (
    <button
      className="btn btn-link absolute top-0 right-0"
      onClick={() => document.getElementById("settings_modal").showModal()}
    >
      <Settings />
    </button>
  );
}

export default OpenModalButton;
