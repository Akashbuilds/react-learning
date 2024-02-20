import { useState } from 'react'
import Card from './components/Card'

import './App.css'

function App() {
  // const [count, setCount] = useState(0);

  let newArr = [1,2,3,4,5]

  return (
    <>
   <h1 className='text 3-xl  bg-lime-500 rounded-md'>Vite powered by tailwind</h1>
   <Card username = "Akash"  post='Staff Engineer' myArr={newArr}/>
   <Card username = "Ritam"/>
   <Card username  = "Samit"/>
      
    </>
  )
}

export default App
