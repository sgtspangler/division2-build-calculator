# Division 2 Build Calculator

**By Sgt.Spangler**

A comprehensive web-based build calculator for Tom Clancy's The Division 2. Create, optimize, and share your agent builds with detailed stat calculations and gear configurations.

🌐 **Live Demo**: [https://sgtspangler.github.io/division2-build-calculator/](https://sgtspangler.github.io/division2-build-calculator/)

## 🎯 Features

- **Complete Gear System**: 6 gear slots with brands, attributes, talents, and mods
- **Weapon Configuration**: 3 weapon slots with full customization
- **Skills & Specializations**: All skills and specializations supported
- **SHD Watch**: 16 SHD stats with level management
- **Stat Calculations**: Accurate build stats matching in-game values
- **Build Sharing**: URL-based sharing for easy collaboration
- **Local Storage**: Save multiple builds locally
- **Export/Import**: JSON-based build import/export

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (tested with Node.js 24.11.1)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sgtspangler/division2-build-calculator.git
cd division2-build-calculator

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Fix ESLint issues automatically

## 🛠️ Technology Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.11
- **Routing**: react-router-dom 6.28.0
- **Styling**: Modular CSS
- **Deployment**: GitHub Pages

## 📖 Project Structure

```
division2-build-calculator/
├── src/
│   ├── components/      # React components
│   ├── data/           # Game data (gear, weapons, brands, etc.)
│   ├── utils/          # Utility functions (calculations, encoding)
│   ├── styles/         # CSS modules
│   └── assets/         # Images and static assets
├── public/             # Public assets
├── scripts/            # Build scripts
└── .github/workflows/  # GitHub Actions CI/CD
```

## 🤝 Contributing

Contributions are welcome! Please check the [TODO.md](TODO.md) file for planned features and improvements.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run linting: `npm run lint`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Reference implementation: [mx-division-builds](https://github.com/mxswat/mx-division-builds)
- Tom Clancy's The Division 2 by Ubisoft
- The Division 2 community for game data and feedback

## 📧 Contact

**Sgt.Spangler** - Project Maintainer

---

**Note**: This is a fan-made tool and is not affiliated with or endorsed by Ubisoft.
