import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Timer from './components/Timer'
import Footer from './components/Footer'

function App() {
  const timerStart = {
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 59,
  }
  const [timer, setTimer] = useState(timerStart);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        const {days, hours, minutes, seconds} = prev

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0){
          return timerStart
        } 

        if (seconds > 0) return {...prev, seconds: seconds - 1}
        if (minutes > 0) return {...prev, minutes: minutes - 1, seconds: 59}
        if (hours > 0) return {...prev, hours: hours - 1, minutes: 59, seconds: 59}
        return {days: days -1, hours: 23, minutes: 59, seconds: 59}
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='font_red main_bg min-h-screen bg-[var(--almost-black-blue)] flex flex-col'>
      <div className='p-4 mb-[30%] md:mb-0 flex flex-col items-center'>
        <h1 className='uppercase text-white text-xl md:text-2xl pt-[20%] md:pt-[10%] tracking-[.25rem] 
        text-center md:mb-10'>
          we're launching soon
        </h1>
        <div className='flex gap-4'>
          <Timer value={timer.days} label={"days"}/>
          <Timer value={timer.hours} label={"hours"}/>
          <Timer value={timer.minutes} label={"minutes"}/>
          <Timer value={timer.seconds} label={"seconds"}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
