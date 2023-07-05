import Btn from './components/Btn.js'
import {useState} from 'react'

function App() {

  const[count,setCount]=useState(0);

 function clicked(){
    setCount(count+1)
  }
  return (
    <div>
       
    <h1>You have clicked {count} times</h1>
    <button onClick={clicked}>Click me</button>
    </div>
  )
 
}

export default App;
