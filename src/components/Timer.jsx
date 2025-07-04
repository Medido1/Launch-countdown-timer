function Timer({value, label}) {
  return (
    <div className='pt-[20%] flex flex-col items-center relative'>
      <div className='bg-[var(--dark-desaturated-blue)] h-[34px] w-[70px] rounded-md top-card'></div>
      <div className='bg-[var(--dark-desaturated-blue2)] h-[34px] w-[70px] rounded-md'></div>
      <div className='bg-[var(--dark-desaturated-blue2)] h-1 w-[60px]'></div>
      <p className='text-[var(--grayish-blue)] text-[8px] uppercase tracking-[.2rem] mt-2'>{label}</p>
      <p className='text-[var(--soft-red)] text-4xl absolute top-1/2'>{value}</p>
    </div>
  )
}

export default Timer;