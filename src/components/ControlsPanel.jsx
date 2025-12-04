import './ControlsPanel.css'

function ControlsPanel() {
  const handleSaveAndShare = () => {
    // TODO: Implement save and share functionality
    console.log('Save & Share build')
  }

  const handleScreenshot = () => {
    // TODO: Implement screenshot functionality
    console.log('Take screenshot')
  }

  const handleClearAndNew = () => {
    // TODO: Implement clear and new build functionality
    if (confirm('Are you sure you want to clear this build and start a new one?')) {
      console.log('Clear & New Build')
    }
  }

  const handleReportIssue = () => {
    // Open GitHub issues page
    window.open('https://github.com/sgtspangler/division2-build-calculator/issues/new', '_blank')
  }

  return (
    <div className="controls-panel">
      <button className="control-btn save-share" onClick={handleSaveAndShare}>
        <span className="btn-icon">💾</span>
        <span className="btn-text">Save & Share</span>
      </button>

      <button className="control-btn screenshot" onClick={handleScreenshot}>
        <span className="btn-icon">📸</span>
        <span className="btn-text">Screenshot</span>
      </button>

      <button className="control-btn clear-new" onClick={handleClearAndNew}>
        <span className="btn-icon">🗑️</span>
        <span className="btn-text">Clear & New Build</span>
      </button>

      <button className="control-btn report-issue" onClick={handleReportIssue}>
        <span className="btn-icon">🐛</span>
        <span className="btn-text">Report an Issue</span>
      </button>
    </div>
  )
}

export default ControlsPanel
