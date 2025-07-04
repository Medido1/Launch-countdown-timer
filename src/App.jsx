import { useState } from 'react'
import './App.css'
import facebookIcon from "./assets/icon-facebook.svg"
import pinterestIcon from "./assets/icon-pinterest.svg"
import instagramIcon from "./assets/icon-instagram.svg"
import { useEffect } from 'react'
import Timer from './components/Timer'

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
      <div className='p-4 mb-[30%]'>
        <h1 className='uppercase text-white text-xl pt-[20%] tracking-[.25rem] text-center'>
          we're launching soon
        </h1>
        <div className='flex gap-4'>
          <Timer value={timer.days} />
          <Timer value={timer.hours} />
          <Timer value={timer.minutes} />
          <Timer value={timer.seconds} />
        </div>
      </div>
      <div className='footer flex justify-center items-center h-[160px] mt-auto'>
        <div className='flex gap-6 mt-[20%]'>
          <img src={facebookIcon} alt="facebook" />
          <img src={pinterestIcon} alt="pinterest" />
          <img src={instagramIcon} alt="instagram" />
        </div>
      </div>
    </div>
  )
}

export default App
