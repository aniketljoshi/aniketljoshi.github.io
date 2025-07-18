# Aniket Joshi - Software Architect | Full-Stack Web3 Engineer | Multi-Cloud Evangelist 

This is the source code for my personal portfolio hosted at **https://aniketljoshi.github.io**.

## 🚀 Tech Stack
- Angular 15+
- TypeScript
- Tailwind CSS
- GitHub Actions (for deployment)
- GitHub Pages

## 📁 Project Structure

```
src/
├── app/
│   ├── summary/
│   ├── experience/
│   ├── skills/
│   └── achievements-domains/
├── assets/
│   └── company_logos/
├── styles.css 
```

## 🧑‍💻 Development

```bash
npm install
ng serve
```

## 🔁 CI/CD

Deployment is handled by `.github/workflows/main.yml`:
- Installs dependencies
- Builds Angular app into `docs/`
- Adds `.nojekyll`
- Publishes to GitHub Pages
