
import './App.css';
import Download from './components/Download';
import Navbar from './components/Navbar';
import About from './sections/About';
import Landing from './sections/Landing';
import Mobiles from './sections/Mobiles';
import Clients from './sections/Clients'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Mobiles />
      <Download />
      <About />
      <Clients />
    </div>
  );
}

export default App;
