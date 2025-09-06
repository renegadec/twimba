# 🐦 Twimba - Twitter Clone

A modern Twitter clone built with vanilla JavaScript and Vite, featuring a clean and responsive design.

## ✨ Features

- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- 🎨 **Modern UI** - Clean, Twitter-inspired interface with Roboto font
- 💬 **Tweet Feed** - Display tweets with user profiles, likes, and retweets
- 🖼️ **Profile Pictures** - Support for user profile images
- ⚡ **Fast Loading** - Built with Vite for optimal performance
- 🌐 **Live Demo** - Deployed on Netlify

## 🚀 Live Demo

[View Live Site](https://twimba0x.netlify.app)

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: CSS3 with custom properties
- **Deployment**: Netlify
- **Version Control**: Git & GitHub

## 📁 Project Structure

```
twimba/
├── src/
│   ├── main.js          # Main application logic
│   └── style.css        # Application styles
├── public/
│   ├── _redirects       # Netlify SPA routing
│   └── assets/
│       ├── data/
│       │   └── data.js  # Tweet data
│       └── images/      # Profile pictures
├── index.html           # HTML entry point
├── netlify.toml         # Netlify configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/renegadec/twimba.git
   cd twimba
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Features Overview

### Tweet Display
- User handle and profile picture
- Tweet content with proper formatting
- Like and retweet counters
- Reply functionality

### Responsive Design
- Mobile-first approach
- Clean typography with Roboto font
- Twitter-inspired color scheme
- Smooth user interactions

## 🌐 Deployment

This project is configured for easy deployment on Netlify:

1. **Automatic Deployment**: Connected to GitHub for automatic deployments
2. **SPA Routing**: Configured with `_redirects` for single-page application routing
3. **Build Configuration**: Optimized build settings in `netlify.toml`

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@renegadec](https://github.com/renegadec)
- X(Twitter): [@crnyirenda](https://x.com/crnyirenda)

## 🙏 Acknowledgments

- Inspired by Twitter/X.com
- Built with modern web technologies
- Thanks to the open-source community

---

⭐ **Star this repository if you found it helpful!**
