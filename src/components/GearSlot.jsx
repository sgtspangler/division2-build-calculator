import './GearSlot.css'

function GearSlot({ slotName, gear }) {
  return (
    <div className="gear-slot">
      <div className="slot-header">
        <span className="slot-label">{slotName}</span>
      </div>
      <div className="gear-slot-content">
        {gear ? (
          <div className="gear-item">
            <div className="gear-item-name">{gear.name}</div>
            <div className="gear-item-brand">{gear.brand}</div>
            <div className="gear-item-stats">
              {gear.coreAttribute && (
                <div className="gear-stat core">{gear.coreAttribute}</div>
              )}
              {gear.attributes && gear.attributes.map((attr, idx) => (
                <div key={idx} className="gear-stat">{attr}</div>
              ))}
              {gear.talent && (
                <div className="gear-talent">{gear.talent}</div>
              )}
            </div>
          </div>
        ) : (
          <div className="gear-empty">
            <span className="gear-empty-icon">+</span>
            <span className="gear-empty-text">Empty Slot</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default GearSlot
