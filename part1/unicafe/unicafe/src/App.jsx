import { useState } from 'react'


const Button = (props) => {
  return(
    <button onClick={props.clickLogic}>{props.text}</button>
  )
}

const Feedback = () => {
  return(
    <h2>give feedback</h2>
    )
}

const Statistics = () => {
  return(
    <h2>statistics</h2>
  )
}

const Display = (props) => {
  return(
    <div>{props.text} {props.state}</div>
  )
}

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <Feedback/>
      <Button clickLogic = {handleGood} text = {"good"}/>
      <Button clickLogic = {handleNeutral} text = {"neutral"}/>
      <Button clickLogic = {handleBad} text = {"bad"}/>
      <Statistics/>
      <Display text = {"good"} state = {good}/>
      <Display text = {"neutral"} state = {neutral}/>
      <Display text = {"bad"} state = {bad}/>
    </div>
  )
}

export default App