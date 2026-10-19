# Chidiogo Ozioma Anisiobi — Portfolio

A responsive, editorial-style static portfolio for GitHub Pages. Built with semantic HTML, CSS, and a small amount of vanilla JavaScript; no build step or package installation is required.

## Run locally

Open `index.html` in a browser, or start a local static server from the project root:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create or use the repository that will host the portfolio.
2. Copy the project files to the repository root and commit them.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Alternatively, use the included GitHub Actions workflow: in **Settings → Pages**, set the source to **GitHub Actions**.

This is a root-relative-free static site: asset references are relative (`assets/...`) and work for both user sites and project sites when opened from the deployed `index.html` route. If adding nested pages later, use a base-path-aware strategy for assets.

## Project structure

```text
.
├── index.html
├── assets/
│   ├── content.js
│   ├── favicon.svg
│   ├── main.js
│   └── styles.css
├── .github/workflows/deploy.yml
├── package.json
└── README.md
```

## Content and verification checklist

Before publishing, confirm:

- The current status/end date for the Kosy Medical Laboratory role. The page shows the start month and explicitly flags the end date for confirmation rather than asserting “present”.
- The Perfetti Van Melle entry (April–July 2024) has been omitted from public content pending clarification of the relationship and duties.
- The supplied email, portfolio, LinkedIn, GitHub, and certificate destinations work and are the intended public links.
- The candidate approves all public wording and the CV-derived career details.

The certificate is described as a certificate of learning, not a degree or professional licence. No projects, project results, proficiency ratings, patient information, testimonials, or unsupported achievements have been invented. The projects area is an honest empty state until genuine work is available.

## Accessibility and performance notes

- Semantic landmarks, skip link, visible focus styles, labelled navigation, and keyboard-operable mobile menu.
- Reduced-motion preferences are respected.
- No client-side framework, external image requests, tracking scripts, or third-party UI library.
- Google Fonts are optional external font requests; system fallbacks are provided if unavailable.

## Tests

Run the built-in checks with:

```bash
npm test
```

No dependency installation is needed. The checks validate core page structure, key sections, link targets, and local asset references. Also manually test keyboard navigation and mobile layout in a browser before launch.
