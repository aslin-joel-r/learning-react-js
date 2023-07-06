import About from './components/About';
import Home from './components/Home';
import {Routes, Route,Link} from 'react-router-dom';

function App() {

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
     </Routes>
    </div>
  )
}

export default App;
