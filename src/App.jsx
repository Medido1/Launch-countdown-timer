import { useState } from 'react'
import './App.css'
import facebookIcon from "./assets/icon-facebook.svg"
import pinterestIcon from "./assets/icon-pinterest.svg"
import instagramIcon from "./assets/icon-instagram.svg"

function App() {
  const timerStart = {
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 59,
  }
  const [timer, setTimer] = useState(timerStart);

  const upperSquareClass = `bg-[var(--dark-desaturated-blue)] h-[34px] w-[70px] rounded-md`
  const secondSquareClass = `bg-[var(--dark-desaturated-blue2)] h-[34px] w-[70px] rounded-md`
  const seperatorClass = `bg-[var(--dark-desaturated-blue2)] h-1 w-[60px]`
  const titleClass = `text-[var(--grayish-blue)] text-[8px] uppercase tracking-[.2rem] mt-2`
  return (
    <div className='font_red main_bg min-h-screen bg-[var(--almost-black-blue)] flex flex-col'>
      <div className='p-4 mb-[30%]'>
        <h1 className='uppercase text-white text-xl pt-[20%] tracking-[.25rem] text-center'>
          we're launching soon
        </h1>
        <div className='flex gap-4'>
          <div className='pt-[20%] flex flex-col items-center relative'>
            <div className={upperSquareClass}></div>
            <div className={seperatorClass}></div>
            <div className={secondSquareClass}></div>
            <p className={titleClass}>days</p>
            <p className='text-[var(--soft-red)] text-4xl absolute top-1/2'>{timer.days}</p>
          </div>
          <div className='pt-[20%] flex flex-col items-center relative'>
            <div className={upperSquareClass}></div>
            <div className={seperatorClass}></div>
            <div className={secondSquareClass}></div>
            <p className={titleClass}>hours</p>
            <p className='text-[var(--soft-red)] text-4xl absolute top-1/2'>{timer.hours}</p>
          </div>
          <div className='pt-[20%] flex flex-col items-center relative'>
            <div className={upperSquareClass}></div>
            <div className={seperatorClass}></div>
            <div className={secondSquareClass}></div>
            <p className={titleClass}>minutes</p>
            <p className='text-[var(--soft-red)] text-4xl absolute top-1/2'>{timer.minutes}</p>
          </div>
          <div className='pt-[20%] flex flex-col items-center relative'>
            <div className={upperSquareClass}></div>
            <div className={seperatorClass}></div>
            <div className={secondSquareClass}></div>
            <p className={titleClass}>seconds</p>
            <p className='text-[var(--soft-red)] text-4xl absolute top-1/2'>{timer.seconds}</p>
          </div>
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
