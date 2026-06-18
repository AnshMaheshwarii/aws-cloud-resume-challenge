# AWS Cloud Resume Challenge

A personal portfolio website built as part of the AWS Cloud Resume Challenge. The project showcases my background in cloud computing, DevOps, networking, and cybersecurity, along with hands-on experience in modern frontend development.

## Overview

The site functions as an online resume and portfolio, including:

- Portfolio website with responsive layout for desktop and mobile
- Skills and certifications section
- Project showcase
- Downloadable resume
- Contact and social links
- Visitor counter (planned)
- Cloud-native deployment architecture (planned)

## Features

**Portfolio website**
- Dark-themed UI
- Responsive design
- Smooth scrolling navigation
- Interactive project cards

**Skills showcase**
- Cloud technologies
- DevOps tools
- Networking concepts
- Programming languages/frameworks

**Certifications & education**
- AWS Certified Solutions Architect – Associate
- CCNA 200-301
- Cyber Security Expert
- Academic background

**Projects**
- Zenith Edge – cloud-based client management platform
- AWS Cloud Resume Challenge (this project)
- CI/CD pipeline automation project

**Contact**
- Email
- GitHub
- LinkedIn
- Instagram
- Phone number

## Tech Stack

**Frontend**
- React 18
- Vite 5
- JavaScript
- CSS Modules
- Font Awesome

**Cloud & DevOps (planned)**
- AWS S3
- AWS CloudFront
- AWS Route 53
- AWS Lambda
- AWS DynamoDB
- AWS API Gateway
- GitHub Actions

## Project Structure

```text
aws-cloud-resume-challenge/
│
├── public/
├── src/
│   ├── components/
│   ├── styles/
│   └── main.jsx
│
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
└── README.md
```


## Planned AWS Architecture

```text
User
  │
  ▼
CloudFront
  │
  ▼
S3 Portfolio Website
  │
  ▼
API Gateway
  │
  ▼
AWS Lambda
  │
  ▼
DynamoDB
```

## Local Development

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Future Improvements

- Host on AWS S3
- CloudFront CDN integration
- Custom domain via Route 53
- Visitor counter using Lambda and DynamoDB
- CI/CD pipeline using GitHub Actions
- Infrastructure as Code with Terraform
- Improved monitoring and logging

## Author

**Ansh Maheshwari**
Cloud | DevOps | Cybersecurity
GitHub: [https://github.com/AnshMaheshwarii](https://github.com/AnshMaheshwarii)
