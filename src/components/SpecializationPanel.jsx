import { useState } from 'react'
import './SpecializationPanel.css'

const SPECIALIZATIONS = [
  'None',
  'Survivalist',
  'Demolitionist', 
  'Sharpshooter',
  'Gunner',
  'Technician',
  'Firewall'
]

function SpecializationPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [specialization, setSpecialization] = useState('None')

  const handleSpecializationChange = (spec) => {
    setSpecialization(spec)
    setIsOpen(false)
  }

  return (
    <>
      <button className="specialization-trigger" onClick={() => setIsOpen(true)}>
        <span className="trigger-icon">🎯</span>
        <span className="trigger-text">Specialization</span>
        <span className="trigger-value">{specialization}</span>
      </button>

      {isOpen && (
        <div className="specialization-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="specialization-modal" onClick={(e) => e.stopPropagation()}>
            <div className="specialization-header">
              <h2 className="panel-title">Select Specialization</h2>
              <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            </div>
            
            <div className="specialization-grid">
              {SPECIALIZATIONS.map(spec => (
                <button
                  key={spec}
                  className={`specialization-option ${specialization === spec ? 'active' : ''}`}
                  onClick={() => handleSpecializationChange(spec)}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SpecializationPanel
