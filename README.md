# Portfolio (React + Vite + Tailwind)

A clean, data‑driven portfolio site. Sections are populated from `src/data/content.ts` so you can add more projects/experience without touching components.

## ✨ Features
- React + Vite + Tailwind (fast, simple)
- Dark mode toggle
- Data‑driven sections: Projects, Experience, About, Achievements, Contact
- Smooth scroll nav
- Build to `docs/` for **GitHub Pages**

## 🚀 Quickstart
```bash
npm install
npm run dev
```

Edit your content in `src/data/content.ts`.

## 🛠 Add more items
Open `src/data/content.ts` and append new objects to `projects` or `experience`. You can also add new sections by creating a component in `src/components/` and referencing it in `src/App.tsx` with data from `src/data/`.

## 🌐 Deploy to GitHub Pages (no cost)
1. Create repo `username.github.io` (or any repo for project pages).
2. Push this project.
3. In GitHub → Settings → Pages → set source to **Deploy from a branch** and **/docs** folder on `main`.
4. Run:
```bash
npm run build
git add docs -f
git commit -m "Build site"
git push
```
Your site will be live at `https://username.github.io` (or `https://username.github.io/<repo>/` for project pages). If it's a project page, update `base` in `vite.config.js` to `'/<repo>/'` and rebuild.

## 📄 Resume
Place your PDF under `public/` and link it via `content.ts` (already set up).
