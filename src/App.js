import Home from './components/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sports from './components/Sports'
import Navbar from './components/Navbar';
import Activity from './components/Activity';
import Facilities from './components/Facilities';
import Admissionprocess from './components/Admissionprocess';
import EnquiryForm from './components/EnquiryForm';
import NotFound from './components/NotFound';
import Chairman from './components/Chairman';
import Principal from './components/Principal';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/admissionprocess' element={<Admissionprocess />} />
        <Route path='/enquiry' element={<EnquiryForm />} />
        <Route path='/chairman' element={<Chairman />} />
        <Route path='/principal' element={<Principal />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
