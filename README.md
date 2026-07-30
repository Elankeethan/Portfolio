# S. Elankeethan — Portfolio

A personal portfolio built with React + Vite, covering education, skills,
projects (AgroFarm, AidMe, and side projects), experience, and contact
details for Health Information & Communication Technology / Electronics &
Automation Technologies.

## Stack

- React 19 + Vite
- Plain CSS (design tokens in `src/index.css`)
- Environment-variable-driven social/contact links (`src/siteConfig.js`)

## 1. Run locally

```bash
npm install
cp .env.example .env   # then fill in your real links
npm run dev
```

## 2. Environment variables (Twelve-Factor config)

All social/contact links are read from environment variables at build time —
see `.env.example` for the full list (`VITE_GITHUB_URL`, `VITE_LINKEDIN_URL`,
`VITE_FACEBOOK_URL`, `VITE_EMAIL`, `VITE_PHONE`, `VITE_LOCATION`,
`VITE_CV_URL`). `.env` is git-ignored — never commit real values, only
`.env.example`.

For the assignment screenshot: after running `cp .env.example .env` and
filling it in, take a screenshot of your local `.env` file.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

> `.env` will **not** be pushed (it's git-ignored) — that's expected and
> correct. Only `.env.example` (the template, no real values) is tracked.

## 4. Docker

```bash
docker build -t elankeethan-portfolio .
docker run -p 8080:80 elankeethan-portfolio
```

Visit `http://localhost:8080`. The Dockerfile is a two-stage build: Node
builds the static site, then Nginx serves the `dist/` output. Note that
Vite env vars are baked in at **build** time — if you change `.env`, rebuild
the image.

## 5. Deploy to Netlify

1. New site from Git → connect your GitHub repo.
2. Build command: `npm run build` · Publish directory: `dist`
   (already set in `netlify.toml`, Netlify should pick these up automatically).
3. Site settings → Environment variables → add each `VITE_*` key from
   `.env.example` with your real values.
4. Deploy. Take a screenshot of the environment variables screen in the
   Netlify UI for the assignment.

## 6. CI/CD in Netlify

Once connected, every `git push` to the linked branch triggers an automatic
build + deploy (visible under **Deploys** in your Netlify site dashboard).
Netlify also builds a preview deployment for pull requests before they're
merged. Screenshot the **Deploys** tab (showing build log + status) for the
assignment write-up.

## Project structure

```
src/
  components/     # Nav, Hero, About, Education, Skills, Projects, Experience, Contact, Footer
  siteConfig.js   # reads VITE_* env vars
  index.css       # design tokens + global styles
Dockerfile
nginx.conf
netlify.toml
.env.example
```
