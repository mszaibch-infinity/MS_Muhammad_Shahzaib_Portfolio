# Website operations checklist

Your project folder: `digital-self-gem-448ac62d` (Vite + React + TypeScript).

---

## Part A — After cloning from GitHub: run the site locally

### Prerequisites
- [ ] Install **Node.js** (LTS) from https://nodejs.org — includes `npm`.

### Steps
1. [ ] Open **Terminal** (PowerShell or Command Prompt).
2. [ ] Go to the project folder (adjust the path if yours differs):
   ```powershell
   cd "C:\Users\YOUR_USER\...\digital-self-gem-448ac62d"
   ```
3. [ ] Install dependencies (first time, or after `package.json` changes):
   ```powershell
   npm install
   ```
4. [ ] Start the development server:
   ```powershell
   npm run dev
   ```
5. [ ] In the terminal output, find the line **Local:** `http://localhost:8080/` (or another port if 8080 is busy).
6. [ ] Open that URL in your browser.

### Useful commands
| Goal | Command |
|------|---------|
| Production build (check before deploy) | `npm run build` |
| Preview the built site locally | `npm run preview` |
| Run tests | `npm run test` |

---

## Part B — Remove Lovable / developer branding and leftovers

### Files and folders to review

| What | Where | What to do |
|------|-------|------------|
| README boilerplate | `README.md` | Replace “Welcome to your Lovable project” with your own description (optional). |
| Lovable IDE memory (not used by the live site) | Folder `.lovable\` | Safe to **delete the whole `.lovable` folder** if you do not use Lovable Cloud — it is not required for `npm run dev` or GitHub Pages. |
| Social / link preview image | `public\og-image.jpg` | Replace with **your** image (same filename) or change `index.html` meta tags to point to another file. Keep size reasonable (e.g. under ~2 MB). |
| Site URL for WhatsApp / LinkedIn previews | `package.json` → field **`homepage`** | Set to your **real** live URL (e.g. GitHub Pages). Optional override: create `.env.production` with `VITE_SITE_URL=https://your-domain.com` — see `vite.config.ts` (build rewrites Open Graph image URLs). |
| Page title & meta description | `index.html` | Edit `<title>`, `meta name="description"`, and `og:*` / `twitter:*` tags to match your wording. |
| **Slug mismatch (projects 404)** | `src\components\portfolio\ProjectOutcomes.tsx` vs `src\pages\ProjectDetail.tsx` | The **slug** in each tile (`slug: "..."`) must match a key in the `projects` object in `ProjectDetail.tsx`. If they do not match, clicking a project shows “Project not found”. Align names or add entries — see Part C. |

### Already removed in this repo (nothing to delete unless you re-added it)
- **`lovable-tagger`** npm package — removed from `package.json`; do not reinstall unless you want Lovable dev tooling again.

### Search the repo for stray mentions
In VS Code / Cursor: **Ctrl+Shift+F** → search `lovable` (case insensitive). Fix any hits in docs or config you still care about.

---

## Part C — Projects: where to edit and how to add content (blog-style, links, embeds)

### How navigation works today
1. **Home page** → section **“Recent Projects”** is built in:
   - **`src\components\portfolio\ProjectOutcomes.tsx`**
   - Each item has: `slug`, `title`, `subtitle`, `blurb`.
   - `slug` becomes the URL path: `/projects/your-slug`.

2. **Project detail page** (the “article” view after you click a tile):
   - **`src\pages\ProjectDetail.tsx`**
   - At the top, a JavaScript object **`projects`** maps each **`slug`** to:
     - `icon`, `title`, `tagline`, `sections` (array of `{ heading, body }`).
   - **`slug` in ProjectOutcomes must exactly match a key in `projects`.**

### Checklist to add a new project
1. [ ] Open **`ProjectOutcomes.tsx`** — add an object to the `projects` array with a **unique** `slug` (use lowercase and hyphens, e.g. `my-water-project`).
2. [ ] Open **`ProjectDetail.tsx`** — add a **new property** to the `projects` object with the **same slug string** as the key.
3. [ ] Fill in `title`, `tagline`, and `sections` (each section is a heading + body paragraph).

### Opening links in a **new tab** (reports, dashboards, YouTube)
Right now, section bodies are plain text in `ProjectDetail.tsx`. To add HTML-like behavior you must extend the code.

**Option 1 — External link (simplest, no code change to structure)**  
Put the full URL in the `body` string; users copy-paste. Not ideal.

**Option 2 — Add a link field (small code change)**  
Extend the project type with e.g. `links: { label: string; url: string; external?: boolean }[]` and render `<a href={...} target="_blank" rel="noopener noreferrer">` in `ProjectDetail.tsx`.

**Option 3 — Embeds (iframe / video)**  
- Many dashboards (Power BI, Looker, etc.) provide an **embed URL**.  
- YouTube gives an **embed** URL (`youtube.com/embed/...`).  
- In React, you render:
  ```tsx
  <iframe title="Dashboard" src="https://..." className="w-full aspect-video rounded-lg border" loading="lazy" />
  ```
- **Security / CSP:** some sites block iframe embedding (`X-Frame-Options`). If an embed is blank, the host may forbid iframes — use “Open in new tab” instead.

**Recommended workflow for “blog + embed”:**  
1. Add or extend `sections` in `ProjectDetail.tsx` to support `body` **or** `html` **or** `embedUrl` (you or a developer adds the JSX once).  
2. Put long narrative text in `sections[].body`.  
3. Add one section with an iframe or external button for the dashboard or video.

### Route registration (already done)
**`src\App.tsx`** already has:
`<Route path="/projects/:slug" element={<ProjectDetail />} />`  
No change needed for new slugs, as long as they exist in `ProjectDetail.tsx`.

---

## Part D — Deploy (GitHub Pages or other)

### Build
```powershell
npm run build
```
Output folder: **`dist\`**. Upload or configure your host to serve **`dist`** contents.

### URL alignment
- Set **`homepage`** in `package.json` (or `VITE_SITE_URL` in `.env.production`) to the URL where the site is actually hosted, so **link previews** (WhatsApp, etc.) use the correct image URL after build.

---

## Quick file map

| File | Purpose |
|------|---------|
| `index.html` | Site title, meta tags, social preview |
| `package.json` | `homepage` for OG URLs at build time |
| `vite.config.ts` | Optional `VITE_SITE_URL`, HTML transforms |
| `public/og-image.jpg` | Default Open Graph / sharing image |
| `src/pages/Index.tsx` | Composes home sections |
| `src/components/portfolio/ProjectOutcomes.tsx` | Project tiles + slugs |
| `src/pages/ProjectDetail.tsx` | Full project “article” per slug |
| `src/App.tsx` | Routes |

---

*Generated for project maintenance. Open the companion `.html` in Microsoft Word and use File → Save As → Word Document (.docx) if you need a `.docx` file.*
