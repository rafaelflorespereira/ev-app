import React, { useState } from "react";
const iTimer = {
  seconds: 0,
  minutes: 0
}
const Counter = () => {
  const [evFlag, setEvFlag] = useState(false)
  const [timer, setTimer] = useState(iTimer)
  const [intervalId, setIntervalId] = useState()
  const [evs, setEvs] = useState([])

  const startTimer = () => {
    const timeout = 1000
    setIntervalId(setInterval(() => {
      setTimer({ seconds: timer.seconds++ % 60, minutes: Number.parseInt(timer.seconds / 60) })
    }, timeout))
  }

  const toggleEv = () => {
    if (!evFlag) {
      setEvFlag(true)
      startTimer()
    } else {
      setEvFlag(false)
      let prevEvs = [...evs, { duration: timer, intensity: 0 }]
      setEvs({ duration: timer, intensity: 0 })
      clearInterval(intervalId)
      setTimer({ minutes: 0, seconds: 0 })
    }
  }

  return (
    <div>
      <h1>EV's:</h1>
      {evs.map(ev =>
        <p>{ev.duration}</p>
      )}
      <p>Contador: {`${timer.minutes}: ${timer.seconds}`} </p>
      <button onClick={toggleEv}>{evFlag ? 'END' : "START"}</button>
    </div>
  );
};

export default Counter;
