import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './assets/Navbar';

export default function App() {
  const [count, setCount] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setTimeout(() => {
        if (count >= 59) {
          setCount(0);
          setMinutes((prev) => prev + 1);
        } else {
          setCount((prev) => prev + 1);
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isRunning, count]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setCount(0);
    setMinutes(0);
    setIsRunning(false);
  };

  return (<>
    <Navbar />
    <div className="container">
      <div className="timer">
        <h1>
          {String(minutes).padStart(2, '0')}:{String(count).padStart(2, '0')} sec
        </h1>
        <div className="btn-grp">
          <button onClick={toggleTimer}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </div>
  </>
  );
}
