import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <img 
            src="/division2-build-calculator/division2-logo.png" 
            alt="Division 2 Logo" 
            className="header-logo"
          />
          <div className="header-text">
            <h1>Division 2 Build Calculator</h1>
            <span className="header-subtitle">
              by <a href="https://www.youtube.com/@sgtspangler" target="_blank" rel="noopener noreferrer" className="author-link">Sgt.Spangler</a>
            </span>
          </div>
        </div>
        <div className="header-status">
          <span className="status-badge">🚧 Under Development</span>
          <span className="phase-badge">Phase 1: Core UI</span>
        </div>
      </div>
    </header>
  )
}

export default Header
