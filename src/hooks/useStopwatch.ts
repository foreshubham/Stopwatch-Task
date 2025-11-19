// A custom hook that provides stopwatch functionality.

import { useEffect, useRef, useState } from "react";

export default function useStopwatch() {
  const [time, setTime] = useState<number>(0); 
  const [running, setRunning] = useState<boolean>(false); //determines the steopwatch is active or not

  const intervalRef = useRef<number | null>(null); // to store the interval ID

  useEffect(() => {
    if (running) {
      intervalRef.current = window.setInterval(() => {
        setTime((t) => t + 10);
      }, 10);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]); //Start or stop the tiemr

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => {
    pause();
    setTime(0);
  }; // Control functions start, puase, reset

  return { time, running, start, pause, reset };
}
