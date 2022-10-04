import React, { useState } from "react";
interface iTimer {
  seconds: number,
  minutes: number
}
interface iEv {
  duration: iTimer,
  intesity: number
}
const Counter = () => {
  const [evFlag, setEvFlag] = useState(false)
  const [timer, setTimer] = useState<iTimer>({ seconds: 0, minutes: 0 })
  const [intervalId, setIntervalId] = useState<number>()
  const [evs, setEvs] = useState<iEv[]>([])

  const startTimer = () => {
    const timeout = 1000
    setIntervalId(setInterval(() => {
      setTimer({ seconds: timer.seconds++ % 60, minutes: Number.parseInt(String(timer.seconds / 60)) });
    }, timeout))
  }

  const toggleEv = () => {
    if (!evFlag) {
      setEvFlag(true)
      startTimer()
    } else {
      setEvFlag(false)
      const newEv: iEv = { duration: timer, intesity: 0 }
      const newPrevState: iEv[] = [...evs, newEv]
      setEvs(newPrevState)
      clearInterval(intervalId)
      setTimer({ minutes: 0, seconds: 0 })
    }
  }

  const normalizeNumber = (number: number) => {
    return String(number).padStart(2, "0")
  }

  return (
    <div>
      <h1>EV's:</h1>
      {evs.map((ev, index) => {
        return (
          <div>
            <p>Ev #{index + 1}</p>
            <p>Duração: {normalizeNumber(ev.duration.minutes)}:{normalizeNumber(ev.duration.seconds)}</p>
            <p>Intensidade: {ev.intesity}</p>
          </div>
        )
      }
      )}
      <p>Contador: {`${normalizeNumber(timer.minutes)}: ${normalizeNumber(timer.seconds)}`} </p>
      <button onClick={toggleEv}>{evFlag ? 'END' : "START"}</button>
    </div>
  );
};

export default Counter;
