import Home from './components/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sports from './components/Sports'
import Navbar from './components/Navbar';
import Activity from './components/Activity';
import Facilities from './components/Facilities';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/facilities' element={<Facilities />} />
      </Routes>
    </>
  );
}

export default App;
