import About from './components/About';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>About</a>
      </nav>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
     </Routes>
    </div>
  )
}

export default App;
