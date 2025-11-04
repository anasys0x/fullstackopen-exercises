import { useState } from 'react'


const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Feedback = (props) => {
  return(
    <>
    <h2>give feedback</h2>
      <Button onClick = {props.onGood} text = {"good"}/>
      <Button onClick = {props.onNeutral} text = {"neutral"}/>
      <Button onClick = {props.onBad} text = {"bad"}/>
      </>
    )
}


const StatisticLine = (props) => {
  return(
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>

  )
}

const Statistics = (props) => {

  if(props.checkStates) {
    return(
      
      <div>
        <h2>statistics</h2>
        No feedback given
      </div>
    );
  }
  return(
  <div>
    <h2>statistics</h2>
    <table>
    <tbody>
      <StatisticLine text = {"good"} value = {props.goodValue}/>
      <StatisticLine text = {"neutral"} value = {props.neutValue}/>
      <StatisticLine text = {"bad"} value = {props.badValue}/>
      <StatisticLine text = {"all"} value = {props.total}/>
      <StatisticLine text = {"average"} value = {props.avg}/>
      <StatisticLine text = {"positive"} value = {`${props.pos} %`}/>
  </tbody>
</table>
</div>
  )
}


const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => setGood(good + 1)
  const setToNeutral = () => setNeutral(neutral + 1)
  const SetToBad = () => setBad(bad + 1)

  const conditionCheck = good === 0 && neutral === 0 && bad === 0;



  return (
    <div>
      <Feedback onGood = {setToGood} onNeutral = {setToNeutral} onBad = {SetToBad}/>
      <Statistics goodValue = {good} neutValue = {neutral} badValue = {bad} total = {good + neutral + bad} 
      avg = {(good - bad) / (good + neutral + bad)} pos = {good * 100 / (good + neutral + bad)} checkStates = {conditionCheck}/>
    </div>
  )
}

export default App