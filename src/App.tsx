import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <ReactLenis root>
      <Router>
        <div className="relative min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-gold/30 selection:text-gold">
          <Navbar />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ReactLenis>
  );
}

export default App;
