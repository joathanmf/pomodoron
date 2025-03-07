import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import * as storage from "../../utils/settings.js";

function Timer() {
  console.log("Renderizou...");

  const Step = {
    pomodoro: "Pomodoro",
    shortBreak: "Parada Curta",
    longBreak: "Parada Longa",
  };

  const pomodoroSettings = useMemo(() => storage.loadSettings(), []);
  const stepOrder = useMemo(
    () => ["pomodoro", "shortBreak", "pomodoro", "longBreak"],
    [],
  );

  const [time, setTime] = useState(pomodoroSettings.time.pomodoro * 60);
  const [isActive, setIsActive] = useState(false);
  const [currentStep, setCurrentStep] = useState("pomodoro");
  const intervalRef = useRef(null);
  const stepIndexRef = useRef(0);

  const nextStep = useCallback(() => {
    stepIndexRef.current = (stepIndexRef.current + 1) % stepOrder.length;
    const next = stepOrder[stepIndexRef.current];

    setCurrentStep(next);
    setTime(pomodoroSettings.time[next] * 60);
  }, [pomodoroSettings.time, stepOrder]);

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      nextStep();
      setIsActive(false);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, time, nextStep]);

  const changeStep = useCallback(
    (step) => {
      stepIndexRef.current = stepOrder.indexOf(step);

      setIsActive(false);
      setCurrentStep(step);
      setTime(pomodoroSettings.time[step] * 60);
    },
    [pomodoroSettings.time, stepOrder],
  );

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setTime(pomodoroSettings.time[currentStep] * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col">
      <div className="text-center space-x-2">
        {Object.keys(Step).map((key) => (
          <button
            key={key}
            className={`p-2 rounded-t-lg cursor-pointer hover:bg-base-300 ${
              currentStep === key ? "bg-base-300" : "bg-base-200"
            }`}
            onClick={() => changeStep(key)}
          >
            {Step[key]}
          </button>
        ))}
      </div>
      <div className="card w-128 bg-base-300 card-xl">
        <div className="card-body space-y-10">
          <h1 className="text-center text-3xl font-medium">
            {Step[currentStep]}
          </h1>
          <h2 className="text-center text-5xl font-bold">{formatTime(time)}</h2>
          <div className="card-actions justify-center">
            <button
              className="btn btn-success"
              onClick={startTimer}
              disabled={isActive}
            >
              <Play />
              Iniciar
            </button>
            <button
              className="btn btn-error"
              onClick={pauseTimer}
              disabled={!isActive}
            >
              <Pause />
              Pausar
            </button>
            <button
              className="btn btn-primary"
              onClick={resetTimer}
              disabled={
                !(isActive || pomodoroSettings.time[currentStep] * 60 !== time)
              }
            >
              <RotateCcw />
              Reiniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
