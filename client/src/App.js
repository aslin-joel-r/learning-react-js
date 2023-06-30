import './App.css';
import First from './components/First';
import Second from './components/Second';

function App() {

  return (
    <div>
      <First  name='Aslin' age='20' content={<Second title='Lets do it'/>}/>
    
    </div>
  )
 
}

export default App;
