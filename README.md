# AWS Cloud Resume Challenge

This is my take on the AWS Cloud Resume Challenge — a personal portfolio site that doubles as a resume and a way to actually show (not just tell) what I'm learning in cloud, DevOps, networking, and security.

The frontend is React, deployed through Netlify, with a live serverless backend on AWS — S3, CloudFront, API Gateway, Lambda, and DynamoDB are all wired up and running the visitor counter.

**Live site:** [ansh-maheshwari.netlify.app](https://ansh-maheshwari.netlify.app/)
**Repo:** [github.com/AnshMaheshwarii/aws-cloud-resume-challenge](https://github.com/AnshMaheshwarii/aws-cloud-resume-challenge)

> Note: the whole thing was actually built and tested on AWS, but I'm not keeping every resource deployed permanently gotta watch the Free Tier usage. Screenshots of the full infra and the testing are in the repo if you want proof it works.

## What's on the site

- A portfolio/resume hub with my projects, skills, certs, and education
- Responsive layout — works on phone and desktop
- Downloadable resume
- Contact links (email, GitHub, LinkedIn, etc.)
- A live visitor counter, actually backed by AWS (not just for show)
- Auto-deploys on push via GitHub + Netlify

## Architecture

```text
User
│
├── CloudFront → S3 → React Frontend
│
└── React Frontend → API Gateway → Lambda → DynamoDB
```

**S3** — hosts the static frontend build
**CloudFront** — CDN in front of it, handles HTTPS and speeds things up globally
**API Gateway** — the public endpoint the frontend talks to
**Lambda** — backend logic that reads/writes the visitor count
**DynamoDB** — where the count actually lives

Nothing exotic here it's the classic serverless resume-challenge setup, but I built it myself piece by piece to actually understand how the pieces talk to each other.

## Stack

**Frontend**
- React 18 + Vite 5
- Plain JS, CSS Modules
- Font Awesome for icons

**AWS**
- S3, CloudFront, API Gateway, Lambda, DynamoDB

**DevOps**
- Git + GitHub
- Netlify CI/CD (push to main → live site updates)

## Certifications

- AWS Certified Solutions Architect – Associate
- CCNA 200-301
- Cyber Security Expert

## A few things I've built

- **Zenith Edge** — a cloud-based client management platform
- **This site** — AWS Cloud Resume Challenge, now with a real serverless backend
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

## Running it locally

```bash
npm install      # install deps
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview the build
```

## Skills this project actually exercises

Static hosting, CDNs, serverless compute, REST APIs, NoSQL, basic cloud architecture, Git/CI-CD, and frontend dev — the stuff the challenge is meant to teach, minus the buzzwords.

## What I learned

- Hosting static sites with S3
- Setting up CloudFront distributions and HTTPS delivery
- Building serverless APIs with API Gateway and Lambda
- Storing app data in DynamoDB
- Wiring a React frontend up to AWS backend services
- Git/GitHub for version control
- Automated deployments with GitHub + Netlify
- Debugging real cloud deployment issues (the actual learning part)

## What's next

- [ ] Custom domain
- [ ] Terraform for the infra instead of clicking through the console
- [ ] CloudWatch logging/monitoring
- [ ] Tighten up IAM and security configs

## About me

**Ansh Maheshwari** — into cloud, DevOps, and security, learning by building stuff like this instead of just reading docs.

GitHub: [github.com/AnshMaheshwarii](https://github.com/AnshMaheshwarii)
