# AWS Cloud Resume Challenge

This is my take on the AWS Cloud Resume Challenge — a personal portfolio site that doubles as a resume and a way to actually show (not just tell) what I'm learning in cloud, DevOps, networking, and security.

Right now it's a React frontend. The cloud architecture is the next phase — S3, CloudFront, Lambda, DynamoDB, the whole deal. Building it piece by piece instead of dumping everything at once.

## Live Demo

https://ansh-maheshwari.netlify.app


## What's on the site

- A portfolio/resume hub with my projects, skills, and certs
- Responsive layout — works on phone and desktop
- Downloadable resume
- Contact links (email, GitHub, LinkedIn, etc.)
- Visitor counter and full cloud backend — coming soon

## Stack

**Frontend (live)**
- React 18 + Vite 5
- Plain JS, CSS Modules
- Font Awesome for icons

**Cloud/DevOps (in progress)**
- S3 for hosting
- CloudFront for CDN
- Route 53 for the custom domain
- Lambda + API Gateway + DynamoDB for the visitor counter
- GitHub Actions for CI/CD

## Certifications

- AWS Certified Solutions Architect – Associate
- CCNA 200-301
- Cyber Security Expert

## A few things I've built

- **Zenith Edge** — a cloud-based client management platform
- **This site** — AWS Cloud Resume Challenge
- A small CI/CD pipeline automation project

## Project structure

```text
aws-cloud-resume-challenge/
├── public/
├── src/
│   ├── components/
│   ├── styles/
│   └── main.jsx
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## Architecture (planned)

```text
User → CloudFront → S3 (site) → API Gateway → Lambda → DynamoDB
```

Pretty standard serverless setup for this kind of challenge, nothing fancy — just trying to actually understand each piece instead of copy-pasting a Terraform template.

## Running it locally

```bash
npm install      # install deps
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview the build
```

## What's next

- [ ] Deploy to S3 + CloudFront
- [ ] Hook up a custom domain via Route 53
- [ ] Build the visitor counter (Lambda + DynamoDB)
- [ ] CI/CD with GitHub Actions
- [ ] Terraform for IaC
- [ ] Better logging/monitoring once it's live

## About me

**Ansh Maheshwari** — into cloud, DevOps, and security, learning by building stuff like this instead of just reading docs.

GitHub: [github.com/AnshMaheshwarii](https://github.com/AnshMaheshwarii)
