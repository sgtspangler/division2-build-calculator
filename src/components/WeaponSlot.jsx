import './WeaponSlot.css'

function WeaponSlot({ slotId, label, weapon, onChange }) {
  return (
    <div className="weapon-slot">
      <div className="weapon-slot-header">
        <span className="weapon-slot-label">{label}</span>
      </div>
      <div className="weapon-slot-content">
        {weapon ? (
          <div className="weapon-item">
            <div className="weapon-item-name">{weapon.name}</div>
            <div className="weapon-item-type">{weapon.type}</div>
            <div className="weapon-item-stats">
              {weapon.damage && (
                <div className="weapon-stat damage">
                  <span className="stat-label">Damage:</span>
                  <span className="stat-value">{weapon.damage}</span>
                </div>
              )}
              {weapon.rpm && (
                <div className="weapon-stat">
                  <span className="stat-label">RPM:</span>
                  <span className="stat-value">{weapon.rpm}</span>
                </div>
              )}
              {weapon.magSize && (
                <div className="weapon-stat">
                  <span className="stat-label">Mag:</span>
                  <span className="stat-value">{weapon.magSize}</span>
                </div>
              )}
              {weapon.talents && weapon.talents.map((talent, idx) => (
                <div key={idx} className="weapon-talent">{talent}</div>
              ))}
            </div>
          </div>
        ) : (
          <div className="weapon-empty">
            <span className="weapon-empty-icon">+</span>
            <span className="weapon-empty-text">Empty Slot</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default WeaponSlot
