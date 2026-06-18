import { useEffect, useRef } from 'react'
import styles from '../styles/Projects.module.css'

const PROJECTS = [
  {
    num: '01 — Featured',
    title: 'Zenith Edge',
    subtitle: 'Cloud-Based Client Management Platform',
    desc: 'A cloud-native client management platform built on AWS, enabling organisations to manage client data, automate workflows, and monitor usage in real time. Designed with multi-region failover, IAM role-based access, and a serverless backend for zero-maintenance scaling.',
    stack: ['AWS', 'React', 'Lambda', 'DynamoDB', 'CloudFront', 'GitHub Actions'],
    github: 'https://github.com/AnshMaheshwarii/zenith-edge',
    demo:   'https://zenith-edge.netlify.app/',
  },
  {
    num: '02 — Cloud Resume',
    title: 'AWS Cloud Resume Challenge',
    subtitle: 'Full-Stack Serverless Resume on AWS',
    desc: 'Full-stack resume deployed on AWS — S3 static hosting, CloudFront CDN distribution, a serverless visitor counter via Lambda and DynamoDB, and automated CI/CD deployment through GitHub Actions. Infrastructure managed entirely with Terraform.',
    stack: ['S3', 'CloudFront', 'Lambda', 'DynamoDB', 'Terraform', 'GitHub Actions', 'React'],
    github: 'https://github.com/AnshMaheshwarii/aws-cloud-resume-challenge',
    demo:   'https://ansh-maheshwari.netlify.app/',
  },
  {
    num: '03 — Automation',
    title: 'CI/CD Pipeline Automation',
    subtitle: 'End-to-End DevOps Pipeline with Jenkins & Docker',
    desc: 'End-to-end CI/CD pipeline using Jenkins, Docker, and Terraform. Automates build, test, containerisation, and deployment of a Python microservice to AWS ECS Fargate. Integrated static analysis, container image scanning, and Slack alerts for deployment events. All infrastructure defined as code.',
    stack: ['Jenkins', 'Docker', 'Terraform', 'Python', 'ECS Fargate', 'GitHub'],
    github: 'https://github.com/AnshMaheshwarii/cicd-pipeline',
    demo:   'https://pipeline.example.com',
  },
]

export default function Projects() {
  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.06 }
    )
    cardRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = el => {
    if (el && !cardRefs.current.includes(el)) cardRefs.current.push(el)
  }

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-sub">
            End-to-end cloud projects demonstrating infrastructure design, DevOps
            automation, and secure deployment practices.
          </p>
        </div>

        <div className={styles.grid}>
          {PROJECTS.map(project => (
            <article key={project.num} className={`${styles.card} reveal`} ref={addRef}>
              <div className={styles.meta}>
                <span className={styles.num}>{project.num}</span>
                <span className={styles.live}>Live</span>
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.subtitle}>{project.subtitle}</p>
              <p className={styles.desc}>{project.desc}</p>

              <div className={styles.stack}>
                {project.stack.map(tech => (
                  <span key={tech} className={styles.badge}>{tech}</span>
                ))}
              </div>

              <div className={styles.links}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-primary ${styles.btn}`}
                >
                  <i className="fa-brands fa-github" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline ${styles.btn}`}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
