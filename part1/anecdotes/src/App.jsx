import { useState } from 'react'


const Button = (props) => {
  return(
    <>
    <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const Vote = (props) => {
  return(
    <>
    <br/>
    <a>has {props.votes} votes</a><br/>
    <Button onClick = {props.onVote} text = {props.text}/>
    </>
  )
}

const MostVotes = (props) => {
  return(
    <div>
      {props.anecdotes}<br/>
      has {props.votes} votes
    </div>
  )
}

const App = () => {

const handleAnecdotes = () => {
  setSelected(Math.floor(Math.random() * anecdotes.length))
}

const handleVotes = (props) => {
  const copyVotes = [...votes]
  copyVotes[selected] +=1
  setVotes(copyVotes)
}

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const maxValue = Math.max(...votes)
  const indexOfMaxValue = votes.indexOf(maxValue)
  

  return (
    <div>
      <h2>Anecdotes of the Day</h2>
      {anecdotes[selected]}
      <Vote onVote = {handleVotes} votes = {votes[selected]} text = "vote"/>
      <Button onClick = {handleAnecdotes} text = "next anecdote"/>
      <h2>Anecdotes with most votes</h2>
      <MostVotes anecdotes = {anecdotes[indexOfMaxValue]} votes = {votes[indexOfMaxValue]} />
    </div>
  )
}

export default App