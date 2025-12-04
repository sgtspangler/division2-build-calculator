import { useState } from 'react'
import './SkillsPanel.css'

function SkillsPanel() {
  const [skills, setSkills] = useState({
    skill1: null,
    skill2: null
  })

  const handleSkillChange = (slotId, skillData) => {
    setSkills(prev => ({
      ...prev,
      [slotId]: skillData
    }))
  }

  return (
    <div className="skills-panel">
      <h2 className="panel-title">Skills</h2>
      <div className="skills-slots">
          <div className="skill-slot">
            <div className="skill-slot-header">
              <span className="skill-slot-label">Skill 1</span>
            </div>
            <div className="skill-slot-content">
              {skills.skill1 ? (
                <div className="skill-item">
                  <div className="skill-item-name">{skills.skill1.name}</div>
                  <div className="skill-item-variant">{skills.skill1.variant}</div>
                </div>
              ) : (
                <div className="skill-empty">
                  <span className="skill-empty-icon">+</span>
                  <span className="skill-empty-text">Empty Slot</span>
                </div>
              )}
            </div>
          </div>

          <div className="skill-slot">
            <div className="skill-slot-header">
              <span className="skill-slot-label">Skill 2</span>
            </div>
            <div className="skill-slot-content">
              {skills.skill2 ? (
                <div className="skill-item">
                  <div className="skill-item-name">{skills.skill2.name}</div>
                  <div className="skill-item-variant">{skills.skill2.variant}</div>
                </div>
              ) : (
                <div className="skill-empty">
                  <span className="skill-empty-icon">+</span>
                  <span className="skill-empty-text">Empty Slot</span>
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default SkillsPanel
