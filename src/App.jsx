import Timer from './components/Timer/Timer.jsx';
import {Settings} from 'lucide-react';

const initialSettings = {
  time: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15
  }
}

function App() {
  return (
    <>
      <div className='flex justify-center items-center h-screen relative'>
        <button className='btn btn-link absolute top-0 right-0'>
          <Settings/>
        </button>
        <Timer initialSettings={initialSettings}/>
      </div>
    </>
  );
}

export default App;
