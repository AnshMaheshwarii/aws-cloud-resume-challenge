# Ansh Maheshwari — Portfolio

Personal portfolio website for a Cloud, DevOps & Cybersecurity engineer.

## Tech Stack

- **React 18** + **Vite 5**
- **CSS Modules** — scoped per-component styles
- **Font Awesome 6** — brand & UI icons
- **Geist** — font (loaded from Google Fonts)
- **AWS Lambda + DynamoDB** — serverless visitor counter (backend)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:3000
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← add your resume here
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Background.jsx   ← animated canvas nodes
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── About.jsx
    │   ├── Skills.jsx
    │   ├── Certifications.jsx
    │   ├── Projects.jsx
    │   ├── Contact.jsx
    │   └── Footer.jsx
    └── styles/
        ├── global.css       ← design tokens + shared helpers
        ├── Background.module.css
        ├── Navbar.module.css
        ├── Hero.module.css
        ├── About.module.css
        ├── Skills.module.css
        ├── Certifications.module.css
        ├── Projects.module.css
        ├── Contact.module.css
        └── Footer.module.css
```

## Customisation Checklist

1. **Resume** — place your PDF at `public/resume.pdf`
2. **Contact links** — update `src/components/Contact.jsx` with real URLs
3. **Project links** — update GitHub & demo URLs in `src/components/Projects.jsx`
4. **Visitor counter** — set `VISITOR_API` in `src/components/Footer.jsx` to your Lambda endpoint
5. **Social links** in `src/components/Navbar.jsx` and `Hero.jsx`

## Deployment (AWS Cloud Resume Challenge)

```
S3 (static hosting) → CloudFront (CDN) → Route 53 (custom domain)
CI/CD: GitHub Actions → build → sync to S3 → invalidate CloudFront
Visitor counter: API Gateway → Lambda (Python) → DynamoDB
```
