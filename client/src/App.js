import Weekends from './components/Weekend';
import Workdays from './components/Workdays';

function App() {

  var day=new Date().getDay();
  day = 9
  const msg=day>6 ? <Weekends/> : <Workdays/>
  
  return (
    <div>
     {msg}
    </div>
  )
}

export default App;
