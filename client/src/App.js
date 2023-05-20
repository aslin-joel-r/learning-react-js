import './App.css';
import MyButton from './MyButton.js';
import MyInput from './MyInput.js';

function App() {
  const a=true;
  let content;
  
  const names=[
    {name:'Aslin R',role:'Backend Developer'},
    {name:'Roshan Lal ',role :'Backend Developer'},
    {name:'Joevin Stany ',role:'Frontend Developer'},
    {name:'Sherin S',role:'Frontend Developer'},
    {name:'Dhusny Raj S',role:'Frontend Developer'}
  ]
  
  const everyone = names.map(info=>{
    return <div>
      {/*
      <li style={{color: info.role=='Backend Developer' ?'red':'green' }}>{info.name}</li>
      <li>{info.role}</li>
  <br/> */}
      <h5 className='App'>Hello world</h5>
      
    </div>
    ;
  })
  
  
  return (
    
   
    <div>
    
      <ul>{everyone}</ul>
      <MyButton/>
    </div>
  );
}

export default App;
