# 🕉️ Shree Jagannatha Temple Tourism Website

A beautiful, modern React-based website dedicated to promoting tourism and providing comprehensive information about the sacred Shree Jagannatha Temple in Puri, Odisha, India.

## ✨ Features

- **🎭 Stunning Visual Experience**: Dynamic image transition animation showcasing the temple's historical evolution
- **📱 Responsive Design**: Fully optimized for all devices and screen sizes
- **🎨 Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions
- **🏛️ Rich Content**: Comprehensive information about temple history, rituals, and tourism
- **⚡ Fast Performance**: Built with Vite for optimal loading speed and performance

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Shree-Jagannatha
   ```

2. **Navigate to the client directory**
   ```bash
   cd client
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Build for Production

```bash
npm run build
```

## 🌐 Deployment

This project is configured for deployment on both **GitHub Pages** and **Vercel**.

### 📄 **GitHub Pages Deployment**

#### Automatic Deployment (Recommended)
- Push changes to the `main` branch
- GitHub Actions will automatically build and deploy
- Website will be available at: `https://subhajitlucky.github.io/Shree-Jagannatha/`

#### Manual Deployment
```bash
cd client
npm install gh-pages --save-dev
npm run deploy:gh
```

### ⚡ **Vercel Deployment**

#### Method 1: Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. In the `client` directory: `vercel`
3. Follow the prompts

#### Method 2: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Set the root directory to `client`
4. Deploy automatically

#### Method 3: Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/subhajitlucky/Shree-Jagannatha&project-name=shree-jagannatha&root-directory=client)

### 🔧 **Deployment Configuration**

The project includes:
- **GitHub Actions workflow** (`.github/workflows/deploy.yml`)
- **Vercel configuration** (`client/vercel.json`)
- **Base path configuration** for GitHub Pages in `vite.config.js`
- **Deployment scripts** in `package.json`

## 🎯 Project Structure

```
Shree-Jagannatha/
├── .github/workflows/      # GitHub Actions for auto-deployment
├── client/                 # React application
│   ├── public/            # Static assets and temple images
│   ├── src/               # Source code
│   │   ├── components/    # Reusable React components
│   │   ├── styles/        # Component-specific CSS files
│   │   ├── pages/         # Page components
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Application entry point
│   ├── vercel.json        # Vercel deployment configuration
│   └── package.json       # Dependencies and scripts
├── img/                   # Original temple images (old)
├── img new/              # Original temple images (new)
├── README.md             # Project documentation
└── ROADMAP.md            # Development roadmap
```

## 🎨 Key Animation Features

### Image Transition Effect
- **Initial State**: Displays the historical temple image
- **Transition**: After 2 seconds, the modern temple image gradually reveals from left to right
- **Duration**: 3-second smooth transition with easing
- **Effect**: Creates a stunning "erasing/painting" visualization showing the temple through time

### Interactive Elements
- Hover effects on feature cards
- Gradient text animations on the hero title
- Smooth button transitions with shadow effects
- Responsive animations that adapt to screen size

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Pure CSS with custom animations
- **Development**: ESLint for code quality
- **Deployment**: GitHub Pages + Vercel

## 🎭 Website Sections

1. **Hero Section**: Dynamic temple image transition with call-to-action
2. **Welcome Section**: Introduction to the temple and its significance
3. **Features Section**: Key attractions and information categories
4. **Footer**: Copyright and devotional message

## 🙏 Cultural Significance

This website celebrates the spiritual and cultural heritage of:
- **Lord Jagannatha**: The presiding deity of the temple
- **Rath Yatra**: The famous chariot festival
- **Puri**: The holy city and pilgrimage destination
- **Odisha**: The state's rich religious traditions

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔮 Future Enhancements

See [ROADMAP.md](./ROADMAP.md) for detailed development plans and upcoming features.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for suggestions and improvements.

## 📄 License

This project is created for educational and cultural promotion purposes.

## 🙏 Acknowledgments

- Shree Jagannatha Temple, Puri
- The devotional community of Lord Jagannatha
- All the photographers who captured the temple's beauty

---

**Jai Jagannatha! 🙏**

*May Lord Jagannatha bless all visitors to this sacred digital space.* 