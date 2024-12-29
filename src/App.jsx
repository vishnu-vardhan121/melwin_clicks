
import './App.css';
import './css/stlylse.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<h1>About me</h1>} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
