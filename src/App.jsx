import './App.css'
import Header from './components/Header'
import SpecializationPanel from './components/SpecializationPanel'
import SHDWatchPanel from './components/SHDWatchPanel'
import ControlsPanel from './components/ControlsPanel'
import WeaponsPanel from './components/WeaponsPanel'
import GearPanel from './components/GearPanel'
import SkillsPanel from './components/SkillsPanel'
import StatsPanel from './components/StatsPanel'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <div className="top-section">
          <SpecializationPanel />
          <SHDWatchPanel />
          <ControlsPanel />
        </div>
        <div className="content-layout">
          <div className="left-column">
            <WeaponsPanel />
            <GearPanel />
            <SkillsPanel />
          </div>
          <div className="right-column">
            <StatsPanel />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
