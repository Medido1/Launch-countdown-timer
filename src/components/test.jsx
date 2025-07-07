function Test({value, label}) {

  const flipCard = ({animation, value}) => {
    return (
      <div className={`flipCard ${animation}`}>
        <span>{value}</span>
      </div>
    )
  }
  return (
    <div></div>
  )
}

export default Test;