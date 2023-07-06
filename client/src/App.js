import About from './components/About';
import Home from './components/Home';
import {Routes, Route,Link} from 'react-router-dom';
import Contact from './components/Contact';

function App() {

  return (
    <div>
      <nav>
        <Link className='nav' to='/'>Home</Link>
        <Link className='nav' to='/about'>About</Link>
        <Link className='nav' to='/contact'>Contact</Link>
      </nav>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />}/>
     </Routes>
    </div>
  )
}

export default App;
