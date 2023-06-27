
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element = {<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
