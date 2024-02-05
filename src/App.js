import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sports from './pages/Sports'
import Navbar from './components/Navbar';
import Activity from './pages/Activity';
import Facilities from './components/Facilities';
import Admissionprocess from './pages/Admissionprocess';
import EnquiryForm from './components/EnquiryForm';
import NotFound from './pages/NotFound';
import Chairman from './components/Chairman';
import Principal from './components/Principal';
import AboutUs from './pages/AboutUs';
import NewsCard from './components/NewsCard';
import GotoTopButton from './components/GotoTopButton';
import Footer from './components/Footer';
import Admissionpolicy from './pages/Admissionpolicy';
import Gallery from './pages/Gallery';
import Achievements from './pages/Achievements';
import Annualevents from './pages/Annualevents';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/activity' element={<Activity />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/admissionprocess' element={<Admissionprocess />} />
        <Route path='/admissionpolicy' element={<Admissionpolicy />} />
        <Route path='/enquiry' element={<EnquiryForm />} />
        <Route path='/annualevents' element={<Annualevents />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/chairman' element={<Chairman />} />
        <Route path='/principal' element={<Principal />} />
        <Route path='/news' element={<NewsCard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <GotoTopButton />
      <Footer />
    </>
  );
}

export default App;
