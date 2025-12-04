import { useState } from 'react'
import './StatsPanel.css'

function StatsPanel() {
  // TODO: These will be calculated from gear, weapons, and SHD Watch later
  const [stats] = useState({
    // Offensive Stats (Red)
    weaponDamage: 0,
    critChance: 0,
    critDamage: 0,
    headshotDamage: 0,
    
    // Defensive Stats (Blue)
    armor: 0,
    health: 0,
    hazardProtection: 0,
    
    // Utility Stats (Yellow)
    skillDamage: 0,
    skillHaste: 0,
    skillRepair: 0,
    skillDuration: 0,
    
    // DPS (calculated)
    primaryDPS: 0
  })

  return (
    <div className="stats-panel">
      <h2 className="panel-title">Build Statistics</h2>
      
      <div className="stats-section offensive">
        <h3 className="section-title">
          <span className="section-icon">🔴</span>
          Offensive
        </h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Weapon Damage</span>
            <span className="stat-value">{stats.weaponDamage}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Critical Hit Chance</span>
            <span className="stat-value">{stats.critChance}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Critical Hit Damage</span>
            <span className="stat-value">{stats.critDamage}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Headshot Damage</span>
            <span className="stat-value">{stats.headshotDamage}%</span>
          </div>
        </div>
      </div>

      <div className="stats-section defensive">
        <h3 className="section-title">
          <span className="section-icon">🔵</span>
          Defensive
        </h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Armor</span>
            <span className="stat-value">{stats.armor.toLocaleString()}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Health</span>
            <span className="stat-value">{stats.health.toLocaleString()}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Hazard Protection</span>
            <span className="stat-value">{stats.hazardProtection}%</span>
          </div>
        </div>
      </div>

      <div className="stats-section utility">
        <h3 className="section-title">
          <span className="section-icon">🟡</span>
          Utility
        </h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">Skill Damage</span>
            <span className="stat-value">{stats.skillDamage}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Skill Haste</span>
            <span className="stat-value">{stats.skillHaste}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Skill Repair</span>
            <span className="stat-value">{stats.skillRepair}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Skill Duration</span>
            <span className="stat-value">{stats.skillDuration}%</span>
          </div>
        </div>
      </div>

      <div className="stats-section dps">
        <h3 className="section-title">
          <span className="section-icon">⚡</span>
          DPS
        </h3>
        <div className="dps-display">
          <span className="dps-label">Primary Weapon DPS</span>
          <span className="dps-value">{stats.primaryDPS.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}

export default StatsPanel
