import { useState } from 'react'
import './GearPanel.css'
import GearSlot from './GearSlot'

const GEAR_SLOTS = [
  { id: 'mask', label: 'Mask' },
  { id: 'backpack', label: 'Backpack' },
  { id: 'chest', label: 'Chest' },
  { id: 'gloves', label: 'Gloves' },
  { id: 'holster', label: 'Holster' },
  { id: 'kneepads', label: 'Kneepads' }
]

function GearPanel() {
  const [gear, setGear] = useState({
    mask: null,
    backpack: null,
    chest: null,
    gloves: null,
    holster: null,
    kneepads: null
  })

  const handleGearChange = (slotId, gearData) => {
    setGear(prev => ({
      ...prev,
      [slotId]: gearData
    }))
  }

  return (
    <div className="gear-panel">
      <h2 className="panel-title">Gear</h2>
      <div className="gear-grid">
        {GEAR_SLOTS.map(slot => (
          <GearSlot
            key={slot.id}
            slotId={slot.id}
            label={slot.label}
            gear={gear[slot.id]}
            onChange={handleGearChange}
          />
        ))}
      </div>
    </div>
  )
}

export default GearPanel
