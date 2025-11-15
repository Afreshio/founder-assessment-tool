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
import ScaleOSLanding from './pages/ScaleOSLanding'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/scaleos" element={<ScaleOSLanding />} />
        <Route path="/" element={
          <div className="container">
            <Navigation />
            <DougHome />
          </div>
        } />
        <Route path="/quiz" element={
          <div className="container">
            <Navigation />
            <Home />
          </div>
        } />
        <Route path="/antifragility-diagnostic" element={
          <div className="container">
            <Navigation />
            <AntifragilityDiagnostic />
          </div>
        } />
        <Route path="/team-diagnostic" element={
          <div className="container">
            <Navigation />
            <TeamDiagnostic />
          </div>
        } />
        <Route path="/productive-meetings" element={
          <div className="container">
            <Navigation />
            <TeamDiagnostic />
          </div>
        } />
        <Route path="/about" element={
          <div className="container">
            <Navigation />
            <About />
          </div>
        } />
        <Route path="/pain-points" element={
          <div className="container">
            <Navigation />
            <PainPoints />
          </div>
        } />
        <Route path="/contact" element={
          <div className="container">
            <Navigation />
            <Contact />
          </div>
        } />
        <Route path="/articles" element={
          <div className="container">
            <Navigation />
            <Articles />
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App

