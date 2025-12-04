import { useState } from 'react'
import './SHDWatchPanel.css'

const SHD_STATS = [
  // Offensive (Red) - max 10
  { id: 'weaponDamage', label: 'Weapon Damage', category: 'offensive', maxLevel: 10, bonus: '+1% per level' },
  { id: 'critChance', label: 'Critical Hit Chance', category: 'offensive', maxLevel: 10, bonus: '+1% per level' },
  { id: 'critDamage', label: 'Critical Hit Damage', category: 'offensive', maxLevel: 20, bonus: '+1% per level' },
  { id: 'headshotDamage', label: 'Headshot Damage', category: 'offensive', maxLevel: 20, bonus: '+1% per level' },
  
  // Defensive (Blue) - max 10
  { id: 'armor', label: 'Armor', category: 'defensive', maxLevel: 10, bonus: '+1% per level' },
  { id: 'health', label: 'Health', category: 'defensive', maxLevel: 10, bonus: '+1% per level' },
  { id: 'armorRegen', label: 'Armor Regeneration', category: 'defensive', maxLevel: 10, bonus: '+1% per level' },
  { id: 'hazardProtection', label: 'Hazard Protection', category: 'defensive', maxLevel: 10, bonus: '+1% per level' },
  
  // Utility (Yellow) - max 10
  { id: 'skillDamage', label: 'Skill Damage', category: 'utility', maxLevel: 10, bonus: '+1% per level' },
  { id: 'skillHaste', label: 'Skill Haste', category: 'utility', maxLevel: 10, bonus: '+1% per level' },
  { id: 'skillDuration', label: 'Skill Duration', category: 'utility', maxLevel: 20, bonus: '+1% per level' },
  { id: 'skillHealth', label: 'Skill Health', category: 'utility', maxLevel: 10, bonus: '+1% per level' },
  
  // Handling (White) - max 10
  { id: 'reloadSpeed', label: 'Reload Speed', category: 'handling', maxLevel: 10, bonus: '+1% per level' },
  { id: 'stability', label: 'Stability', category: 'handling', maxLevel: 10, bonus: '+1% per level' },
  { id: 'accuracy', label: 'Accuracy', category: 'handling', maxLevel: 10, bonus: '+1% per level' },
  { id: 'ammoCapacity', label: 'Ammo Capacity', category: 'handling', maxLevel: 20, bonus: '+1% per level' }
]

const MAX_TOTAL_LEVELS = 200

function SHDWatchPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [levels, setLevels] = useState(
    Object.fromEntries(SHD_STATS.map(stat => [stat.id, 0]))
  )

  const totalLevels = Object.values(levels).reduce((sum, level) => sum + level, 0)

  const handleLevelChange = (statId, value) => {
    const numValue = parseInt(value) || 0
    const stat = SHD_STATS.find(s => s.id === statId)
    const clampedValue = Math.max(0, Math.min(numValue, stat.maxLevel))
    
    const newLevels = { ...levels, [statId]: clampedValue }
    const newTotal = Object.values(newLevels).reduce((sum, level) => sum + level, 0)
    
    if (newTotal <= MAX_TOTAL_LEVELS) {
      setLevels(newLevels)
    }
  }

  const setAllMax = () => {
    const maxLevels = Object.fromEntries(
      SHD_STATS.map(stat => [stat.id, stat.maxLevel])
    )
    setLevels(maxLevels)
  }

  const resetAll = () => {
    setLevels(Object.fromEntries(SHD_STATS.map(stat => [stat.id, 0])))
  }

  const getCategoryColor = (category) => {
    switch(category) {
      case 'offensive': return 'red'
      case 'defensive': return 'blue'
      case 'utility': return 'yellow'
      case 'handling': return 'white'
      default: return ''
    }
  }

  return (
    <>
      <button className="shd-watch-trigger" onClick={() => setIsOpen(true)}>
        <span className="trigger-icon">⚙️</span>
        <span className="trigger-text">SHD Watch</span>
        <span className={`trigger-counter ${totalLevels === MAX_TOTAL_LEVELS ? 'max' : ''}`}>
          {totalLevels}/{MAX_TOTAL_LEVELS}
        </span>
      </button>

      {isOpen && (
        <div className="shd-watch-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="shd-watch-modal" onClick={(e) => e.stopPropagation()}>
            <div className="shd-watch-header">
              <h2 className="panel-title">SHD Watch</h2>
              <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            </div>

            <div className="shd-watch-controls">
              <div className="shd-watch-total">
                <span className="total-label">Total:</span>
                <span className={`total-value ${totalLevels === MAX_TOTAL_LEVELS ? 'max' : ''}`}>
                  {totalLevels} / {MAX_TOTAL_LEVELS}
                </span>
              </div>
              <button className="shd-btn" onClick={setAllMax}>Set All Max</button>
              <button className="shd-btn secondary" onClick={resetAll}>Reset All</button>
            </div>
            
            <div className="shd-stats-grid">
              {SHD_STATS.map(stat => (
                <div key={stat.id} className={`shd-stat ${getCategoryColor(stat.category)}`}>
                  <label className="shd-stat-label" title={stat.bonus}>
                    {stat.label}
                  </label>
                  <div className="shd-stat-input-wrapper">
                    <input
                      type="number"
                      min="0"
                      max={stat.maxLevel}
                      value={levels[stat.id]}
                      onChange={(e) => handleLevelChange(stat.id, e.target.value)}
                      className="shd-stat-input"
                    />
                    <span className="shd-stat-max">/ {stat.maxLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SHDWatchPanel
