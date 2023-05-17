import './App.css';
import MyButton from './MyButton.js';
import MyInput from './MyInput.js';

function App() {
  const a=10;
  let content;
    if (a==10){
        content=<MyInput />
    }
    else{
      content=<MyButton />
    }
  return (
    
    <div className="App">
      {content}
    </div>
  );
}

export default App;
