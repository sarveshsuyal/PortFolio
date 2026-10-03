import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Dashboard/Header'
import Footer from './Dashboard/Footer'
import About from './Dashboard/About'
import Skills from './Dashboard/Skills'
import Projects from './Dashboard/Projects'
import Dsa from './Dashboard/Dsa'
import Achivement from './Dashboard/Achivement'

// Helper component to automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: '#0b0f19' }}>
        <Header />
        
        {/* Main dynamic container that stretches and never overlaps header/footer */}
        <main style={{ flex: 1, width: '100%', position: 'relative' }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/dsa" element={<Dsa />} />
            <Route path="/achivements" element={<Achivement />} />
            {/* Fallback route */}
            <Route path="*" element={<About />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
