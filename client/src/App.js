import './App.css';
import MyButton from './MyButton.js';
import MyInput from './MyInput.js';

function App() {
  const a=true;
  let content;
  
  const names=[
    {name:'Aslin R',role:'Backend Developer'},
    {name:'Roshan lal',role :'Backend Developer'},
    {name:'Joevin Stany',role:'Frontend Developer'},
  ]
  
  const everyone = names.map(info=>{
    return <li>{info.name}</li>;
  })
  
  
  return (
    
   
    <div>
    
      <ul>{everyone}</ul>
    
    </div>
  );
}

export default App;
