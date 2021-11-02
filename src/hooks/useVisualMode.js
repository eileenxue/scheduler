import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); // initial is an array

  // Create transition functionality
  const transition = (newMode, replace = false) => {

    // If replace is true, set history to replace the current mode
    if (replace){
      setMode(newMode)
      // Test passes, but should use setHistory
      // setHistory(prev => ([...prev, mode]))
    } else {
      setMode(newMode)
      history.push(newMode)
    }
  }

  // Create back/history functionality
  const back = () => {
    if(history.length > 1) {
      history.pop();
      // console.log(history.length)
      setMode(history[history.length-1])
    }
  }

  return { mode, transition, back };
}

