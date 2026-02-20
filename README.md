# 👨‍💻 Aniket Joshi - Software Architect | Web3 Ninja | Cloud Mastermind

> *Welcome to my digitized consciousness.*

This is the source code for my personal portfolio, currently hosted with zero downtime (probably) at **[aniketljoshi.github.io](https://aniketljoshi.github.io)**. 

If you're reading this, you either want to hire me, steal my CSS styling, or you misclicked. Either way, welcome! ☕

## 🚀 The Tech Stack (What powers the matrix)
I recently nuked the old Angular codebase from orbit. The new stack is lighter, faster, and aggressively cyberpunk:

- **React + Vite** (Because waiting for Webpack builds is so 2019)
- **TypeScript** (Because `undefined is not a function` hurts my soul)
- **Tailwind CSS v4** (Utility classes go brrrrrr)
- **Framer Motion** (For that buttery-smooth, 60fps eye-candy)
- **Lucide React** (Sharp, clean icons)
- **GitHub Actions** (Automating deployments so I can drink more coffee)
- **GitHub Pages** (Free enterprise-grade hosting ✨)

## 📁 System Architecture (Directory Structure)
```
src/
├── assets/                  # Logos and other static bits
├── components/
│   ├── sections/            # The heavy lifters (Hero, Skills, Experience, etc.)
│   ├── Navbar.tsx           # Floating glass-panel navigation
│   └── Footer.tsx           # Where the copyright goes to die
├── App.tsx                  # The root component bridging the multiverse
├── index.css                # Where the custom Cyberpunk CSS magic happens
└── main.tsx                 # The spark that boots the system
```

## 🧑‍💻 Manual Override (Development)

Want to run this beast locally? Make sure you have Node.js installed, grab a cup of coffee, and run:

```bash
# Hack into the mainframe (download packages)
npm install

# Boot the local dev server at ludicrous speeds
npm run dev
```

Then navigate to `http://localhost:5173` in your browser of choice to see the neon lights.

## 🔁 CI/CD (The Machine Learning to Deploy)

Deployment is completely automated by `.github/workflows/main.yml`. When I push to `main`, the cloud hamsters wake up:
1. Checks out the code.
2. Summons Node.js v20.
3. Installs dependencies (`npm ci`).
4. Runs the Vite builder to squeeze everything into the `dist/` directory.
5. Teleports the `dist/` folder to the `gh-pages` branch using `peaceiris/actions-gh-pages@v4`.
6. Goes back to sleep.
