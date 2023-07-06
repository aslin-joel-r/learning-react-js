import Weekends from './components/Weekend';
import Workdays from './components/Workdays';

function App() {

  var day=new Date().getDay();
  day = 1
  const msg=day>6 ? <Weekends/> : <Workdays/>
  
  switch(day){
    
  }
  return (
    <div>
     {day==1 && <h1>Today is Monday</h1>}
    </div>
  )
}

export default App;
