import { useState } from 'react'
import './WeaponsPanel.css'
import WeaponSlot from './WeaponSlot'

const WEAPON_SLOTS = [
  { id: 'primary', label: 'Primary Weapon' },
  { id: 'secondary', label: 'Secondary Weapon' },
  { id: 'sidearm', label: 'Sidearm' }
]

function WeaponsPanel() {
  const [weapons, setWeapons] = useState({
    primary: null,
    secondary: null,
    sidearm: null
  })

  const handleWeaponChange = (slotId, weaponData) => {
    setWeapons(prev => ({
      ...prev,
      [slotId]: weaponData
    }))
  }

  return (
    <div className="weapons-panel">
      <h2 className="panel-title">Weapons</h2>
      <div className="weapons-grid">
        {WEAPON_SLOTS.map(slot => (
          <WeaponSlot
            key={slot.id}
            slotId={slot.id}
            label={slot.label}
            weapon={weapons[slot.id]}
            onChange={handleWeaponChange}
          />
        ))}
      </div>
    </div>
  )
}

export default WeaponsPanel
