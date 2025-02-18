
import './App.css';
import './css/stlylse.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/abote';
import ProjectsPage from './pages/Projects';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:category/:subcategory" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutMe />} />        
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
