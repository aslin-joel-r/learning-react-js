import './App.css';
import MyButton from './MyButton.js';
import MyInput from './MyInput.js';

function App() {
  const a=true;
  let content;
    
  return (
    
    <div className="App">
      {a?
        <MyInput />:
      <MyButton />
    }
    </div>
  );
}

export default App;
