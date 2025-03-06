import {useEffect, useState} from 'react';
import {Play, Pause, RotateCcw} from 'lucide-react'

function Timer({initialSettings}) {
  const [time, setTime] = useState(initialSettings.time.pomodoro * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (isActive && time > 0) {
      timerInterval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(timerInterval);
      setIsActive(false);
    }

    return () => clearInterval(timerInterval);
  }, [isActive, time]);

  function startTimer() {
    setIsActive(true);
  }

  function pauseTimer() {
    setIsActive(false);
  }

  function resetTimer() {
    setIsActive(false);
    setTime(initialSettings.time.pomodoro * 60);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  return (
    <div className='card w-128 bg-base-300 card-xl shadow'>
      <div className='card-body space-y-10'>
        <h1 className='text-center text-3xl font-medium'>Pomodoro</h1>
        <h2 className='text-center text-5xl font-bold'>{formatTime(time)}</h2>
        <div className='card-actions justify-center'>
          <button className='btn btn-secondary' onClick={startTimer} disabled={isActive}>
            <Play/>
            Iniciar
          </button>
          <button className='btn btn-error' onClick={pauseTimer} disabled={!isActive}>
            <Pause/>
            Pausar
          </button>
          <button className='btn btn-primary' onClick={resetTimer}>
            <RotateCcw/>
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
