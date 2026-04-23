import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greetings from './components/Greetings.jsx'

function App() {

  return (
    <>
    <h1>Student Information</h1>
      <Greetings name = "Rahul Sharma" course = "Course: Computer Science" marks = "Marks: 85"/>
      <Greetings name = "Anita Verma" course = "Course: Information Technology" marks = "Marks: 92"/>
      <Greetings name = "Rohan Gupta" course = "Course: Electronics" marks = "Marks: 78"/>
    </>
  )
}

export default App
