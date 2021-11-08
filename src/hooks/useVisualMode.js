import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); // initial is an array

  // Create transition functionality
  const transition = (newMode, replace = false) => {
    // If replace is true, set history to replace the current mode
    setMode(newMode)

    if (!replace){
      setHistory(prev => [...prev, newMode])
    }
  }

  // Create back/history functionality
  const back = () => {
    if(history.length > 1) {
      history.pop();
      setMode(history[history.length-1])
    }
  }

  return { mode, transition, back };
}

