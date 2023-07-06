import Weekends from './components/Weekend';
import Workdays from './components/Workdays';

function App() {

  var day=new Date().getDay();
  console.log(day)
  
  if(day<=6){
    return <Workdays/>

  }
  return (
    <div>
     <Weekends/>
    </div>
  )
}

export default App;
