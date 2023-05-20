import './App.css';
import MyButton from './components/MyButton.js';
import MyInput from './components/MyInput.js';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);
    function clickedMe(){
        setCount(count+1);
    }

  return (
    <div>
    
      <MyButton count={count} onClick={clickedMe}/>
      
    </div>
  );
}

export default App;
