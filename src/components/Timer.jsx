import { motion } from "motion/react"

function Timer({value, label}) {
  const animation = {
    initial: {scale: 0},
    animate: {scale: 1},
    transition: { duration: 0.6, ease: "easeOut" },
    exit: {scale: 0, transition: { duration: 0.3, ease: "easeInOut" }},
  }
  return (
    <div className='pt-[20%] md:pt-[10%] flex flex-col items-center relative
      h-[160px] md:h-[260px] w-[75px] md:w-[150px]'>
      <div className='bg-[var(--dark-desaturated-blue)] h-full w-full rounded-md'></div>
      <div className='bg-[var(--dark-desaturated-blue2)] h-full w-full rounded-md'></div>
      <p className='text-[var(--grayish-blue)] text-[8px] uppercase tracking-[.2rem] mt-2'>{label}</p>
      <motion.p
        className='text-[var(--soft-red)] text-4xl md:text-8xl absolute top-1/2 md:top-[40%]'
        key={value}
        {...animation}
      >
        {value}
      </motion.p>
    </div>
  )
}

export default Timer;