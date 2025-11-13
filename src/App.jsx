import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import DougHome from './pages/DougHome'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Articles from './pages/Articles'
import PainPoints from './pages/PainPoints'
import AntifragilityDiagnostic from './pages/AntifragilityDiagnostic'
import TeamDiagnostic from './pages/TeamDiagnostic'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<DougHome />} />
          <Route path="/quiz" element={<Home />} />
          <Route path="/antifragility-diagnostic" element={<AntifragilityDiagnostic />} />
          <Route path="/team-diagnostic" element={<TeamDiagnostic />} />
          <Route path="/productive-meetings" element={<TeamDiagnostic />} />
          <Route path="/about" element={<About />} />
          <Route path="/pain-points" element={<PainPoints />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

