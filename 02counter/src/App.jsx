import { useState } from 'react'

import './App.css'

function App() {


  const [counter, setCounter] = useState(10);
 // let counter = 10; -> prints your value out on the console .But not on the screen, because react is a ui library , to do that we need to manage the state

  const addCount = () =>{
    setCounter(counter+1);
  };

  const subCount = () =>{
    setCounter(counter - 1);

  };

  const resetCount = ()=> {
    setCounter(counter - counter);
  };

  return (
    <>
      <h1>React course for practice {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addCount}>Add value</button> { " "}
      <button
      onClick={subCount}>Remove value</button> { " " }
      <button
      onClick={resetCount}>Reset</button>
      <p>footer: {counter}</p>
      
    </>
  )
}

export default App
