# Division 2 Build Calculator - Comprehensive TODO

**Project Goal**: Create a web-based Division 2 build calculator matching the quality and features of the reference implementation.

## 🔗 References

- **Web Interface Reference**: https://mxswat.github.io/mx-division-builds/#/
- **Code Reference**: https://github.com/mxswat/mx-division-builds

---

## 📋 Project Phases

### Phase 0: Project Setup & Foundation
- [ ] Initialize React + Vite project
- [ ] Configure Vite for GitHub Pages deployment
- [ ] Set up project structure (components, data, utils, styles)
- [ ] Create basic HTML template with title "Division 2 Build Calculator by Sgt.Spangler"
- [ ] Install core dependencies (React, React Router, etc.)
- [ ] Configure ESLint
- [ ] Create README.md with project description
- [ ] Create .gitignore
- [ ] Initialize git repository (git init)
- [ ] Create GitHub repository (division2-build-calculator)
- [ ] Add remote origin (git remote add origin)
- [ ] Initial commit and push to GitHub
- [ ] Configure GitHub Pages in repository settings
- [ ] Set up GitHub Actions workflow for automated deployment
  - Create .github/workflows/deploy.yml
  - Auto-build on push to main branch
  - Auto-deploy to GitHub Pages
  - Free for public repositories
- [ ] Add GitHub Actions workflow for code quality checks
  - Run ESLint on pull requests
  - Run build test to catch errors
  - Prevent merging if checks fail
- [ ] Test GitHub Pages deployment with minimal "Hello World" page
  - Verify base path routing works
  - Confirm page loads at https://sgtspangler.github.io/division2-build-calculator/
  - Fix any deployment issues before building features

### Phase 1: Core UI Structure
- [ ] **Header Component**
  - Project title and branding
  - Navigation (if needed)
  
- [ ] **Gear Panel Component**
  - 6 gear slots: Mask, Backpack, Chest, Gloves, Holster, Kneepads
  - Each slot shows: item name, brand, core attribute, attributes, talent, mod slots
  - Dropdown/select for choosing gear items
  
- [ ] **Weapons Panel Component**
  - 3 weapon slots: Primary, Secondary, Sidearm
  - Each shows: weapon name, type, damage, talents, mods
  - Dropdown/select for choosing weapons
  
- [ ] **Skills Panel Component**
  - 2 skill slots
  - Skill variant selection
  - Specialization selection
  
- [ ] **Stats Panel Component**
  - Build statistics display
  - Offensive stats: Weapon Damage, Crit Chance, Crit Damage, Headshot Damage
  - Defensive stats: Armor, Health, Hazard Protection
  - Utility stats: Skill Damage, Skill Haste, Skill Repair, Skill Duration
  - DPS calculations (if applicable)

- [ ] **Controls Panel Component**
  - Save Build button
  - Load Build button
  - Clear Build button
  - Export Build button
  - Share Build button (copy URL)

- [ ] **SHD Watch Panel Component**
  - 16 SHD stats with level inputs
  - Categories: Offensive (red), Defensive (blue), Utility (yellow), Handling (white)
  - 12 stats with max 10 levels
  - 4 stats with max 20 levels (Crit Hit Damage, Headshot Damage, Skill Duration, Ammo Capacity)
  - Total counter (max 200)
  - Set All to Max button
  - Reset All button

### Phase 2: Game Data
- [ ] **Gear Data Structure**
  - Create gear.js with all gear items
  - Structure: id, name, slot, brand, quality, coreAttribute, attributes, talent, modSlots
  - Include: High-End items, Named items, Exotic items, Gear Set items
  - Target: 100+ gear pieces
  
- [ ] **Weapon Data Structure**
  - Create weapons.json with all weapons
  - Structure: id, name, type, variant, damage, rpm, magSize, talents, modSlots
  - Include all weapon types: AR, SMG, LMG, Rifle, MMR, Shotgun, Pistol
  - Target: 50+ weapons
  
- [ ] **Brands Data**
  - Create brands.json with all brand sets
  - Structure: id, name, bonuses (1pc, 2pc, 3pc, 4pc)
  
- [ ] **Talents Data**
  - Chest talents
  - Backpack talents
  - Weapon talents
  - Include descriptions and stat bonuses
  
- [ ] **Skills Data**
  - All skills with variants
  - Skill descriptions and base stats
  
- [ ] **Specializations Data**
  - All 6 specializations
  - Specialization bonuses and trees
  
- [ ] **Gear Mods Data**
  - All mod types
  - Mod stats and values
  
- [ ] **SHD Watch Data**
  - 16 stats with categories, max levels, and bonuses per level
  - Already defined in shdWatch.js structure

### Phase 3: Build Logic & Calculations
- [ ] **Base Stats System**
  - Define base stats for agents (level 40, no gear)
  - Base armor, health, weapon damage multipliers
  
- [ ] **Gear Core Calculations**
  - Red cores → Weapon Damage
  - Blue cores → Armor
  - Yellow cores → Skill Tier
  
- [ ] **Attribute Calculations**
  - Sum all attributes from gear
  - Apply percentage bonuses correctly
  - Handle additive vs multiplicative bonuses
  
- [ ] **Brand Set Bonuses**
  - Detect equipped brands
  - Count pieces per brand
  - Apply 1pc, 2pc, 3pc bonuses
  
- [ ] **Talent Effects**
  - Parse talent descriptions
  - Apply conditional bonuses (if calculable)
  - Display active talents
  
- [ ] **SHD Watch Bonuses**
  - Calculate total bonuses from SHD levels
  - Integrate into build stats
  
- [ ] **Gear Mod Integration**
  - Add mod stats to gear piece stats
  - Include in total calculations
  
- [ ] **Armor Calculation**
  - Formula: Sum of blue core armor × (1 + percentage bonuses)
  - Apply SHD armor %, gear attributes, brand bonuses
  - Research exact game formula
  
- [ ] **DPS Calculation**
  - Calculate theoretical DPS for each weapon
  - Account for: base damage, weapon damage %, crit chance, crit damage, headshot damage, RPM, reload time
  - Display primary weapon DPS

### Phase 4: Build Persistence
- [ ] **URL-based Build Sharing**
  - Install react-router-dom
  - Set up routing (/, /build/:buildId)
  - Encode build state to base64 URL parameter
  - Decode URL parameter to load build
  - Debounce URL updates (500ms)
  
- [ ] **Local Storage**
  - Save builds to localStorage
  - Load saved builds
  - Manage multiple saved builds
  
- [ ] **Import/Export**
  - Export build as JSON file
  - Import build from JSON file
  - Share via clipboard (JSON or URL)

### Phase 5: UX Enhancements
- [ ] **Advanced Filtering/Search**
  - Filter gear by: brand, slot, attribute type, talent
  - Filter weapons by: type, talent
  - Search by name (fuzzy search)
  - Sort options: name, quality, brand
  
- [ ] **Modal-based Selection UI**
  - Click slot → open modal with all options
  - Large preview of item stats in modal
  - Search/filter within modal
  - Better for 100+ items
  
- [ ] **Gear Comparison**
  - Compare selected gear with alternatives
  - Show stat differences
  - Highlight upgrades/downgrades
  
- [ ] **Responsive Design**
  - Desktop: multi-column grid layout
  - Tablet: 2-column layout
  - Mobile: single column, collapsible panels
  - Touch-friendly controls
  
- [ ] **Dark/Light Theme**
  - Theme toggle
  - Persist theme preference
  - Division 2 inspired color schemes

### Phase 6: Advanced Features
- [ ] **DPS/TTK Charts**
  - Install charting library (Chart.js, Recharts, or Plotly)
  - Damage over time graph
  - Time-to-kill vs enemy armor values
  - Visual comparison of build changes
  
- [ ] **Build Optimization Suggestions**
  - Analyze current build
  - Suggest improvements (better gear, attribute recalibration)
  - Show potential stat gains
  
- [ ] **Expertise System**
  - Add expertise level (0-21) to each item
  - Small stat increases per level
  - Include in calculations
  
- [ ] **Screenshot Feature**
  - Install html2canvas library
  - Capture build as image
  - Download or copy to clipboard
  - Social media sharing
  
- [ ] **Build Templates/Presets**
  - Popular build archetypes (DPS, Tank, Skill, Hybrid)
  - One-click load template
  - Community-contributed builds
  
- [ ] **Loadout Management**
  - Create multiple loadouts (up to 16, like in-game)
  - Quick switch between loadouts
  - Name and organize loadouts

### Phase 7: Deployment & Documentation
- [ ] **GitHub Pages Deployment**
  - Configure vite.config.js for base path
  - Create deployment workflow
  - Test production build
  
- [ ] **Documentation**
  - User guide (how to use the calculator)
  - Data contribution guide
  - Development setup guide
  - API documentation (if applicable)
  
- [ ] **Code Quality**
  - Add PropTypes validation
  - Add unit tests for calculations
  - Add JSDoc comments
  - Fix all ESLint errors
  - Optimize performance (memoization, lazy loading)

---

## 📊 Feature Priority Matrix

### Must Have (MVP)
- Core UI Structure (Gear, Weapons, Skills, Stats, Controls panels)
- Basic game data (20+ gear, 10+ weapons, all skills)
- Build calculations (cores, attributes, brand bonuses)
- URL-based build sharing
- Basic responsive design

### Should Have (Version 1.0)
- Full game data (100+ gear, 50+ weapons)
- SHD Watch system
- Gear mods system
- Advanced filtering/search
- Modal-based selection
- Local storage for saved builds
- Armor calculation with percentage bonuses

### Could Have (Future Versions)
- DPS/TTK charts
- Expertise system
- Screenshot feature
- Dark/light theme
- Build optimization suggestions
- Build templates

### Won't Have (Scope Exclusions)
- Vendor reset integration (too much maintenance)
- Real-time inventory tracking
- In-game overlay
- Multiplayer features

---

## 🎯 Success Criteria

1. **Functional Parity**: Match core features of reference implementation
2. **Data Completeness**: 100+ gear items, 50+ weapons, all talents/skills
3. **Accurate Calculations**: Build stats match in-game values
4. **Shareable Builds**: URL-based sharing works reliably
5. **Performance**: Loads in <2s, calculations instant
6. **Mobile Friendly**: Usable on phones and tablets
7. **Clean Code**: ESLint passing, well-documented, maintainable

---

## 🔧 Technical Stack

- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.5
- **Routing**: react-router-dom 6.x
- **Styling**: CSS (modular CSS files)
- **Deployment**: GitHub Pages
- **Development**: Node.js 24.11.1, npm

---

## 📝 Development Workflow

1. **Follow AI_WORKSPACE_RULES.md** (when created)
2. **Work in feature branches** (when git initialized)
3. **Lint before committing**
4. **Test calculations against game values**
5. **Update TODO.md progress regularly**
6. **Incremental commits with clear messages**

---

## 🚀 Next Steps

1. Start with Phase 0: Project Setup & Foundation
2. Create basic file structure
3. Set up package.json with dependencies
4. Create initial HTML template
5. Begin Phase 1: Core UI Structure

---

**Last Updated**: December 4, 2025
**Project Start**: December 4, 2025
