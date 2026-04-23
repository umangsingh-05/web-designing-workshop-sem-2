import React from 'react'

const Greetings = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.course}</p>
      <p>{props.marks}</p>
    </div>
  )
}

export default Greetings
