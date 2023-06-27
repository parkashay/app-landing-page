
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './sections/About';
import DownloadLink from './sections/DownloadLink';
import FAQs from './sections/FAQs';
import Footer from './sections/Footer';
import Landing from './sections/Landing';
import Mobiles from './sections/Mobiles';
import Subscribe from './sections/Subscribe';
import Testimonials from './sections/Testimonials';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Landing />
      <Mobiles />
      <About />
      <Testimonials />
      <FAQs />
      <DownloadLink />
      <Subscribe />
      <Footer />
      <Routes>
        <Route path='admin' element = {<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
